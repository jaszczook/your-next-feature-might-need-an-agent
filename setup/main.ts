// Inject CSS into Mermaid shadow roots — the only way to style them.
// Mermaid renders async and replaces shadow root innerHTML, wiping any previously
// injected style. We therefore observe each shadow root directly and re-inject
// after every replacement.
export default function ({ isClient }: { app: any; router: any; isClient: boolean }) {
  if (!isClient) return

  function isBounded(el: Element): boolean {
    let node = el.parentElement
    while (node) {
      const c = typeof node.className === 'string' ? node.className : ''
      if (c.includes('problem-slide-wrap') || c.includes('problem-slide-stack') || c.includes('dia-slide'))
        return true
      node = node.parentElement
    }
    return false
  }

  function isInPanelTop(el: Element): boolean {
    let node = el.parentElement
    while (node) {
      const c = typeof node.className === 'string' ? node.className : ''
      if (c.includes('panel-top')) return true
      node = node.parentElement
    }
    return false
  }

  function ensureStyle(shadow: ShadowRoot, css: string) {
    let s = shadow.querySelector<HTMLStyleElement>('#mf')
    if (!s) {
      s = document.createElement('style')
      s.id = 'mf'
      shadow.prepend(s)
    }
    if (s.textContent !== css)
      s.textContent = css
  }

  // WeakSet prevents double-processing elements that already had a shadow root
  // when first seen (immediate pass) and are then also seen in the deferred pass.
  const watched = new WeakSet<Element>()

  function watchHost(el: Element) {
    if (watched.has(el)) return
    const shadow = el.shadowRoot
    if (!shadow) return
    watched.add(el)

    // bounded: fill container; panel-top: natural size centered; unbounded: fill width
    const bounded = isBounded(el)
    const css = bounded
      ? 'svg{display:block;max-width:none!important;width:100%!important;height:100%!important}'
      : isInPanelTop(el)
        ? 'svg{display:block;max-width:100%;width:auto;height:auto;margin:0 auto}'
        : 'svg{display:block;max-width:none!important;width:100%;height:auto}'

    ensureStyle(shadow, css)

    // Mermaid replaces shadow.innerHTML after async render, wiping injected styles.
    // Observe the shadow root to re-inject on every replacement.
    new MutationObserver(() => ensureStyle(shadow, css))
      .observe(shadow, { childList: true })
  }

  const ob = new MutationObserver(mutations => {
    const candidates: Element[] = []
    for (const m of mutations) {
      for (const n of m.addedNodes) {
        if (!(n instanceof Element)) continue
        candidates.push(n)
        n.querySelectorAll('*').forEach(c => candidates.push(c as Element))
      }
    }

    // Immediate pass: elements whose shadow root already exists at observer time.
    candidates.forEach(el => { if (el.shadowRoot) watchHost(el) })

    // Deferred pass: MutationObserver fires before Promise microtasks, so Vue's
    // watchEffect (which calls attachShadow) hasn't run yet at the immediate pass.
    // setTimeout(0) runs after all microtasks, by which point shadows are attached.
    setTimeout(() => candidates.forEach(el => { if (el.shadowRoot) watchHost(el) }), 0)
  })
  ob.observe(document.body, { childList: true, subtree: true })
}

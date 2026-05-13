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

  function watchHost(el: Element) {
    const shadow = el.shadowRoot
    if (!shadow) return

    // bounded: fill container; panel-top: natural size centered; unbounded: fill width
    const bounded = isBounded(el)
    const css = bounded
      ? 'svg{display:block;max-width:none!important;width:100%!important;height:100%!important}'
      : isInPanelTop(el)
        ? 'svg{display:block;max-width:100%;width:auto;height:auto;margin:0 auto}'
        : 'svg{display:block;max-width:none!important;width:100%;height:auto}'

    ensureStyle(shadow, css)

    // Mermaid sets shadow.innerHTML after async render, wiping injected styles.
    // Observe the shadow root itself so we can re-inject on every replacement.
    new MutationObserver(() => ensureStyle(shadow, css))
      .observe(shadow, { childList: true })
  }

  const ob = new MutationObserver(mutations => {
    for (const m of mutations) {
      for (const n of m.addedNodes) {
        if (!(n instanceof Element)) continue
        if (n.shadowRoot) watchHost(n)
        n.querySelectorAll('*').forEach(c => { if (c.shadowRoot) watchHost(c) })
      }
    }
  })
  ob.observe(document.body, { childList: true, subtree: true })
}

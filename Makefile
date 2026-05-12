.PHONY: install dev build export

install:
	npm install

dev:
	npm run dev

build:
	npm run build

export:
	npm run export

.DEFAULT_GOAL := dev

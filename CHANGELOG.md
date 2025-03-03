# Semantic Release Automated Changelog

# [1.3.0](https://github.com/AlaskaAirlines/auro-tokenlist/compare/v1.2.1...v1.3.0) (2025-03-03)


### Features

* update design tokens to v5 ([0449251](https://github.com/AlaskaAirlines/auro-tokenlist/commit/04492517e3cf3c0a12309c3dd5b2abddc4d87408))
* update node & design tokens ([47383a6](https://github.com/AlaskaAirlines/auro-tokenlist/commit/47383a68a0473a2cceb225aec78865f82e6b7a03))


### Performance Improvements

* remove test for 16.x, update version ([0311715](https://github.com/AlaskaAirlines/auro-tokenlist/commit/0311715328e07b1a0668995680cac920f6b2cdfa))
* update webcorestylesheets ([5cafb2b](https://github.com/AlaskaAirlines/auro-tokenlist/commit/5cafb2bcc602ef0c1c25701bd86cfa51ef8ecd55))

## [1.2.1](https://github.com/AlaskaAirlines/auro-tokenlist/compare/v1.2.0...v1.2.1) (2024-07-23)


### Performance Improvements

* update to current token prefix ([99ab63e](https://github.com/AlaskaAirlines/auro-tokenlist/commit/99ab63e1825537d93a4cd8297ce68828e6b2a359))

# [1.2.0](https://github.com/AlaskaAirlines/auro-tokenlist/compare/v1.1.3...v1.2.0) (2024-02-01)


### Features

* add support for new unit feature ([0b8986c](https://github.com/AlaskaAirlines/auro-tokenlist/commit/0b8986ce862d3594dbeda3570a8299a62f77aead))

## [1.1.3](https://github.com/AlaskaAirlines/auro-tokenlist/compare/v1.1.2...v1.1.3) (2023-11-01)


### Performance Improvements

* update to support new --ds token spec ([82e241c](https://github.com/AlaskaAirlines/auro-tokenlist/commit/82e241c4195add006311b7030d060db436eccfcc))

## [1.1.2](https://github.com/AlaskaAirlines/auro-tokenlist/compare/v1.1.1...v1.1.2) (2023-11-01)


### Performance Improvements

* update node support and repo dependencies ([15a3851](https://github.com/AlaskaAirlines/auro-tokenlist/commit/15a3851bd9da5a573e5c23bd277767c5c70aa7db))

## [1.1.1](https://github.com/AlaskaAirlines/auro-tokenlist/compare/v1.1.0...v1.1.1) (2023-09-26)


### Bug Fixes

* address currentToken reference returned value issue ([b7d9b75](https://github.com/AlaskaAirlines/auro-tokenlist/commit/b7d9b75d1544940fb65874cc7c67a6a2a4d08016))

# [1.1.0](https://github.com/AlaskaAirlines/auro-tokenlist/compare/v1.0.1...v1.1.0) (2023-09-26)


### Features

* update to support deprecated tokens with --ds ref ([d393f60](https://github.com/AlaskaAirlines/auro-tokenlist/commit/d393f606d1af1262a55b9d9892401b34cf896eb3))


### Performance Improvements

* update build dependencies ([151d488](https://github.com/AlaskaAirlines/auro-tokenlist/commit/151d4885d2e903b12b7acdce307c032a6138fb75))

## [1.0.1](https://github.com/AlaskaAirlines/auro-tokenlist/compare/v1.0.0...v1.0.1) (2022-04-05)


### Bug Fixes

* **icon:** remove use of icons due to error ([dea3965](https://github.com/AlaskaAirlines/auro-tokenlist/commit/dea39655cb5443ebb3784df26b82babd20271df8))

# 1.0.0 (2021-11-08)


### Bug Fixes

* **swatchList:** fix tests to mock all fetch calls ([b8e97ed](https://github.com/AlaskaAirlines/auro-tokenlist/commit/b8e97edd9c1c28a6367787dc0d381c2a142a8519))
* **tokens-list:** top version header from displaying on all deprecated tables ([c78ae28](https://github.com/AlaskaAirlines/auro-tokenlist/commit/c78ae2876fe88f8c9ebc46b6f93e26f2c740824c))


### Code Refactoring

* **tokens-list:** remove circle & swatch attributes and add swatchType enum ([11db4cf](https://github.com/AlaskaAirlines/auro-tokenlist/commit/11db4cf8926be68c12a8e4ac631f61be924757c0))
* **tokens-list:** streamline template, styling and update api ([46c5501](https://github.com/AlaskaAirlines/auro-tokenlist/commit/46c5501d892202bb95cffcfcb45e1fdec402476a))


### Features

* **wcag:** automate WCAG color ratio for documentation [#21](https://github.com/AlaskaAirlines/auro-tokenlist/issues/21) ([19f52ab](https://github.com/AlaskaAirlines/auro-tokenlist/commit/19f52abbcbe735d5c88bcb6cabd87fb2d76b725a))


### BREAKING CHANGES

* **tokens-list:** Removes circle,swatch booleans and add swatchType enum
* **tokens-list:** removed deprecated attribute and replaced it with type attribute

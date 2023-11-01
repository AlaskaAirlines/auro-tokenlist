# Semantic Release Automated Changelog

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

# Semantic Release Automated Changelog

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

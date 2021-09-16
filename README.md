# Design token display

`<auro-tokenavatar>`, `<auro-tokendisplay>` and `<auro-tokenlist>` are [HTML custom elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) for the purpose of illustrating design tokens and their related data.

## UI development browser support

For the most up to date information on [UI development browser support](https://auro.alaskaair.com/support/browsersSupport)

## Install

[![Build Status](https://img.shields.io/github/workflow/status/AlaskaAirlines/auro-tokendisplay/Test%20and%20publish?branch=master&style=for-the-badge)](https://github.com/AlaskaAirlines/auro-tokendisplay/actions?query=workflow%3A%22test+and+publish%22)
[![See it on NPM!](https://img.shields.io/npm/v/@aurodesignsystem/auro-tokendisplay?style=for-the-badge&color=orange)](https://www.npmjs.com/package/@aurodesignsystem/auro-tokendisplay)
[![License](https://img.shields.io/npm/l/@aurodesignsystem/auro-tokendisplay?color=blue&style=for-the-badge)](https://www.apache.org/licenses/LICENSE-2.0)

```shell
$ npm i @aurodesignsystem/auro-tokendisplay
```

Installing as a direct, dev or peer dependency is up to the user installing the package. If you are unsure as to what type of dependency you should use, consider reading this [stack overflow](https://stackoverflow.com/questions/18875674/whats-the-difference-between-dependencies-devdependencies-and-peerdependencies) answer.

### Design Token CSS Custom Property dependency

The use of any Auro custom element has a dependency on the [Auro design tokens](https://auro.alaskaair.com/getting-started/developers/design-tokens).

### CSS Custom Property fallbacks

[CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) are [not supported](https://auro.alaskaair.com/support/custom-properties) in older browsers. For this, fallback properties are pre-generated and included with the npm.

Any update to the Auro design tokens will be immediately reflected with browsers that support CSS custom properties, legacy browsers will require updated components with pre-generated fallback properties.

### Define dependency in project component

Defining the component dependency within each component that is using the `<auro-tokenavatar>`, `<auro-tokendisplay>` and `<auro-tokenlist>` elements.

```javascript
import "@aurodesignsystem/auro-tokendisplay/dist/auro-tokendisplay";
import "@aurodesignsystem/auro-tokendisplay/dist/auro-tokenavatar";
import "@aurodesignsystem/auro-tokendisplay/dist/auro-tokenlist";
```

## Install bundled assets from CDN

In cases where the project is not able to process JS assets, there are pre-processed assets available for use. Two bundles are available -- `auro-tokendisplay__bundled.js` for modern browsers and `auro-tokendisplay__bundled.es5.js` for legacy browsers (including IE11).

Since the legacy bundle includes many polyfills that are not needed by modern browsers, we recommend you load these bundles using [differential serving](https://philipwalton.com/articles/deploying-es2015-code-in-production-today/) so that the browser only loads the bundle it needs. To accomplish this, the script tag for the modern bundle should have `type="module"` and the script tag for the legacy bundle should have the `nomodule` attribute. See the example below.

### Bundle example code

**NOTE:** Be sure to replace `@latest` in the URL with the version of the asset you want. @latest is NOT aware of any MAJOR releases, use at your own risk.

```html
<link rel="stylesheet" href="https://unpkg.com/@alaskaairux/design-tokens@latest/dist/tokens/CSSCustomProperties.css" />
<link rel="stylesheet" href="https://unpkg.com/@alaskaairux/webcorestylesheets@latest/dist/bundled/essentials.css" />

<script src="https://unpkg.com/@alaskaairux/auro-swatch@latest/dist/auro-tokenavatar__bundled.js" type="module"></script>
<script src="https://unpkg.com/@alaskaairux/auro-swatch@latest/dist/auro-tokenavatar__bundled.es5.js" nomodule></script>

<script src="https://unpkg.com/@alaskaairux/auro-swatch@latest/dist/auro-tokendisplay__bundled.js" type="module"></script>
<script src="https://unpkg.com/@alaskaairux/auro-swatch@latest/dist/auro-tokendisplay__bundled.es5.js" nomodule></script>

<script src="https://unpkg.com/@alaskaairux/auro-swatch@latest/dist/auro-tokenlist__bundled.js" type="module"></script>
<script src="https://unpkg.com/@alaskaairux/auro-swatch@latest/dist/auro-tokenlist__bundled.es5.js" nomodule></script>
```

## Development

In order to develop against this project, if you are not part of the core team, you will be required to fork the project prior to submitting a pull request.

Please be sure to review the [contribution guidelines](https://auro.alaskaair.com/getting-started/developers/contributing) for this project. Please make sure to **pay special attention** to the **conventional commits** section of the document.

### Start development environment

Once the project has been cloned to your local resource and you have installed all the dependencies you will need to open two different shell sessions. One is for the **npm tasks**, the second is to run the **server**.

```shell
// shell terminal one
$ npm run dev

// shell terminal two
$ npm run serve
```

Open [localhost:8000](http://localhost:8000/)

### API generation

The custom element API file is generated in the build and committed back to the repo with a version change. If the API doc has changed without a version change, author's are to run `npm run build:api` to generate the doc and commit to version control.

### Testing

Automated tests are required for every Auro component. See `.\test\auro-swatch.test.js` for the tests for this component. Run `npm test` to run the tests and check code coverage. Tests must pass and meet a certain coverage threshold to commit. See [the testing documentation](https://auro.alaskaair.com/support/tests) for more details.

### Bundled assets

Bundled assets are only generated in the remote and not merged back to this repo. To review and/or test a bundled asset locally, run `$ npm run bundler` to generate assets.

### Demo deployment

To deploy a demo version of the component for review, run `npm run demo:build` to create a `./build` directory that can be pushed to any static server.

<small>Built from WC-Generator v3.5.3</small>

### Useful Function For later:

In the event that rgba values are passed in and need to be converted to hex values to hit the wcag api(currently 6/2021 the WCAG api doesn't not accept 8 char hex values) then this function may prove useful for converting rgb/rgba values to hex.

```js
  /**
   * @private internal function
   * @param {string} rgb(a) value string ex "rgba(0,22,23,0.5)"
   * @returns {string} 7-8 char hex value ex "#00161780"
   */

  rgbaToHex(rgbaString) {
    // remove whitespace
    rgbaString = rgbaString.replace(/\+/g,'');
    // find indices of parentheses
    const valuesStart = rgbaString.indexOf('(')+1;
    const valuesEnd = rgbaString.indexOf(')');
    // pull rgb(a) values out into an array and convert them to decimal
    let rgba =  rgbaString.substring(valuesStart, valuesEnd).split(',').map(x=>+x);
    if(rgba.length == 4) {
      rgba[3]=Math.round(rgba[3] * 255);
    }
    rgba = rgba.map(x => {
      // convert to hex;
      x = x.toString(16);
      // add 0 to single char values
      if (x.length==1) {
        x = "0" + x;
      }
      // update array
      return x;
    })

    return "#" + rgba.join('');
  }
```

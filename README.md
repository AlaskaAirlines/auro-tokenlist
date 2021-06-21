# Swatch

`<auro-color-avatar>`, `<auro-swatch-list>` and `<auro-tokens-list>` are [HTML custom element](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) for the purpose of illustrating Design Tokens and their related data.

## UI development browser support

For the most up to date information on [UI development browser support](https://auro.alaskaair.com/support/browsersSupport)

## Install

[![Build Status](https://img.shields.io/github/workflow/status/AlaskaAirlines/auro-swatch/Test%20and%20publish?branch=master&style=for-the-badge)](https://github.com/AlaskaAirlines/auro-swatch/actions?query=workflow%3A%22test+and+publish%22)
[![See it on NPM!](https://img.shields.io/npm/v/@aurolabs/auro-swatch?style=for-the-badge&color=orange)](https://www.npmjs.com/package/@aurolabs/auro-swatch)
[![License](https://img.shields.io/npm/l/@aurolabs/auro-swatch?color=blue&style=for-the-badge)](https://www.apache.org/licenses/LICENSE-2.0)

```shell
$ npm i @aurolabs/auro-swatch
```

Installing as a direct, dev or peer dependency is up to the user installing the package. If you are unsure as to what type of dependency you should use, consider reading this [stack overflow](https://stackoverflow.com/questions/18875674/whats-the-difference-between-dependencies-devdependencies-and-peerdependencies) answer.

### Design Token CSS Custom Property dependency

The use of any Auro custom element has a dependency on the [Auro Design Tokens](https://auro.alaskaair.com/getting-started/developers/design-tokens).

### CSS Custom Property fallbacks

[CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) are [not supported](https://auro.alaskaair.com/support/custom-properties) in older browsers. For this, fallback properties are pre-generated and included with the npm.

Any update to the Auro Design Tokens will be immediately reflected with browsers that support CSS custom properties, legacy browsers will require updated components with pre-generated fallback properties.

### Define dependency in project component

Defining the component dependency within each component that is using the `<auro-swatch-list>`, `<auro-color-avatar>` or `<auro-tokens-list>` component.

```javascript
import "@aurolabs/auro-swatch/dist/auro-swatch-list";
import "@aurolabs/auro-swatch/dist/auro-color-avatar";
import "@aurolabs/auro-swatch/dist/auro-tokens-list";
```

**Reference component in HTML**

```html
<auro-color-avatar avatartype="font" colorname="color-text-primary-on-light"></auro-color-avatar>

<auro-swatch-list componentData='[{ "backgroundcolor": "#cde6ff", "colorname": "auro-color-brand-atlas-100", "wcag": "AAA", "usage": "Notification color on light backgrounds" }]'></auro-swatch-list>

<auro-tokens-list componentData='[{ "tokenvalue": "480px", "token": "breakpoint-width-narrow" }]'></auro-tokens-list>
```

## Install bundled assets from CDN

In cases where the project is not able to process JS assets, there are pre-processed assets available for use. Two bundles are available -- `auro-swatch__bundled.js` for modern browsers and `auro-swatch__bundled.es5.js` for legacy browsers (including IE11).

Since the legacy bundle includes many polyfills that are not needed by modern browsers, we recommend you load these bundles using [differential serving](https://philipwalton.com/articles/deploying-es2015-code-in-production-today/) so that the browser only loads the bundle it needs. To accomplish this, the script tag for the modern bundle should have `type="module"` and the script tag for the legacy bundle should have the `nomodule` attribute. See the example below.

### Bundle example code

**NOTE:** Be sure to replace `@latest` in the URL with the version of the asset you want. @latest is NOT aware of any MAJOR releases, use at your own risk.

```html
<link rel="stylesheet" href="https://unpkg.com/@alaskaairux/design-tokens@latest/dist/tokens/CSSCustomProperties.css" />
<link rel="stylesheet" href="https://unpkg.com/@alaskaairux/webcorestylesheets@latest/dist/bundled/essentials.css" />

<script src="https://unpkg.com/@alaskaairux/auro-swatch@latest/dist/auro-swatch__bundled.js" type="module"></script>
<script src="https://unpkg.com/@alaskaairux/auro-swatch@latest/dist/auro-swatch__bundled.es5.js" nomodule></script>
```

## auro-color-avatar use cases

The `<auro-color-avatar>` element should be used in situations where users may:

* Need to illustrate a Design Token color and its related data
* Use illustrative avatar to display color listing
* Need to illustrate between text, border, alert, interactive or icon uses

## API Code Examples

```html
<auro-color-avatar avatartype="font" colorname="color-text-primary-on-light"></auro-color-avatar>
<auro-color-avatar avatartype="font" ondark colorname="color-text-primary-on-dark"></auro-color-avatar>
```

```html
<auro-color-avatar avatartype="border" colorname="color-border-error-on-light"></auro-color-avatar>
<auro-color-avatar avatartype="border" ondark colorname="color-border-error-on-dark"></auro-color-avatar>
```

```html
<auro-color-avatar avatartype="alert" colorname="color-alert-success-on-light"></auro-color-avatar>
<auro-color-avatar avatartype="alert" ondark colorname="color-alert-success-on-dark"></auro-color-avatar>
```

## auro-swatch-list use cases

The `<auro-swatch-list>` element should be used in situations where users may:

* Need to illustrate a Design Token color and its related data
* Display data in table format
* Displays CSS custom property name
* Displays Sass variable name
* Describes color usage and WCAG rating
* Displays color in circular inkwell
* Displays color HEX or RGBA value


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

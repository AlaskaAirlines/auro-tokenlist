# Design token list

Design token list is a suite of three independent data display elements - `<auro-tokenavatar>`, `<auro-tokendisplay>` and `<auro-tokenlist>`. Both the `<auro-tokenavatar>` and the `<auro-tokendisplay>` elements provide users with a way to illustrate design token colors and their related data. The `<auro-tokenlist>` element provides a way to display a table of design token name and values or a table of deprecated tokens with optional new reference token names.

Having a list of tokens is one thing, but we on the Auro team feel that there is more to communicate than only the variable and its value.

## The token list element

The first element is the `<auro-tokenlist>` default element. the listing of a token should include some base characteristics where users may need to only display a table that includes the name of the token and its value.

<div class="exampleWrapper">
  <auro-tokenlist componentData='[
    { "tokenvalue": "660px", "token": "ds-breakpoint-sm" },
    { "tokenvalue": "0.75", "token": "ds-size-sm" }
  ]'></auro-tokenlist>
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

  ```html
    <auro-tokenlist componentData='[
    { "tokenvalue": "480px", "token": "ds-breakpoint-sm" }
    ]'></auro-tokenlist>
  ```
</auro-accordion>

<div class="exampleWrapper">
  <auro-tokenlist unit="rem" componentData='[
    { "tokenvalue": "1", "token": "ds-grid-gutter-sm" }
  ]'></auro-tokenlist>
</div>

Use the `unit` attribute to add additional context to the unit if one is not given by default.

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

  ```html
    <auro-tokenlist unit="rem" componentData='[
    { "tokenvalue": "1", "token": "ds-grid-gutter-sm" }
    ]'></auro-tokenlist>
  ```
</auro-accordion>

The following example illustrates the `swatchType="rectangle"` feature that includes a sample swatch of the token's color value.

<div class="exampleWrapper">
  <auro-tokenlist swatchType="rectangle" componentData='[
    { "tokenvalue": "#cde6ff", "token": "ds-color-brand-atlas-100" },
    { "tokenvalue": "#6bb7fb", "token": "ds-color-brand-atlas-200" }
  ]'></auro-tokenlist>
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-tokenlist swatchType="rectangle" componentData='[
    { "tokenvalue": "#cde6ff", "token": "ds-color-brand-atlas-100" },
    { "tokenvalue": "#6bb7fb", "token": "ds-color-brand-atlas-200" }
  ]'></auro-tokenlist>
  ```
</auro-accordion>

Similar to the previous example, the following illustrates the `swatchType="circle"` feature that includes a sample swatch of the token's color value with a circle style.

<div class="exampleWrapper">
  <auro-tokenlist swatchType="circle" componentData='[
    { "tokenvalue": "#f26135", "token": "ds-color-brand-canyon-300" },
    { "tokenvalue": "#c0f7ff", "token": "ds-color-brand-breeze-100" }
  ]'></auro-tokenlist>
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

  ```html
    <auro-tokenlist swatchType="circle" componentData='[
      { "tokenvalue": "#f26135", "token": "ds-color-brand-canyon-300" },
      { "tokenvalue": "#c0f7ff", "token": "ds-color-brand-breeze-100" }
    ]'></auro-tokenlist>
  ```
</auro-accordion>

Not all tokens stay forever, so it's important to have a deprecation strategy. A key aspect of deprecation is communication. The following example illustrates a token list `type="deprecated"` that contains a reference to their current counterparts referenced from the token's data.

<div class="exampleWrapper">
  <auro-tokenlist type="deprecated" componentData='[
    { "token": "size-none", "version": "3.10.0", "tokenvalue": "0", "reference": "n/a" },
    { "token": "size-xxxs", "version": "3.10.0", "tokenvalue": "0.125", "reference": "size-25" }
  ]'></auro-tokenlist>
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-tokenlist type="deprecated" componentData='[
    { "token": "size-none", "version": "3.10.0", "tokenvalue": "0", "reference": "n/a" },
    { "token": "size-xxxs", "version": "3.10.0", "tokenvalue": "0.125", "reference": "size-25" }
  ]'></auro-tokenlist>
  ```
</auro-accordion>

In addition to `type="deprecated"`, the custom element supports a `version` boolean attribute that will show the token's deprecated version if noted in the token's data.

<div class="exampleWrapper">
  <auro-tokenlist type="deprecated" version componentData='[
    { "token": "size-none", "version": "3.10.0", "tokenvalue": "0", "reference": "n/a" },
    { "token": "size-xxxs", "version": "3.10.0", "tokenvalue": "0.125", "reference": "size-25" }
  ]'></auro-tokenlist>
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

  ```html
    <auro-tokenlist type="deprecated" version componentData='[
      { "token": "size-none", "version": "3.10.0", "tokenvalue": "0", "reference": "n/a" },
      { "token": "size-xxxs", "version": "3.10.0", "tokenvalue": "0.125", "reference": "size-25" }
    ]'></auro-tokenlist>
  ```
</auro-accordion>

## The token display element

Token's come with a lot of data. The `<auro-tokendisplay>` custom element provides features so that users may:

* Illustrate a design token color and its related data.
* Display the token's name
* Describe color usage and WCAG rating
* Display color in circular inkwell
* Display color HEX or RGBA value

Auro's dedication to accessibility comes shining through this custom element. By addressing the WCAG rating in real time, this element provides data to both engineers and designers to inform them about each color's best use case. The following examples will clearly show if a color passes the standard for use with normal or large text with either a bright or dark background.

The following example illustrates the standard token display table.

<div class="exampleWrapper">
  <auro-tokendisplay componentData='[
    { "backgroundcolor": "#01426a", "colorname": "color-brand-atlas-200", "usage": "Notification color on light backgrounds" },
    { "backgroundcolor": "#00274a", "colorname": "color-brand-atlas-300", "usage": "Notification color on light backgrounds" },
    { "backgroundcolor": "#054687", "colorname": "color-brand-atlas-400", "wcag":"AAA", "usage": "Notification color on light backgrounds" },
    { "backgroundcolor": "#054687", "colorname": "color-brand-atlas-500", "usage": "Notification color on light backgrounds" },
    { "backgroundcolor": "rgba(1,1,1,0.5)", "colorname": "color-brand-atlas-600", "usage": "Example of failure to load wcag response" }
  ]'></auro-tokendisplay>
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-tokendisplay componentData='[
    { "backgroundcolor": "#01426a", "colorname": "color-brand-atlas-200", "usage": "Notification color on light backgrounds" },
    { "backgroundcolor": "#00274a", "colorname": "color-brand-atlas-300", "usage": "Notification color on light backgrounds" },
    { "backgroundcolor": "#054687", "colorname": "color-brand-atlas-400", "wcag":"AAA", "usage": "Notification color on light backgrounds" },
    { "backgroundcolor": "#054687", "colorname": "color-brand-atlas-500", "usage": "Notification color on light backgrounds" },
    { "backgroundcolor": "rgba(1,1,1,0.5)", "colorname": "color-brand-atlas-600", "usage": "Example of failure to load wcag response" }
  ]'></auro-tokendisplay>
  ```
</auro-accordion>

This example illustrates the `appearance="inverse"` token display table.

<div class="exampleWrapper">
  <auro-tokendisplay appearance="inverse" componentData='[
    { "backgroundcolor": "#6bb7fb", "colorname": "color-brand-atlas-200", "usage": "Notification color on light backgrounds" },
    { "backgroundcolor": "#2492eb", "colorname": "color-brand-atlas-300", "usage": "Notification color on light backgrounds" },
    { "backgroundcolor": "#0074cb", "colorname": "color-brand-atlas-400", "usage": "Notification color on light backgrounds" },
    { "backgroundcolor": "#054687", "colorname": "color-brand-atlas-500", "usage": "Notification color on light backgrounds" }
  ]'></auro-tokendisplay>
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-tokendisplay appearance="inverse" componentData='[
    { "backgroundcolor": "#6bb7fb", "colorname": "color-brand-atlas-200", "usage": "Notification color on light backgrounds" },
    { "backgroundcolor": "#2492eb", "colorname": "color-brand-atlas-300", "usage": "Notification color on light backgrounds" },
    { "backgroundcolor": "#0074cb", "colorname": "color-brand-atlas-400", "usage": "Notification color on light backgrounds" },
    { "backgroundcolor": "#054687", "colorname": "color-brand-atlas-500", "usage": "Notification color on light backgrounds" }
  ]'></auro-tokendisplay>
  ```
</auro-accordion>

## The token avatar element

The `<auro-tokenavatar>` custom element is a great UI option for when users may:

* Need to illustrate a design token color and its related data
* Use illustrative avatar to display color listing
* Need to illustrate between text, border, alert, interactive or icon uses

The following example illustrates the auro token avatar with the `avatartype="font"` attribute in standard with `appearance="inverse"`.

<div class="exampleWrapper">
  <auro-tokenavatar avatartype="font" colorname="ds-color-text-primary-default"></auro-tokenavatar>
  <auro-tokenavatar avatartype="font" appearance="inverse" colorname="ds-color-text-primary-inverse"></auro-tokenavatar>
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

  ```html
    <auro-tokenavatar avatartype="font" colorname="ds-color-text-primary-default"></auro-tokenavatar>
    <auro-tokenavatar avatartype="font" appearance="inverse" colorname="ds-color-text-primary-inverse"></auro-tokenavatar>
  ```
</auro-accordion>

The following example illustrates the auro token avatar with `avatartype="border"` attribute in standard with `appearance="inverse"`.

<div class="exampleWrapper">
  <auro-tokenavatar avatartype="border" colorname="ds-color-border-error-default"></auro-tokenavatar>
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-tokenavatar avatartype="border" colorname="ds-color-border-error-default"></auro-tokenavatar>
  ```
</auro-accordion>

The following example illustrates the auro token avatar with `avatartype="alert"` attribute in standard with `appearance="inverse"`.

<div class="exampleWrapper">
  <auro-tokenavatar avatartype="alert" colorname="ds-color-alert-success-default"></auro-tokenavatar>
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-tokenavatar avatartype="alert" colorname="ds-color-alert-success-default"></auro-tokenavatar>
  ```
</auro-accordion>

The following example illustrates the auro token avatar with `avatartype="ui"` attribute in standard with `appearance="inverse"`.

<div class="exampleWrapper">
  <auro-tokenavatar avatartype="ui" colorname="ds-color-ui-default-default"></auro-tokenavatar>
  <auro-tokenavatar avatartype="ui" appearance="inverse" colorname="ds-color-ui-default-inverse"></auro-tokenavatar>
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-tokenavatar avatartype="ui" colorname="ds-color-ui-primary-default"></auro-tokenavatar>
  <auro-tokenavatar avatartype="ui" appearance="inverse" colorname="ds-color-ui-primary-inverse"></auro-tokenavatar>
  ```
</auro-accordion>

The following example illustrates the auro token avatar with `avatartype="icon"` attribute in standard with `appearance="inverse"`.

<div class="exampleWrapper">
  <auro-tokenavatar avatartype="icon" colorname='ds-color-ui-default-default'></auro-tokenavatar>
  <auro-tokenavatar avatartype="icon" appearance="inverse" colorname='ds-color-ui-default-inverse'></auro-tokenavatar>
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-tokenavatar avatartype="icon" colorname='ds-color-ui-default-default'></auro-tokenavatar>
  <auro-tokenavatar avatartype="icon" appearance="inverse" colorname='ds-color-ui-default-inverse'></auro-tokenavatar>
  ```
</auro-accordion>

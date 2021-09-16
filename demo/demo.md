# Design token display

Design token display is a suite of three independent data display elements - `<auro-tokenavatar>`, `<auro-tokendisplay>` and `<auro-tokenlist>`. Both the `<auro-tokenavatar>` and the `<auro-tokendisplay>` elements provide users with a way to illustrate design token colors and their related data. The `<auro-tokenlist>` element provides a way to display a table of design token name and values or a table of deprecated tokens with optional new reference token names.

## Auro token avatar use cases

The `<auro-tokenavatar>` element should be used in situations where users may:

* Need to illustrate a design token color and its related data
* Use illustrative avatar to display color listing
* Need to illustrate between text, border, alert, interactive or icon uses

### Token avatar - default avatar type

The following example illustrates the default auro token avatar in standard and ondark modes.

<div class="exampleWrapper">
  <auro-tokenavatar colorname='auro-color-border-error-on-light'></auro-tokenavatar>
  <auro-tokenavatar ondark colorname='auro-color-border-error-on-dark'></auro-tokenavatar>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
    <auro-tokenavatar colorname='auro-color-border-error-on-light'></auro-tokenavatar>
    <auro-tokenavatar ondark colorname='auro-color-border-error-on-dark'></auro-tokenavatar>
  ```
</auro-accordion>

### Token avatar - font avatar type

The following example illustrates the auro token avatar with `font` avatar type in standard and ondark modes.

<div class="exampleWrapper">
  <auro-tokenavatar avatartype="font" colorname="auro-color-text-primary-on-light"></auro-tokenavatar>
  <auro-tokenavatar avatartype="font" ondark colorname="auro-color-text-primary-on-dark"></auro-tokenavatar>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
    <auro-tokenavatar avatartype="font" colorname="auro-color-text-primary-on-light"></auro-tokenavatar>
    <auro-tokenavatar avatartype="font" ondark colorname="auro-color-text-primary-on-dark"></auro-tokenavatar>
  ```
</auro-accordion>

### Token avatar - border avatar type

The following example illustrates the auro token avatar with `border` avatar type in standard and ondark modes.

<div class="exampleWrapper">
  <auro-tokenavatar avatartype="border" colorname="auro-color-border-error-on-light"></auro-tokenavatar>
  <auro-tokenavatar avatartype="border" ondark colorname="auro-color-border-error-on-dark"></auro-tokenavatar>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-tokenavatar avatartype="border" colorname="auro-color-border-error-on-light"></auro-tokenavatar>
  <auro-tokenavatar avatartype="border" ondark colorname="auro-color-border-error-on-dark"></auro-tokenavatar>
  ```
</auro-accordion>

### Token avatar - alert avatar type

The following example illustrates the auro token avatar with `alert` avatar type in standard and ondark modes.

<div class="exampleWrapper">
  <auro-tokenavatar avatartype="alert" colorname="auro-color-alert-success-on-light"></auro-tokenavatar>
  <auro-tokenavatar avatartype="alert" ondark colorname="auro-color-alert-success-on-dark"></auro-tokenavatar>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-tokenavatar avatartype="alert" colorname="auro-color-alert-success-on-light"></auro-tokenavatar>
  <auro-tokenavatar avatartype="alert" ondark colorname="auro-color-alert-success-on-dark"></auro-tokenavatar>
  ```
</auro-accordion>

### Token avatar - UI avatar type

The following example illustrates the auro token avatar with `ui` avatar type in standard and ondark modes.

<div class="exampleWrapper">
  <auro-tokenavatar avatartype="ui" colorname="auro-color-ui-default-on-light"></auro-tokenavatar>
  <auro-tokenavatar avatartype="ui" ondark colorname="auro-color-ui-default-on-dark"></auro-tokenavatar>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-tokenavatar avatartype="ui" colorname="auro-color-ui-primary-on-light"></auro-tokenavatar>
  <auro-tokenavatar avatartype="ui" ondark colorname="auro-color-ui-primary-on-dark"></auro-tokenavatar>
  ```
</auro-accordion>

### Token avatar - icon avatar type

The following example illustrates the auro token avatar with `icon` avatar type in standard and ondark modes.

<div class="exampleWrapper">
  <auro-tokenavatar avatartype="icon" colorname='auro-color-ui-default-on-light'></auro-tokenavatar>
  <auro-tokenavatar avatartype="icon" ondark colorname='auro-color-ui-default-on-dark'></auro-tokenavatar>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-tokenavatar avatartype="icon" colorname='auro-color-ui-default-on-light'></auro-tokenavatar>
  <auro-tokenavatar avatartype="icon" ondark colorname='auro-color-ui-default-on-dark'></auro-tokenavatar>
  ```
</auro-accordion>

## Auro token display use cases

The `<auro-tokendisplay>` element should be used in situations where users may:

* Need to illustrate a design token color and its related data
* Display data in table format
* Display CSS custom property name
* Display Sass variable name
* Describe color usage and WCAG rating
* Display color in circular inkwell
* Display color HEX or RGBA value

### Token display default

The following example illustrates the standard token display table.

<div class="exampleWrapper">
  <auro-tokendisplay componentData='[
    { "backgroundcolor": "#6bb7fb", "colorname": "auro-color-brand-atlas-200", "usage": "Notification color on light backgrounds" },
    { "backgroundcolor": "#2492eb", "colorname": "auro-color-brand-atlas-300", "usage": "Notification color on light backgrounds" },
    { "backgroundcolor": "#0074cb", "colorname": "auro-color-brand-atlas-400", "wcag":"AAA", "usage": "Notification color on light backgrounds" },
    { "backgroundcolor": "#054687", "colorname": "auro-color-brand-atlas-500", "usage": "Notification color on light backgrounds" },
    { "backgroundcolor": "rgba(1,1,1,0.5)", "colorname": "auro-color-brand-atlas-600", "usage": "Example of failure to load wcag response" }
  ]'></auro-tokendisplay>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
    <auro-tokendisplay componentData='[
      { "backgroundcolor": "#6bb7fb", "colorname": "auro-color-brand-atlas-200", "usage": "Notification color on light backgrounds" },
      { "backgroundcolor": "#2492eb", "colorname": "auro-color-brand-atlas-300", "usage": "Notification color on light backgrounds" },
      { "backgroundcolor": "#0074cb", "colorname": "auro-color-brand-atlas-400", "usage": "Notification color on light backgrounds" },
      { "backgroundcolor": "#054687", "colorname": "auro-color-brand-atlas-500", "usage": "Notification color on light backgrounds" }
    ]'></auro-tokendisplay>
  ```
</auro-accordion>

### Token display default with ondark option

This following example illustrates the `ondark` token display table.

<div class="exampleWrapper">
  <auro-tokendisplay ondark componentData='[
    { "backgroundcolor": "#6bb7fb", "colorname": "auro-color-brand-atlas-200", "usage": "Notification color on light backgrounds" },
    { "backgroundcolor": "#2492eb", "colorname": "auro-color-brand-atlas-300", "usage": "Notification color on light backgrounds" },
    { "backgroundcolor": "#0074cb", "colorname": "auro-color-brand-atlas-400", "usage": "Notification color on light backgrounds" },
    { "backgroundcolor": "#054687", "colorname": "auro-color-brand-atlas-500", "usage": "Notification color on light backgrounds" }
  ]'></auro-tokendisplay>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
    <auro-tokendisplay ondark componentData='[
      { "backgroundcolor": "#6bb7fb", "colorname": "auro-color-brand-atlas-200", "usage": "Notification color on light backgrounds" },
      { "backgroundcolor": "#2492eb", "colorname": "auro-color-brand-atlas-300", "usage": "Notification color on light backgrounds" },
      { "backgroundcolor": "#0074cb", "colorname": "auro-color-brand-atlas-400", "usage": "Notification color on light backgrounds" },
      { "backgroundcolor": "#054687", "colorname": "auro-color-brand-atlas-500", "usage": "Notification color on light backgrounds" },
    ]'></auro-tokendisplay>
  ```
</auro-accordion>

## auro-tokenlist use cases

The `<auro-tokenlist>` element should be used in situations where users may:

* Display table of a design token's name and value
* Display alternate table of deprecated tokens with optional new reference

### Current Token List

The following example illustrates a token list of current design tokens.

<div class="exampleWrapper">
  <auro-tokenlist componentData='[
    { "tokenvalue": "660px", "token": "auro-breakpoint-sm" },
    { "tokenvalue": "0.75", "token": "auro-size-sm" }
  ]'></auro-tokenlist>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
    <auro-tokenlist componentData='[
    { "tokenvalue": "480px", "token": "auro-breakpoint-sm" }
    ]'></auro-tokenlist>
  ```
</auro-accordion>

### Token list with rectangle swatch type

The following example illustrates a list of design tokens with the `rectangle` swatch type.

<div class="exampleWrapper">
  <auro-tokenlist swatchType="rectangle" componentData='[
    { "tokenvalue": "#cde6ff", "token": "auro-color-brand-atlas-100" },
    { "tokenvalue": "#6bb7fb", "token": "auro-color-brand-atlas-200" }
  ]'></auro-tokenlist>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-tokenlist swatchType="rectangle" componentData='[
    { "tokenvalue": "#cde6ff", "token": "auro-color-brand-atlas-100" },
    { "tokenvalue": "#6bb7fb", "token": "auro-color-brand-atlas-200" }
  ]'></auro-tokenlist>
  ```
</auro-accordion>

### Token list with circle swatch type

The following example illustrates a list of design tokens with the `circle` swatch type.

<div class="exampleWrapper">
  <auro-tokenlist swatchType="circle" componentData='[
    { "tokenvalue": "#f26135", "token": "auro-color-brand-canyon-300" },
    { "tokenvalue": "#c0f7ff", "token": "auro-color-brand-breeze-100" }
  ]'></auro-tokenlist>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
    <auro-tokenlist swatchType="circle" componentData='[
      { "tokenvalue": "#f26135", "token": "auro-color-brand-canyon-300" },
      { "tokenvalue": "#c0f7ff", "token": "auro-color-brand-breeze-100" }
    ]'></auro-tokenlist>
  ```
</auro-accordion>

### Deprecated token List

The following example illustrates a token list type of `deprecated` with a reference to their current counterparts.

<div class="exampleWrapper">
  <auro-tokenlist type="deprecated" componentData='[
    { "tokenvalue": "480px", "token": "breakpoint-width-narrow", "reference": "auro-breakpoint-sm" }
  ]'></auro-tokenlist>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-tokenlist type="deprecated" componentData='[
    { "tokenvalue": "480px", "token": "breakpoint-width-narrow", "reference": "auro-breakpoint-sm" }
  ]'></auro-tokenlist>
  ```
</auro-accordion>

### Deprecated token List

The following example illustrates a token list type of `deprecated` with a reference to their current counterparts and `version` option.

<div class="exampleWrapper">
  <auro-tokenlist type="deprecated" version componentData='[
    { "tokenvalue": "#f8f8f8", "token": "color-base-gray-100", "reference": "auro-color-brand-gray-100", "version": "3.0.1" }
  ]'></auro-tokenlist>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
    <auro-tokenlist type="deprecated" version componentData='[
      { "tokenvalue": "#f8f8f8", "token": "color-base-gray-100", "reference": "auro-color-brand-gray-100", "version": "3.0.1" }
    ]'></auro-tokenlist>
  ```
</auro-accordion>






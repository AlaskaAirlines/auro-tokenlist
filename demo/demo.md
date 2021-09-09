# Auro-Swatch

Auro supports three Design Token display and illustration components - `auro-color-avatar`, `auro-swatch-list` and `auro-tokens-list`. Both the `auro-color-avatar` and the `auro-swatch-list` provide users with a way to illustrate Design token colors and their related data. The `auro-tokens-list` provides a way to display a table of design token name and values or a table of deprecated tokens with optional new reference token names.
## auro-color-avatar use cases

The `<auro-color-avatar>` element should be used in situations where users may:

* Need to illustrate a Design Token color and its related data
* Use illustrative avatar to display color listing
* Need to illustrate between text, border, alert, interactive or icon uses


### Color Avatar

This example illustrates the default auro color avatar in standard and ondark.

<div class="exampleWrapper">
  <auro-color-avatar colorname='auro-color-border-error-on-light'></auro-color-avatar>
  <auro-color-avatar ondark colorname='auro-color-border-error-on-dark'></auro-color-avatar>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
    <auro-color-avatar colorname='auro-color-border-error-on-light'></auro-color-avatar>
    <auro-color-avatar ondark colorname='auro-color-border-error-on-dark'></auro-color-avatar>
  ```
</auro-accordion>

### Font Color Avatar

This example illustrates the auro color avatar for font color tokens in standard and ondark.

<div class="exampleWrapper">
  <auro-color-avatar avatartype="font" colorname="auro-color-text-primary-on-light"></auro-color-avatar>
  <auro-color-avatar avatartype="font" ondark colorname="auro-color-text-primary-on-dark"></auro-color-avatar>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
    <auro-color-avatar avatartype="font" colorname="auro-color-text-primary-on-light"></auro-color-avatar>
    <auro-color-avatar avatartype="font" ondark colorname="auro-color-text-primary-on-dark"></auro-color-avatar>
  ```
</auro-accordion>

### Border Color Avatar

This example illustrates the auro color avatar for border color tokens in standard and ondark.

<div class="exampleWrapper">
  <auro-color-avatar avatartype="border" colorname="auro-color-border-error-on-light"></auro-color-avatar>
  <auro-color-avatar avatartype="border" ondark colorname="auro-color-border-error-on-dark"></auro-color-avatar>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-color-avatar avatartype="border" colorname="auro-color-border-error-on-light"></auro-color-avatar>
  <auro-color-avatar avatartype="border" ondark colorname="auro-color-border-error-on-dark"></auro-color-avatar>
  ```
</auro-accordion>

### Alert Color Avatar

This example illustrates the auro color avatar for alert color tokens in standard and ondark.

<div class="exampleWrapper">
  <auro-color-avatar avatartype="alert" colorname="auro-color-alert-success-on-light"></auro-color-avatar>
  <auro-color-avatar avatartype="alert" ondark colorname="auro-color-alert-success-on-dark"></auro-color-avatar>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-color-avatar avatartype="alert" colorname="auro-color-alert-success-on-light"></auro-color-avatar>
  <auro-color-avatar avatartype="alert" ondark colorname="auro-color-alert-success-on-dark"></auro-color-avatar>
  ```
</auro-accordion>

### UI Color Avatar

This example illustrates the auro color avatar for ui color tokens in standard and ondark.

<div class="exampleWrapper">
  <auro-color-avatar avatartype="ui" colorname="auro-color-ui-default-on-light"></auro-color-avatar>
  <auro-color-avatar avatartype="ui" ondark colorname="auro-color-ui-default-on-dark"></auro-color-avatar>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-color-avatar avatartype="ui" colorname="auro-color-ui-primary-on-light"></auro-color-avatar>
  <auro-color-avatar avatartype="ui" ondark colorname="auro-color-ui-primary-on-dark"></auro-color-avatar>
  ```
</auro-accordion>

### Icon Color Avatar

This example illustrates the auro color avatar for icon color tokens in standard and ondark.

<div class="exampleWrapper">
  <auro-color-avatar avatartype="icon" colorname='auro-color-ui-default-on-light'></auro-color-avatar>
  <auro-color-avatar avatartype="icon" ondark colorname='auro-color-ui-default-on-dark'></auro-color-avatar>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-color-avatar avatartype="icon" colorname='auro-color-ui-default-on-light'></auro-color-avatar>
  <auro-color-avatar avatartype="icon" ondark colorname='auro-color-ui-default-on-dark'></auro-color-avatar>
  ```
</auro-accordion>

## auro-swatch-list use cases

The `<auro-swatch-list>` element should be used in situations where users may:

* Need to illustrate a Design Token color and its related data
* Display data in table format
* Displays CSS custom property name
* Displays Sass variable name
* Describes color usage and WCAG rating
* Displays color in circular inkwell
* Displays color HEX or RGBA value

### Swatch List

This example illustrates the standard swatch list table.

<div class="exampleWrapper">
  <auro-swatch-list componentData='[
    { "backgroundcolor": "#6bb7fb", "colorname": "auro-color-brand-atlas-200", "usage": "Notification color on light backgrounds" },
    { "backgroundcolor": "#2492eb", "colorname": "auro-color-brand-atlas-300", "usage": "Notification color on light backgrounds" },
    { "backgroundcolor": "#0074cb", "colorname": "auro-color-brand-atlas-400", "wcag":"AAA", "usage": "Notification color on light backgrounds" },
    { "backgroundcolor": "#054687", "colorname": "auro-color-brand-atlas-500", "usage": "Notification color on light backgrounds" },
    { "backgroundcolor": "rgba(1,1,1,0.5)", "colorname": "auro-color-brand-atlas-600", "usage": "Example of failure to load wcag response" }
  ]'></auro-swatch-list>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
    <auro-swatch-list componentData='[
      { "backgroundcolor": "#6bb7fb", "colorname": "auro-color-brand-atlas-200", "usage": "Notification color on light backgrounds" },
      { "backgroundcolor": "#2492eb", "colorname": "auro-color-brand-atlas-300", "usage": "Notification color on light backgrounds" },
      { "backgroundcolor": "#0074cb", "colorname": "auro-color-brand-atlas-400", "usage": "Notification color on light backgrounds" },
      { "backgroundcolor": "#054687", "colorname": "auro-color-brand-atlas-500", "usage": "Notification color on light backgrounds" }
    ]'></auro-swatch-list>
  ```
</auro-accordion>

### Swatch List ondark

This example illustrates the swatch list table ondark

<div class="exampleWrapper">
  <auro-swatch-list ondark componentData='[
    { "backgroundcolor": "#6bb7fb", "colorname": "auro-color-brand-atlas-200", "usage": "Notification color on light backgrounds" },
    { "backgroundcolor": "#2492eb", "colorname": "auro-color-brand-atlas-300", "usage": "Notification color on light backgrounds" },
    { "backgroundcolor": "#0074cb", "colorname": "auro-color-brand-atlas-400", "usage": "Notification color on light backgrounds" },
    { "backgroundcolor": "#054687", "colorname": "auro-color-brand-atlas-500", "usage": "Notification color on light backgrounds" }
  ]'></auro-swatch-list>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
    <auro-swatch-list ondark componentData='[
      { "backgroundcolor": "#6bb7fb", "colorname": "auro-color-brand-atlas-200", "usage": "Notification color on light backgrounds" },
      { "backgroundcolor": "#2492eb", "colorname": "auro-color-brand-atlas-300", "usage": "Notification color on light backgrounds" },
      { "backgroundcolor": "#0074cb", "colorname": "auro-color-brand-atlas-400", "usage": "Notification color on light backgrounds" },
      { "backgroundcolor": "#054687", "colorname": "auro-color-brand-atlas-500", "usage": "Notification color on light backgrounds" },
    ]'></auro-swatch-list>
  ```
</auro-accordion>

## auro-tokens-list use cases

The `<auro-token-list>` element should be used in situations where users may:

* Display table of design token name and value
* Display alternate table of deprecated tokens with optional new reference token name

### Current Token List

This example illustrates a token list of current Design tokens.

<div class="exampleWrapper">
  <auro-tokens-list componentData='[
    { "tokenvalue": "660px", "token": "auro-breakpoint-sm" },
    { "tokenvalue": "0.75", "token": "auro-size-sm" }
  ]'></auro-tokens-list>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
    <auro-tokens-list componentData='[
    { "tokenvalue": "480px", "token": "auro-breakpoint-sm" }
    ]'></auro-tokens-list>
  ```
</auro-accordion>

### Token List With Rectangle Swatch

This example illustrates a list of Design tokens with the rectangular swatch displayed in the standard token table.


<div class="exampleWrapper">
  <auro-tokens-list swatchType="rectangle" componentData='[
    { "tokenvalue": "#cde6ff", "token": "auro-color-brand-atlas-100" },
    { "tokenvalue": "#6bb7fb", "token": "auro-color-brand-atlas-200" }
  ]'></auro-tokens-list>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-tokens-list swatchType="rectangle" componentData='[
    { "tokenvalue": "#cde6ff", "token": "auro-color-brand-atlas-100" },
    { "tokenvalue": "#6bb7fb", "token": "auro-color-brand-atlas-200" }
  ]'></auro-tokens-list>
  ```
</auro-accordion>

### Token List With Circle Swatch

This example illustrates a list of Design tokens with the a circular swatch displayed in the standard token table.


<div class="exampleWrapper">
  <auro-tokens-list swatchType="circle" componentData='[
    { "tokenvalue": "#f26135", "token": "auro-color-brand-canyon-300" },
    { "tokenvalue": "#c0f7ff", "token": "auro-color-brand-breeze-100" }
  ]'></auro-tokens-list>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
    <auro-tokens-list swatchType="circle" componentData='[
      { "tokenvalue": "#f26135", "token": "auro-color-brand-canyon-300" },
      { "tokenvalue": "#c0f7ff", "token": "auro-color-brand-breeze-100" }
    ]'></auro-tokens-list>
  ```
</auro-accordion>

### Deprecated Token List

This example illustrates a list of Deprecated Design tokens with a reference to their current counterparts.

<div class="exampleWrapper">
  <auro-tokens-list type="deprecated" componentData='[
    { "tokenvalue": "480px", "token": "breakpoint-width-narrow", "reference": "auro-breakpoint-sm" }
  ]'></auro-tokens-list>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-tokens-list type="deprecated" componentData='[
    { "tokenvalue": "480px", "token": "breakpoint-width-narrow", "reference": "auro-breakpoint-sm" }
  ]'></auro-tokens-list>
  ```
</auro-accordion>

### Deprecated Token List With Versions

This example illustrates a list of Deprecated Auro Design tokens with a reference to their current counterparts, including a version number.

<div class="exampleWrapper">
  <auro-tokens-list type="deprecated" version componentData='[
    { "tokenvalue": "#f8f8f8", "token": "color-base-gray-100", "reference": "auro-color-brand-gray-100", "version": "3.0.1" }
  ]'></auro-tokens-list>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
    <auro-tokens-list type="deprecated" version componentData='[
      { "tokenvalue": "#f8f8f8", "token": "color-base-gray-100", "reference": "auro-color-brand-gray-100", "version": "3.0.1" }
    ]'></auro-tokens-list>
  ```
</auro-accordion>






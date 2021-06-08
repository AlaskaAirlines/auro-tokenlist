// Copyright (c) 2021 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

// If use litElement base class
// import { LitElement, html, css } from "lit-element";
import { LitElement, html, css } from "lit-element";
import { classMap } from 'lit-html/directives/class-map';
import { varName } from "./util.js";

// Import touch detection lib
import "focus-visible/dist/focus-visible.min.js";
import styleCss from "./style-tokens-list-css.js";

/**
 * auro-tokens-list provides users a way to display a table of design token names and values.
 *
 * @attr {Array} componentData - Pass in `tokenvalue`, `token`
 * @attr {Boolean} deprecated - Use deprecated display table
 * @attr {String} version - Pass in token `version` for deprecated auro token table
 * @attr {Boolean} swatch - Adds the swatch css class to last column of token table
 * @attr {Boolean} circle - Adds swatch--circle class to last column of token table
 */

// build the component class
class AuroTokensList extends LitElement {

  // function to define props used within the scope of this component
  static get properties() {
    return {
      componentData:    { type: Array },
      deprecated:       { type: Boolean },
      version:          { type: Boolean },
      swatch:           { type: Boolean},
      circle:           { type: Boolean}
    };
  }

  /**
   * @private internal function
   * @param {string} arg token
   * @returns {string} token size
   */
  size(arg) {
    return arg.includes("size") ? 'rem' : ''
  }

  /**
   * @private internal function
   * @param {string} value type of
   * @returns {string} token size
   */
  deprecatedType(value) {
    return value ? `auro` : `deprecated`;
  }

  /**
   * @private internal function
   * @param {string} reference to current token
   * @returns {string} name of current token
   */
  currentToken(reference) {
    if (reference === 'n/a') {
      return reference;
    } 
    if (reference.startsWith("auro")){
      return `var(--${reference})`;
    }
    if (reference) {
  
      return `var(--auro-${reference})`;
    }
    return ''
  }

  static get styles() {
    return css`
    ${styleCss}
  `;
  }

  // function that renders the HTML and CSS into  the scope of the component
  render() {

    const classes = {
      'swatch': this.swatch,
      'swatch--circle': this.circle
    }

    return html`
      ${this.deprecated
    ? html`
      <table class="tableListing tableListing-deprecated">
      <thead>
        <tr>
          <th>Deprecated token</th>
          <th class="">Current Token</th>
          ${this.version
    ? html`<th>Version</th>`
    : html``}

          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        ${this.componentData.map((index) => html`
          <tr class="tableRow">
            <td class="noWrap varList">
              ${varName(index.token, this.deprecatedType(index.version))}
            </td>
            <td class="noWrap">
              ${this.currentToken(index.reference)}
            </td>
      ${this.version
      ? html`<td class="noWrap">${index.version}</td>`
      : html``}
            <td class="noWrap">${index.tokenvalue}</td>
          </tr>
        `)}
      </tbody>
    </table>`

    : html`
      <table class="tableListing tableListing-standard">
      <thead>
        <tr>
          <th>Token name</th>
          <th>Value</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        ${this.componentData.map((index) => html`
          <tr class="tableRow">
            <td class="noWrap varList">
              ${varName(index.token, 'css')}
            </td>
            <td class="noWrap">
              ${index.tokenvalue}${this.size(index.token)}
            </td>
            <td>
            ${ this.swatch || this.circle ?
              html`
              <div
                class="${classMap(classes)}"
                style="background-color: ${varName(index.token, 'css')}">
              </div>
            `:
            html ``
            }
            </td>
          </tr>
        `)}
      </tbody>
    </table>`}
    `;
  }
}

/* istanbul ignore else */
// define the name of the custom component
if (!customElements.get("auro-tokens-list")) {
  customElements.define("auro-tokens-list", AuroTokensList);
}

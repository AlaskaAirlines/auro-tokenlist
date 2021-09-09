// Copyright (c) 2021 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------
import { LitElement, html, css } from "lit-element";
import { classMap } from 'lit-html/directives/class-map';
import { varName } from "./util.js";

import "focus-visible/dist/focus-visible.min.js";
import styleCss from "./style-tokens-list-css.js";

/**
 * auro-tokens-list provides users a way to display a table of design token names and values.
 *
 * @attr {Array} componentData - Pass in `tokenvalue`, `token`. Include a new `reference` and `version` number with a deprecated token table as applicable.
 * @attr {String} type - Selects token table `type`. Allowed options are `current` and `deprecated` for displaying deprecated tokens and their current equivalents. If given value is not allowed or set, defaults to `current`.
 * @attr {String} version - Displays the current token `version` number in a deprecated tokens table.
 * @attr {Boolean} swatch - Displays the rectangular swatch in a current tokens table
 * @attr {Boolean} circle - Displays the circular swatch in a current tokens table
 */

// build the component class
class AuroTokensList extends LitElement {

  // function to define props used within the scope of this component
  static get properties() {
    return {
      componentData:    { type: Array },
      type:             { type: String },
      swatch:           { type: Boolean},
      version:          { type: Boolean },
      circle:           { type: Boolean}
    };
  }

  /**
   * @private
   * @returns {array} table headers
   */
  getTableHeaders() {
    if (this.type === "deprecated") {
      const headers = [
        "Deprecated token",
        "Current token"
      ];

      if (this.version === true) {
        headers.push("Version");
      }
      headers.push("Value");

      return headers;
    }

    return [
      "Token name",
      "Value",
      ""
    ];
  }

  /**
   * @private
   * @param {string} arg token
   * @returns {string} token size
   */
  size(arg) {
    return arg.includes("size") ? 'rem' : ''
  }

  /**
   * @private
   * @param {string} value type of
   * @returns {string} token size
   */
  deprecatedType(value) {
    return value ? `auro` : `deprecated`;
  }

  /**
   * @private
   * @param {string} reference to current token
   * @returns {string} name of current token
   */
  currentToken(reference) {
    if (reference === 'n/a') {
      return reference;
    }
    if (reference.startsWith("auro")) {
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

  // function that renders the HTML and CSS into the scope of the component
  render() {

    const classes = {
      'swatch': this.swatch,
      'swatch--circle': this.circle
    }

    return html`
      <table class="${this.type === "deprecated" ? "deprecated" : "current"}">
      <thead>
        <tr>
    ${this.getTableHeaders().map((item) => html`
          <th>${item}</th>
    `)}
        </tr>
      </thead>
      <tbody>
    ${this.componentData.map((index) => html`
        <tr>
    ${this.type === "deprecated"
    ? html`
          <td>
            ${varName(index.token, this.deprecatedType(index.version))}
          </td>
          <td>
            ${this.currentToken(index.reference)}
          </td>
    ${this.version
    ? html` 
          <td>${index.version}</td>`
    : html``}
          <td>${index.tokenvalue}</td>
    `
    : html`
          <td>
            ${varName(index.token, 'css')}
          </td>
          <td>
            ${index.tokenvalue}${this.size(index.token)}
          </td>
          <td>
    ${this.swatch || this.circle
    ? html` 
            <div
              class="${classMap(classes)}"
              style="background-color: ${varName(index.token, 'css')}">
            </div>
    `
    : html``}
          </td>
            `}
        </tr>
    `)}
      </tbody>
    </table>
    `;
  }
}

/* istanbul ignore else */
// define the name of the custom component
if (!customElements.get("auro-tokens-list")) {
  customElements.define("auro-tokens-list", AuroTokensList);
}

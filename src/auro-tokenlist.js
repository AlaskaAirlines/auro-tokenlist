// Copyright (c) 2021 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------
import { LitElement, html, css } from "lit-element";
import { varName } from "./util.js";
import "focus-visible/dist/focus-visible.min.js";
import styleCss from "./styles/style-tokenlist-css.js";

/**
 * The auro-tokenlist element provides users a way to display a table of design token names and values.
 *
 * @attr {Array} componentData - Pass in `tokenvalue`, `token`. Include a new `reference` and `version` number with a deprecated token table as applicable.
 * @attr {String} type - Selects tokens-list `type`. Allowed options are `current` and `deprecated` for displaying deprecated tokens and their current equivalents. If given value is not allowed or set, defaults to `current`.
 * @attr {String} version - Displays the current token `version` number in a deprecated type tokens list.
 * @attr {Boolean} swatchType - Sets the swatch display type for a current type tokens list. Allowed options are `rectangle` or `circle`. If given value is not allowed or set, defaults to none.
 * @attr {String} unit - Add context to a value if unit is not output by default.
 */

// build the component class
class AuroTokenList extends LitElement {

  // function to define props used within the scope of this component
  static get properties() {
    return {
      componentData:    { type: Array },
      type:             { type: String },
      swatchType:       { type: String},
      version:          { type: Boolean },
      unit:             { type: String }
    };
  }

  /**
   * @private
   * @returns {Array} Table headers.
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
   * @param {string} arg Token.
   * @param {string} value Token value.
   * @returns {string} Token size.
   */
  size(arg, value) {
    // Supports Auro Classic tokens only & provided for backwards compatibility
    // Only add 'rem' if it's a size token AND doesn't already have units
    // Check for "ds-size" or "-size-" patterns in ds tokens
    if (arg.match(/ds-size|ds-.*-size-/iu)) {
      const valueStr = String(value);
      if (valueStr.includes('px') || valueStr.includes('rem') || valueStr.includes('em') || valueStr.includes('%')) {
        // Already has units, don't add more
        return '';
      }
      // Add rem unit
      return 'rem';
    }
    // Not a size token
    return '';
  }

  /**
   * @private
   * @param {string} value Token value.
   * @returns {boolean} Whether the value is a gradient.
   */
  isGradient(value) {
    // Check if value is an object with gradientType property
    if (typeof value === 'object' && value !== null && value.gradientType) {
      return true;
    }
    
    // Fallback: check if string contains 'gradient'
    const valueStr = String(value).toLowerCase();
    return valueStr.includes('gradient');
  }

  /**
   * @private
   * @param {Object} gradientObj Gradient object.
   * @returns {string} CSS gradient string.
   */
  formatGradientValue(gradientObj) {
    if (!gradientObj || typeof gradientObj !== 'object') {
      return gradientObj;
    }

    if (gradientObj.gradientType === 'composite' && gradientObj.layers) {
      // Composite gradient - join all layers
      return gradientObj.layers.map(layer => this.formatSingleGradient(layer)).join(', ');
    }
    
    return this.formatSingleGradient(gradientObj);
  }

  /**
   * @private
   * @param {Object} gradient Single gradient layer.
   * @returns {string} CSS gradient string.
   */
  formatSingleGradient(gradient) {
    const stops = gradient.stops.map(stop => {
      const color = stop.alpha !== undefined 
        ? `rgba(${this.hexToRgb(stop.color)}, ${stop.alpha})`
        : stop.color;
      return `${color} ${stop.position}`;
    }).join(', ');
    
    return `linear-gradient(${gradient.direction}, ${stops})`;
  }

  /**
   * @private
   * @param {string} hex Hex color.
   * @returns {string} RGB values.
   */
  hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result 
      ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
      : '0, 0, 0';
  }

  /**
   * @private
   * @param {string} value Type of.
   * @returns {string} Token size.
   */
  deprecatedType(value) {
    return value ? `ds` : `deprecated`;
  }

  /**
   * @private
   * @param {string} reference To current token.
   * @returns {string} Name of current token.
   */
  currentToken(reference) {

    if (reference === 'n/a') {
      return reference;
    }
    if (reference) {
      return `var(--ds-${reference})`;
    }

    return '';
  }

  static get styles() {
    return css`
    ${styleCss}
  `;
  }

  // function that renders the HTML and CSS into the scope of the component
  render() {
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
            <span class="value ${this.isGradient(index.tokenvalue) ? 'is-gradient' : ''}">${typeof index.tokenvalue === 'object' 
              ? this.formatGradientValue(index.tokenvalue)
              : index.tokenvalue}${this.size(index.token, index.tokenvalue)}${this.unit}</span>
          </td>
          <td>
    ${this.swatchType === "circle" || this.swatchType === "rectangle"
? html`
    <div
      class="swatch--${this.swatchType} ${this.isGradient(index.tokenvalue) ? 'is-gradient' : ''}"
      style="background: ${varName(index.token, 'css')}">
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

// define the name of the custom component
if (!customElements.get("auro-tokenlist")) {
  customElements.define("auro-tokenlist", AuroTokenList);
}

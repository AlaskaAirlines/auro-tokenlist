// Copyright (c) 2021 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

// If use litElement base class
import { html, css, LitElement } from "lit-element";
// Import touch detection lib
import "focus-visible/dist/focus-visible.min.js";
import styleCss from "./style-swatch-list-css.js";
import { varName } from "./util.js";

/**
 * auro-swatch-list provides users a way to illustrate Design Token colors and their related data and usage in a table.
 *
 * @attr {Array} componentData - Pass in `backgroundcolor`, `colorname`, `wcag` & `usage`
 * @attr {Boolean} ondark - Defines if color state is to be on-dark
 */

class AuroSwatchList extends LitElement {
  // function to define props used within the scope of this component
  static get properties() {
    return {
      componentData:   { type: Array }
    };
  }

  static get styles() {
    return css`
      ${styleCss}
    `;
  }

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    return html`
      <table class="tableListing">
        <thead>
          <tr>
            <th>Token</th>
            <th class="">Usage</th>
            <th>Hex/RGBA</th>
            <th class="center">Color</th>
            <th class="noPadding">WCAG rating</th>
          </tr>
        </thead>
        <tbody>
          ${this.componentData.map((index) => html`
            <tr>
              <td class="noWrap varList">
                ${varName(index.colorname, 'css')}
              </td>
              <td>${index.usage}</td>
              <td class="noWrap">${index.backgroundcolor}</td>
              <td class="swatch"><div style="background-color: var(--${index.colorname})"></div></td>
              <td class="center noPadding">${index.wcag}</td>
            </tr>
          `)}
        </tbody>
      </table>
    `;
  }
}

/* istanbul ignore else */
// define the name of the custom component
if (!customElements.get("auro-swatch-list")) {
  customElements.define("auro-swatch-list", AuroSwatchList);
}

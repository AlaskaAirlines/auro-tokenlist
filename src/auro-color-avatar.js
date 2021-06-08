// Copyright (c) 2021 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

// If use litElement base class
import { html, css, LitElement } from "lit-element";
// Import touch detection lib
import "focus-visible/dist/focus-visible.min.js";
import styleCss from "./style-color-avatar-css.js";
import locationFilled from '@alaskaairux/icons/dist/icons/interface/location-filled_es6.js';
import { varName } from "./util.js";

/**
 * auro-color-avatar provides users a way to illustrate Design Token colors and their related data for text, border, alert, interactive or icon uses.
 *
 * @attr {String} avatartype - Pass in `font`, `border`, `alert`, `ui`, `icon` string to illustrate preferred avatar type
 * @attr {String} colorname - Pass in `-`(dash) to delimitated name of color token
 * @attr {Boolean} ondark - Defines if color state is to be on-dark
 */

// build the component class
class AuroColorAvatar extends LitElement {

  // function to define props used within the scope of this component
  static get properties() {
    return {
      avatartype:   { type: String },
      colorname:    { type: String }
    };
  }

  /**
   * @private Internal function to generate the HTML for the icon to use
   * @param {string} svgContent - The imported svg icon
   * @returns {TemplateResult} - The html template for the icon
   */
  generateIconHtml(svgContent) {
    const dom = new DOMParser().parseFromString(svgContent, 'text/html'),
      svg = dom.body.firstChild;

    return html`${svg}`;
  }

  static get styles() {
    return css`
      ${styleCss}
    `;
  }

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    return html`
      <div class="avatarWrapper">
        ${this.avatartype
          ? html``
          : html`
          <div class="avatar avatar--color" style="background-color: ${varName(this.colorname, 'css')}"></div>
          `}

          ${this.avatartype === 'alert'
          ? html`
            <div class="avatar">
              <div class="alertBox icon" style="border-color: ${varName(this.colorname, 'css')}"></div>
            </div>
          `
          : html``}

          ${this.avatartype === 'ui'
          ? html`
            <div class="avatar">
              <div class="uiBox icon" style="background-color: ${varName(this.colorname, 'css')}"></div>
            </div>
          `
          : html``}

          ${this.avatartype === 'border'
          ? html`
            <div class="avatar">
              <div class="icon" style="background-color: ${varName(this.colorname, 'css')}"></div>
            </div>
          `
          : html``}

        ${this.avatartype === 'font'
          ? html`
            <div class="avatar" style="color: ${varName(this.colorname, 'css')}">
              Aa
            </div>
          `
          : html``}

        ${this.avatartype === 'icon'
          ? html`

          <div class="avatar" style="color: ${varName(this.colorname, 'css')}">
              ${this.generateIconHtml(locationFilled.svg)}
            </div>
          `
          : html``}
      </div>
      <div class="contentWrapper">
        <p class="avatarToken">${this.colorname}</p>
      </div>
    `;
  }
}

/* istanbul ignore else */
// define the name of the custom component
if (!customElements.get("auro-color-avatar")) {
  customElements.define("auro-color-avatar", AuroColorAvatar);
}

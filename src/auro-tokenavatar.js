// Copyright (c) 2021 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { html, LitElement } from "lit-element";
import "focus-visible/dist/focus-visible.min.js";
import styleCss from "./styles/style-tokenavatar.scss";
import { varName } from "./util.js";
import * as RuntimeUtils from "@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs";

/**
 * The auro-tokenavatar element provides users a way to illustrate design token colors and their related data for text, border, alert, interactive or icon uses.
 * @customElement auro-tokenavatar
 * @attr {Boolean} ondark - DEPRECATED - use `appearance` instead.
 */

// build the component class
export class AuroTokenAvatar extends LitElement {
  constructor() {
    super();

    /**
     * @type {'default'|'inverse'|string}
     */
    this.appearance = "default";
  }

  // function to define props used within the scope of this component
  static get properties() {
    return {
      /**
       * Defines whether this component should be light colored for use on dark backgrounds.
       * @type {'default'|'inverse'|string}
       * @default 'default'
       */
      appearance: {
        type: String,
        reflect: true,
      },

      /**
       * Pass in `font`, `border`, `alert`, `ui`, `icon` string to illustrate preferred avatar type.
       * @type {'font'|'border'|'alert'|'ui'|'icon'|string}
       */
      avatartype: { type: String },

      /**
       * Pass in `-`(dash) to delimitated name of color token.
       */
      colorname: { type: String },
    };
  }

  static get styles() {
    return [styleCss];
  }

  /**
   * This will register this element with the browser.
   * @param {string} [name="auro-tokenavatar"] - The name of element that you want to register to.
   *
   * @example
   * AuroTokenAvatar.register("custom-tokenavatar") // this will register this element to <custom-tokenavatar/>
   *
   */
  static register(name = "auro-tokenavatar") {
    RuntimeUtils.default.prototype.registerComponent(name, AuroTokenAvatar);
  }

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    return html`
      <div class="avatarWrapper">
        ${
          this.avatartype
            ? html``
            : html`
          <div class="avatar avatar--color" style="background-color: ${varName(this.colorname, "css")}"></div>
        `
        }

        ${
          this.avatartype === "alert"
            ? html`
          <div class="avatar">
            <div class="alertBox icon" style="border-color: ${varName(this.colorname, "css")}"></div>
          </div>
        `
            : html``
        }
        ${
          this.avatartype === "ui"
            ? html`
          <div class="avatar">
            <div class="uiBox icon" style="background-color: ${varName(this.colorname, "css")}"></div>
          </div>
          `
            : html``
        }
        ${
          this.avatartype === "border"
            ? html`
          <div class="avatar">
            <div class="icon" style="background-color: ${varName(this.colorname, "css")}"></div>
          </div>
      `
            : html``
        }
        ${
          this.avatartype === "font"
            ? html`
          <div class="avatar" style="color: ${varName(this.colorname, "css")}">
            Aa
          </div>
          `
            : html``
        }
        ${
          this.avatartype === "icon"
            ? html`
          <div class="avatar">
            <auro-icon category="interface" name="location-filled" customColor style="color: ${varName(this.colorname, "css")}"></auro-icon>
          </div>
          `
            : html``
        }
      </div>
      <div class="contentWrapper">
        <p class="avatarToken">${this.colorname}</p>
      </div>
    `;
  }
}

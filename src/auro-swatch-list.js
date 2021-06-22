// Copyright (c) 2021 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------
import { html, css, LitElement } from "lit-element";
import "focus-visible/dist/focus-visible.min.js";
import styleCss from "./style-swatch-list-css.js";
import '@alaskaairux/auro-icon/dist/auro-icon';
import "@alaskaairux/auro-popover/";
import { varName } from "./util";
import cacheFetch from "./cacheFetch";

/**
 * auro-swatch-list provides users a way to illustrate Design Token colors and their related data and usage in a table.
 *
 * @attr {Array} componentData - Pass in `backgroundcolor`, `colorname` & `usage`
 * @attr {Boolean} ondark - Defines if color state is to be on-dark
 */

class AuroSwatchList extends LitElement {
  // function to define props used within the scope of this component
  static get properties() {
    return {
      componentData:   { type: Array },
      ondark: {type: Boolean}
    };
  }

  static get styles() {
    return css`
      ${styleCss}
    `;
  }
  // Lifecycle function currently in use to load wcag ratings from webaim.org
  // re-uses or creates wcag object for each item for backwards compatibility
  async firstUpdated() {
    const auroDarkestBackground = getComputedStyle(document.documentElement).getPropertyValue('--auro-color-background-darkest');
    const backgroundColor = this.ondark ? auroDarkestBackground.substring(1) : "#FFFFFF";
    const dataWithWCAG = await Promise.all(this.componentData.map( async (index) => {
      const itemWCAG = await this.fetchWCAG(index.backgroundcolor, backgroundColor);
      if(itemWCAG) {
        index.wcag ??= {};
        index.wcag = itemWCAG;
      }
      return index;
    }));

    if(dataWithWCAG){
      this.componentData = dataWithWCAG;
    }
  }

  /**
   * @private async function to fetch wcag values from webaim.org
   * @param {string} colorValue the `background color` in componentData it is the color of the swatch
   * @param {string} backgroundColor the hex background color of the table displaying the swatch
   * @returns {object} wcag value object ready to be appended to the componentData
   */
  async fetchWCAG(colorValue, backgroundColor) {
    if (colorValue.startsWith('#') && backgroundColor.startsWith('#')) {
      const hashlessColor = colorValue.substring(1);
      const hashlessBackgroundColor = backgroundColor.substring(1);
      const wcag = await cacheFetch(`https://webaim.org/resources/contrastchecker/?fcolor=${hashlessColor}&bcolor=${hashlessBackgroundColor}&api`);
      if (wcag) {
        const parsedWCAG = JSON.parse(wcag);
        parsedWCAG.ratio += ":1";
        return parsedWCAG;
      }
    }
    return {"ratio": "n/a", "AA":"fail","AALarge":"fail","AAA":"fail","AAALarge":"fail"};
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
          <th class="">WCAG Ratio</th>
          <th class="noPadding">WCAG ratings
            <auro-popover class="popoverContent" for="ratioInfoIcon">
              <table>
                <tr><th colspan="2">Web Content Accessibility Guidelines 2.0</th></tr>
                <tr><td>AAA rating</td><td>Requires a contrast ratio of at least 7:1 for normal text and 4.5:1 for large text(&#8805;18pt or &#8805;14pt bold).</td></tr>
                <tr><td>AA rating</td><td>Requires a contrast ratio of at least 4.5:1 for normal text and 3:1 for large text (&#8805;18pt or &#8805;14pt bold).</td></tr>
                <tr><td>AA rating(2.1)</td><td>Also requires a contrast ratio of 3:1 for graphics and UI components.</td></tr>
              </table>
              <auro-icon
                emphasis
                ?ondark="${this.ondark}"
                id="ratioInfoIcon"
                category="alert"
                name="information-stroke"
                slot="trigger"
                tabindex="0">
                Icon: information-stroke
              </auro-icon>
            </auro-popover>
          </th>
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
            <td class="center">${index.wcag?.ratio ?? ""}</td>
            <td class="noPadding">
              <div class="wcagRatings">
            ${index.wcag?.AAA === "pass" ? 
              html 
              `
              <div class="wcagRating wcagPass">
                <auro-icon 
                emphasis
                ondark
                category="interface" name="checkmark-lg"></auro-icon>
                <div class="wcagText">
                  <div class= "wcagHeader">AAA</div>
                  <div class= "wcagType">normal</div>
                </div>
              </div>
              `
              :index.wcag?.AA === "pass" ?
              html 
              `
              <div class="wcagRating wcagPass">
                <auro-icon 
                emphasis
                ondark
                category="interface" name="checkmark-lg"></auro-icon>
                <div class="wcagText">
                  <div class= "wcagHeader">AA</div>
                  <div class= "wcagType">normal</div>
                </div>
              </div>
              `
              : html
              `
              <div class="wcagRating wcagFail">
                <auro-icon 
                emphasis
                ondark
                category="interface" name="x-lg"></auro-icon>
                <div class="wcagText">
                  <div class= "wcagHeader">FAIL</div>
                  <div class= "wcagType">normal</div>
                </div>
              </div>
              `
              }
              ${
                index.wcag?.AAALarge === "pass" ?
              html 
              `
              <div class="wcagRating wcagPass">
                <auro-icon 
                emphasis
                ondark
                category="interface" name="checkmark-lg"></auro-icon>
                <div class="wcagText">
                  <div class= "wcagHeader">AAA</div>
                  <div class= "wcagType">Large</div>
                </div>
              </div>
              `
                : index.wcag?.AALarge === "pass" ?
              html 
              `
              <div class="wcagRating wcagPass">
                <auro-icon 
                emphasis
                ondark
                category="interface" name="checkmark-lg"></auro-icon>
                <div class="wcagText">
                  <div class= "wcagHeader">AA</div>
                  <div class= "wcagType">Large</div>
                </div>
              </div>
              `
              : html
              `
              <div class="wcagRating wcagFail">
                <auro-icon 
                emphasis
                ondark
                category="interface" name="x-lg"></auro-icon>
                <div class="wcagText">
                  <div class= "wcagHeader">FAIL</div>
                  <div class= "wcagType">Large</div>
                </div>
              </div>
              `
              }
              </div>
            </td>
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

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

/* eslint-disable one-var, no-magic-numbers, max-statements*/

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
    const dataWithWCAG = await Promise.all(this.componentData.map(async(index) => {
      // empty out any existing 'wcag' value input by the user (for backwards compatibility).
      index.wcag = undefined;
      const itemWCAG = await this.fetchWCAG(index.backgroundcolor, backgroundColor);

      if (itemWCAG) {
        index.wcag = itemWCAG;
      }

      return index;
    }));

    if (dataWithWCAG) {
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
    const hexRegex = /#(?:[0-9A-Fa-f]{3}){1,2}\b/u;
    const rgbaRegex = /rgba\(\s*(?<rValue>-?\d+|-?\d*\.\d+(?=%))(?<percentMatch>%?)\s*,\s*(?<gValue>-?\d+|-?\d*\.\d+(?=%))(?<percentMatch2>\2)\s*,\s*(?<bValue>-?\d+|-?\d*\.\d+(?=%))(?<percentMatch3>\2)\s*,\s*(?<aValue>-?\d+|-?\d*.\d+)\s*\)/u;

    // Automatically fail contrast ratio for rgba colors.
    if (colorValue.match(rgbaRegex)) {
      return {
        "ratio": "n/a",
        "AA":"fail",
        "AALarge":"fail",
        "AAA":"fail",
        "AAALarge":"fail"
      };
    } else if (colorValue.match(hexRegex) && backgroundColor.match(hexRegex)) {
      const hashlessColor = colorValue.substring(1);
      const hashlessBackgroundColor = backgroundColor.substring(1);

      try {
        const wcag = await cacheFetch(`https://webaim.org/resources/contrastchecker/?fcolor=${hashlessColor}&bcolor=${hashlessBackgroundColor}&api`);

        if (wcag) {
          const parsedWCAG = JSON.parse(wcag);

          parsedWCAG.ratio += ":1";

          return parsedWCAG;
        }
      } catch {

        return undefined;
      }
    }
    // default return for invalid color values

    return undefined;
  }

  /**
   * @private function to calculate display details for wcag rating icons
   * @param {object} wcag value object containing fields with fields 'ratio', 'AA', 'AALarge', 'AAA', 'AAALarge'
   * @returns {object} array of display details to build wcag pass/fail icons in the UI
   */
  validateRatings(wcag) {
    const result = [];

    // normal text rating result
    let normalLabel = 'FAIL';

    if (wcag.AAA === 'pass') {
      normalLabel = 'AAA';
    } else if (wcag.AA === 'pass') {
      normalLabel = 'AA';
    }

    result.push({
      'type': 'normal',
      'label': normalLabel
    });

    // large text rating result
    let largeLabel = 'FAIL';

    if (wcag.AAALarge === 'pass') {
      largeLabel = 'AAA';
    } else if (wcag.AALarge === 'pass') {
      largeLabel = 'AA';
    }

    result.push({
      'type': 'Large',
      'label': largeLabel
    });

    return result;
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
            <th>WCAG Ratio</th>
            <th class="noPadding">WCAG ratings
              <auro-popover class="popoverContent" for="ratioInfoIcon">
                <table>
                  <tr><th colspan="2">Web Content Accessibility Guidelines 2.0</th></tr>
                  <tr><td class="wcagPopoverFirstCol">AAA rating</td><td>Requires a contrast ratio of at least 7:1 for normal text and 4.5:1 for large text(&#8805;18pt or &#8805;14pt bold).</td></tr>
                  <tr><td class="wcagPopoverFirstCol">AA rating</td><td>Requires a contrast ratio of at least 4.5:1 for normal text and 3:1 for large text (&#8805;18pt or &#8805;14pt bold).</td></tr>
                  <tr><td class="wcagPopoverFirstCol">AA rating(2.1)</td><td>Also requires a contrast ratio of 3:1 for graphics and UI components.</td></tr>
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
                  ${index.wcag ? this.validateRatings(index.wcag).map((item) => html`
                    <div class="${item.label === 'FAIL' ? 'wcagFail' : 'wcagPass'}">
                      <auro-icon
                        emphasis
                        ondark
                        category="interface"
                        name="${item.label === 'FAIL' ? 'x-lg' : 'checkmark-lg'}"></auro-icon>
                      <div class="wcagText">
                        <div class= "wcagHeader">${item.label}</div>
                        <div class= "wcagType">${item.type}</div>
                      </div>
                    </div>`)
    : undefined}
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

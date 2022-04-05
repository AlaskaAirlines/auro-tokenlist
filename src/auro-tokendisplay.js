// Copyright (c) 2021 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------
import { html, css, LitElement } from "lit-element";
import "focus-visible/dist/focus-visible.min.js";
import styleCss from "./style-tokendisplay-css.js";
import { varName } from "./util";
import cacheFetch from "./cacheFetch";

/* eslint-disable one-var, no-magic-numbers, max-statements*/

/**
 * The auro-tokendisplay element provides users a way to illustrate design token colors and their related data and usage in a table.
 *
 * @attr {Array} componentData - Pass in `backgroundcolor`, `colorname` & `usage`
 * @attr {Boolean} ondark - Defines if color state is to be on-dark
 */

class AuroTokenDisplay extends LitElement {
  // function to define props used within the scope of this component
  static get properties() {
    return {
      componentData:   { type: Array },
      ondark:          { type: Boolean }
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
    const computedDarkestBackground = getComputedStyle(document.documentElement).getPropertyValue('--auro-color-background-darkest');
    let auroDarkestBackground = computedDarkestBackground !== "" ? computedDarkestBackground : " #00274a";

    // Note: getPropertyValue inconsistently returns the color value beginning with a space.
    if (auroDarkestBackground.indexOf(' ') >= 0) {
      auroDarkestBackground = auroDarkestBackground.substring(1);
    }

    const backgroundColor = this.ondark ? auroDarkestBackground : "#FFFFFF";
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
   * Async function to fetch wcag values from webaim.org.
   * @private
   * @param {string} colorValue The `background color` in componentData it is the color of the swatch.
   * @param {string} backgroundColor The hex background color of the table displaying the swatch.
   * @returns {object} WCAG value object ready to be appended to the componentData.
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
        const wcag = await cacheFetch(
          `https://webaim.org/resources/contrastchecker/?fcolor=${hashlessColor}&bcolor=${hashlessBackgroundColor}&api`,
          {responseParser: (res) => res.json()}
        );

        if (wcag) {

          // not all ratios come back with :1 appended
          if (!wcag.ratio.includes(":1")) {
            wcag.ratio += ":1";
          }

          return wcag;
        }
      } catch (el) {

        return undefined;
      }
    }
    // default return for invalid color values

    return undefined;
  }

  /**
   * Function to calculate display details for wcag rating icons.
   * @private
   * @param {object} wcag Value object containing fields with fields 'ratio', 'AA', 'AALarge', 'AAA', 'AAALarge'.
   * @returns {object} Array of display details to build wcag pass/fail icons in the UI.
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
            <th>Usage</th>
            <th>Hex/RGBA</th>
            <th>Color</th>
            <th>WCAG Ratio</th>
            <th class="noPadding">WCAG ratings
              <auro-popover for="ratioInfoIcon">
                <div class="wcagInfoPopover">
                  <div class="infoHeader">Web Content Accessibility Guidelines 2.0</div>
                  <div class="ratingType">AAA rating</div><div>Requires a contrast ratio of at least 7:1 for normal text and 4.5:1 for large text(&#8805;18pt or &#8805;14pt bold).</div>
                  <div class="ratingType">AA rating</div><div>Requires a contrast ratio of at least 4.5:1 for normal text and 3:1 for large text (&#8805;18pt or &#8805;14pt bold).</div>
                  <div class="ratingType">AA rating(2.1)</div><div>Also requires a contrast ratio of 3:1 for graphics and UI components.</div>
                </div>
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
              <td class="noWrap">
                ${varName(index.colorname, 'css')}
              </td>
              <td>${index.usage}</td>
              <td class="noWrap">${index.backgroundcolor}</td>
              <td>
                <div class="swatch" style="background-color: var(--${index.colorname})"></div>
              </td>
              <td class="center">
                ${index.wcag?.ratio ?? ""}
              </td>
              <td class="noPadding">
                <div class="wcagRatings">
                  ${index.wcag ? this.validateRatings(index.wcag).map((item) => html`
                    <div class="${item.label === 'FAIL' ? 'wcagFail' : 'wcagPass'}">
                      <div class="wcagText">
                        <div class= "wcagRating">${item.label}</div>
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
if (!customElements.get("auro-tokendisplay")) {
  customElements.define("auro-tokendisplay", AuroTokenDisplay);
}

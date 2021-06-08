import { fixture, html, expect } from '@open-wc/testing';
import '../src/auro-swatch-list.js';

describe('auro-swatch-list', () => {

  it('auro-swatch-list standard is accessible', async () => {
    const el = await fixture(html`
      <auro-swatch-list componentData='[
        { "backgroundcolor": "#cde6ff", "colorname": "auro-color-brand-atlas-100", "wcag": "AAA", "usage": "Notification color on light backgrounds" },
        { "backgroundcolor": "#6bb7fb", "colorname": "auro-color-brand-atlas-200", "wcag": "AAA", "usage": "Notification color on light backgrounds" }
        ]'></auro-swatch-list>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-swatch-list custom element is defined', async () => {
    const el = await Boolean(customElements.get("auro-swatch-list"));

    await expect(el).to.be.true;
  });

  it('auro-swatch-list displays componentData', async () => {
    const el = await fixture(html`
      <auro-swatch-list componentData='[
        { "backgroundcolor": "#cde6ff", "colorname": "auro-color-brand-atlas-100", "wcag": "AAA", "usage": "Notification color on light backgrounds" },
        { "backgroundcolor": "#6bb7fb", "colorname": "auro-color-brand-atlas-200", "wcag": "AAA", "usage": "Notification color on light backgrounds" }
        ]'></auro-swatch-list>
    `);
    const tableBodyRow1 = el.shadowRoot.querySelector("tbody tr:nth-of-type(1)");
    const tableBodyRow2 = el.shadowRoot.querySelector("tbody tr:nth-of-type(2)");

    await expect(tableBodyRow1.querySelector("td:nth-of-type(1)")).to.contain.text("var(--auro-color-brand-atlas-100");
    await expect(tableBodyRow1.querySelector("td:nth-of-type(2)")).to.contain.text("Notification color on light backgrounds");
    await expect(tableBodyRow1.querySelector("td:nth-of-type(3)")).to.contain.text("#cde6ff");
    await expect(tableBodyRow1.querySelector("td:nth-of-type(4)")).to.contain.html(`<div style="background-color: var(--auro-color-brand-atlas-100)"></div>`);
    await expect(tableBodyRow1.querySelector("td:nth-of-type(5)")).to.contain.text("AAA");

    await expect(tableBodyRow2.querySelector("td:nth-of-type(1)")).to.contain.text("var(--auro-color-brand-atlas-200");
    await expect(tableBodyRow2.querySelector("td:nth-of-type(2)")).to.contain.text("Notification color on light backgrounds");
    await expect(tableBodyRow2.querySelector("td:nth-of-type(3)")).to.contain.text("#6bb7fb");
    await expect(tableBodyRow2.querySelector("td:nth-of-type(4)")).to.contain.html(`<div style="background-color: var(--auro-color-brand-atlas-200)"></div>`);
    await expect(tableBodyRow2.querySelector("td:nth-of-type(5)")).to.contain.text("AAA");
  });
});

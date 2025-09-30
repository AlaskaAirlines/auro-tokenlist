import { fixture, html, expect } from '@open-wc/testing';
import '../src/auro-tokenlist.js';

describe('auro-tokenlist', () => {

  it('auro-tokenlist custom element is defined', async () => {
    const el = await !!customElements.get("auro-tokenlist");

    await expect(el).to.be.true;
  });

  it('auro-tokenlist current table size token displays value in rem', async () => {
    const el = await fixture(html`
      <auro-tokenlist componentData='[{ "tokenvalue": "0.75", "token": "ds-size-sm" }]'></auro-tokenlist>
    `);
    const tableBodyRow1 = el.shadowRoot.querySelector("tbody tr:nth-of-type(1)");
    await expect(tableBodyRow1.querySelector("td:nth-of-type(2)")).to.contain.text("0.75rem");
  });

  it(`auro-tokenlist current table 'sizeless' token displays value without units`, async () => {
    const el = await fixture(html`
      <auro-tokenlist componentData='[{ "tokenvalue": "64", "token": "ds-breakpoint-md" }]'></auro-tokenlist>
    `);
    const tableBodyRow1 = el.shadowRoot.querySelector("tbody tr:nth-of-type(1)");
    await expect(tableBodyRow1.querySelector("td:nth-of-type(2)")).to.contain.text("64");
  });

  it('auro-tokenlist current table displays all componentData', async () => {
    const el = await fixture(html`
      <auro-tokenlist componentData='[
        { "tokenvalue": "660px", "token": "ds-breakpoint-sm" },
        { "tokenvalue": "1024px", "token": "ds-breakpoint-md" }
      ]'></auro-tokenlist>
    `);
    const tableBodyRow1 = el.shadowRoot.querySelector("tbody tr:nth-of-type(1)");
    const tableBodyRow2 = el.shadowRoot.querySelector("tbody tr:nth-of-type(2)");

    await expect(tableBodyRow1.querySelector("td:nth-of-type(1)")).to.contain.text("var(--ds-breakpoint-sm)");
    await expect(tableBodyRow1.querySelector("td:nth-of-type(2)")).to.contain.text("660px");
    await expect(tableBodyRow1.querySelector("td:nth-of-type(3)")).not.to.contain.text(`style="background-color: var(--ds-breakpoint-sm)"></div>`);

    await expect(tableBodyRow2.querySelector("td:nth-of-type(1)")).to.contain.text("var(--ds-breakpoint-md)");
    await expect(tableBodyRow2.querySelector("td:nth-of-type(2)")).to.contain.text("1024px");
    await expect(tableBodyRow2.querySelector("td:nth-of-type(3)")).not.to.contain.text(`style="background-color: var(--ds-breakpoint-md)"></style=>`);

  });

  it('auro-tokenlist current table with swatch displays all componentData', async () => {
    const el = await fixture(html`
      <auro-tokenlist swatchType="rectangle" componentData='[
        { "tokenvalue": "#cde6ff", "token": "ds-color-brand-atlas-100" },
        { "tokenvalue": "#6bb7fb", "token": "ds-color-brand-atlas-200" }
      ]'></auro-tokenlist>
    `);
    const tableBodyRow1 = el.shadowRoot.querySelector("tbody tr:nth-of-type(1)");
    const tableBodyRow2 = el.shadowRoot.querySelector("tbody tr:nth-of-type(2)");

    await expect(tableBodyRow1.querySelector("td:nth-of-type(1)")).to.contain.text("var(--ds-color-brand-atlas-100)");
    await expect(tableBodyRow1.querySelector("td:nth-of-type(2)")).to.contain.text("#cde6ff");
    const swatch1 = tableBodyRow1.querySelector("td:nth-of-type(3) div.swatch--rectangle");
    await expect(swatch1).to.exist;
    await expect(swatch1.style.background).to.equal("var(--ds-color-brand-atlas-100)");

    await expect(tableBodyRow2.querySelector("td:nth-of-type(1)")).to.contain.text("var(--ds-color-brand-atlas-200)");
    await expect(tableBodyRow2.querySelector("td:nth-of-type(2)")).to.contain.text("#6bb7fb");
    const swatch2 = tableBodyRow2.querySelector("td:nth-of-type(3) div.swatch--rectangle");
    await expect(swatch2).to.exist;
    await expect(swatch2.style.background).to.equal("var(--ds-color-brand-atlas-200)");

  });

  it('auro-tokenlist current table with swatch circle displays all componentData', async () => {
    const el = await fixture(html`
      <auro-tokenlist swatchType="circle" componentData='[
        { "tokenvalue": "#f26135", "token": "ds-color-brand-canyon-300" },
        { "tokenvalue": "#c0f7ff", "token": "ds-color-brand-breeze-100" }
      ]'></auro-tokenlist>
    `);
    const tableBodyRow1 = el.shadowRoot.querySelector("tbody tr:nth-of-type(1)");
    const tableBodyRow2 = el.shadowRoot.querySelector("tbody tr:nth-of-type(2)");

    await expect(tableBodyRow1.querySelector("td:nth-of-type(1)")).to.contain.text("var(--ds-color-brand-canyon-300)");
    await expect(tableBodyRow1.querySelector("td:nth-of-type(2)")).to.contain.text("#f26135");
    const swatch1 = tableBodyRow1.querySelector("td:nth-of-type(3) div.swatch--circle");
    await expect(swatch1).to.exist;
    await expect(swatch1.style.background).to.equal("var(--ds-color-brand-canyon-300)");

    await expect(tableBodyRow2.querySelector("td:nth-of-type(1)")).to.contain.text("var(--ds-color-brand-breeze-100)");
    await expect(tableBodyRow2.querySelector("td:nth-of-type(2)")).to.contain.text("#c0f7ff");
    const swatch2 = tableBodyRow2.querySelector("td:nth-of-type(3) div.swatch--circle");
    await expect(swatch2).to.exist;
    await expect(swatch2.style.background).to.equal("var(--ds-color-brand-breeze-100)");

  });

  it('auro-tokenlist current table with gradient swatch displays gradient background', async () => {
    const el = await fixture(html`
      <auro-tokenlist swatchType="rectangle" .componentData=${[]}></auro-tokenlist>
    `);
    
    // Set componentData programmatically to pass an object
    el.componentData = [{
      "tokenvalue": {
        "gradientType": "composite",
        "layers": [
          {
            "gradientType": "linear",
            "direction": "180deg",
            "stops": [
              {"color": "#262043", "alpha": 0.65, "position": "0%"},
              {"color": "#262043", "alpha": 0, "position": "65%"}
            ]
          },
          {
            "gradientType": "linear",
            "direction": "90deg",
            "stops": [
              {"color": "#463c8f", "position": "25.8%"},
              {"color": "#ce0c88", "position": "100%"}
            ]
          }
        ]
      },
      "token": "ds-advanced-color-expanded-widget-background"
    }];
    
    await el.updateComplete;
    await el.updateComplete; // Wait one more cycle to ensure render is complete
    
    const tableBodyRow1 = el.shadowRoot.querySelector("tbody tr:nth-of-type(1)");

    await expect(tableBodyRow1.querySelector("td:nth-of-type(1)")).to.contain.text("var(--ds-advanced-color-expanded-widget-background)");
    await expect(tableBodyRow1.querySelector("td:nth-of-type(2) span.is-gradient")).to.contain.text("linear-gradient(180deg, rgba(38, 32, 67, 0.65) 0%, rgba(38, 32, 67, 0) 65%), linear-gradient(90deg, #463c8f 25.8%, #ce0c88 100%)");
    await expect(tableBodyRow1.querySelector("td:nth-of-type(3) div.swatch--rectangle")).to.have.class("is-gradient");
    await expect(tableBodyRow1.querySelector("td:nth-of-type(3)")).to.contain.html(`<div class="swatch--rectangle is-gradient" style="background: var(--ds-advanced-color-expanded-widget-background)">`);

  });

  it('auro-tokenlist deprecated table displays n/a currentToken reference', async () => {
    const el = await fixture(html`
      <auro-tokenlist type="deprecated" componentData='[
        { "tokenvalue": "#0064c6", "token": "color-background-active-button", "reference": "n/a" }
      ]'></auro-tokenlist>
    `);
    const tableBodyRow1 = el.shadowRoot.querySelector("tbody tr:nth-of-type(1)");

    await expect(tableBodyRow1.querySelector("td:nth-of-type(2)")).to.contain.text("n/a");
  });

  it('auro-tokenlist deprecated table displays explicit auro currentToken reference', async () => {
    const el = await fixture(html`
      <auro-tokenlist type="deprecated" componentData='[
        { "tokenvalue": "#0074cb", "token": "color-background-is-active-button", "reference": "color-brand-atlas-400" }
      ]'></auro-tokenlist>
    `);
    const tableBodyRow1 = el.shadowRoot.querySelector("tbody tr:nth-of-type(1)");

    await expect(tableBodyRow1.querySelector("td:nth-of-type(2)")).to.contain.text("var(--ds-color-brand-atlas-400)");
  });

  it('auro-tokenlist deprecated table displays implicit auro currentToken reference', async () => {
    const el = await fixture(html`
      <auro-tokenlist type="deprecated" componentData='[
        { "tokenvalue": "#0074cb", "token": "color-background-is-active-button", "reference": "color-brand-atlas-400" }
      ]'></auro-tokenlist>
    `);
    const tableBodyRow1 = el.shadowRoot.querySelector("tbody tr:nth-of-type(1)");

    await expect(tableBodyRow1.querySelector("td:nth-of-type(2)")).to.contain.text("var(--ds-color-brand-atlas-400)");
  });

  it('auro-tokenlist deprecated table displays empty currentToken reference', async () => {
    const el = await fixture(html`
      <auro-tokenlist type="deprecated" componentData='[
        { "tokenvalue": "#0074cb", "token": "color-background-is-active-button", "reference": "" }
      ]'></auro-tokenlist>
    `);
    const tableBodyRow1 = el.shadowRoot.querySelector("tbody tr:nth-of-type(1)");

    await expect(tableBodyRow1.querySelector("td:nth-of-type(2)")).not.to.contain.text("var(--");
  });

  it('auro-tokenlist deprecated table displays all componentData', async () => {
    const el = await fixture(html`
      <auro-tokenlist type="deprecated" componentData='[
        { "tokenvalue": "#0064c6", "token": "color-background-active-button", "reference": "n/a" },
        { "tokenvalue": "#0074cb", "token": "color-background-is-active-button", "reference": "color-brand-atlas-400" }
      ]'></auro-tokenlist>
    `);
    const tableBodyRow1 = el.shadowRoot.querySelector("tbody tr:nth-of-type(1)");
    const tableBodyRow2 = el.shadowRoot.querySelector("tbody tr:nth-of-type(2)");

    await expect(tableBodyRow1.querySelector("td:nth-of-type(1)")).to.contain.text("var(--color-background-active-button)");
    await expect(tableBodyRow1.querySelector("td:nth-of-type(2)")).to.contain.text("n/a");
    await expect(tableBodyRow1.querySelector("td:nth-of-type(3)")).to.contain.text("#0064c6");

    await expect(tableBodyRow2.querySelector("td:nth-of-type(1)")).to.contain.text("var(--color-background-is-active-button)");
    await expect(tableBodyRow2.querySelector("td:nth-of-type(2)")).to.contain.text("var(--ds-color-brand-atlas-400)");
    await expect(tableBodyRow2.querySelector("td:nth-of-type(3)")).to.contain.text("#0074cb");
  });

  it('auro-tokenlist deprecated auro version table displays componentData', async () => {
    const el = await fixture(html`
      <auro-tokenlist type="deprecated" version componentData='[
        { "tokenvalue": "#f8f8f8", "token": "color-base-gray-100", "reference": "color-brand-gray-100", "version": "3.0.1" },
        { "tokenvalue": "#176cff", "token": "color-background-hover-button", "reference": "color-brand-atlas-200", "version": "2.0.1" }
      ]'></auro-tokenlist>
    `);
    const tableBodyRow1 = el.shadowRoot.querySelector("tbody tr:nth-of-type(1)");
    const tableBodyRow2 = el.shadowRoot.querySelector("tbody tr:nth-of-type(2)");

    await expect(tableBodyRow1.querySelector("td:nth-of-type(1)")).to.contain.text("var(--ds-color-base-gray-100)");
    await expect(tableBodyRow1.querySelector("td:nth-of-type(2)")).to.contain.text("var(--ds-color-brand-gray-100)");
    await expect(tableBodyRow1.querySelector("td:nth-of-type(3)")).to.contain.text("3.0.1");
    await expect(tableBodyRow1.querySelector("td:nth-of-type(4)")).to.contain.text("#f8f8f8");

    await expect(tableBodyRow2.querySelector("td:nth-of-type(1)")).to.contain.text("var(--ds-color-background-hover-button)");
    await expect(tableBodyRow2.querySelector("td:nth-of-type(2)")).to.contain.text("var(--ds-color-brand-atlas-200)");
    await expect(tableBodyRow2.querySelector("td:nth-of-type(3)")).to.contain.text("2.0.1");
    await expect(tableBodyRow2.querySelector("td:nth-of-type(4)")).to.contain.text("#176cff");
  });

});

describe('auro-tokenlist is accessible', () => {
  it('auro-tokenlist standard table is accessible', async () => {
    const el = await fixture(html`
      <auro-tokenlist componentData='[
        { "tokenvalue": "660px", "token": "ds-breakpoint-sm" },
        { "tokenvalue": "1024px", "token": "ds-breakpoint-md" }
      ]'></auro-tokenlist>
    `);

    await expect(el).to.be.accessible({
      ignoredRules: ['empty-table-header']
    });
  });

  it('auro-tokenlist deprecated table is accessible', async () => {
    const el = await fixture(html`
      <auro-tokenlist type="deprecated" componentData='[
        { "tokenvalue": "480px", "token": "breakpoint-width-narrow", "reference": "ds-breakpoint-sm" },
        { "tokenvalue": "840px", "token": "breakpoint-width-medium", "reference": "ds-breakpoint-sm" }
      ]'></auro-tokenlist>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-tokenlist deprecated version table is accessible', async () => {
    const el = await fixture(html`
      <auro-tokenlist type="deprecated" version componentData='[
        { "tokenvalue": "#f8f8f8", "token": "color-base-gray-100", "reference": "ds-color-brand-gray-100", "version": "3.0.1" },
        { "tokenvalue": "#176cff", "token": "color-background-hover-button", "reference": "ds-color-brand-atlas-200", "version": "2.0.1" }
      ]'></auro-tokenlist>
    `);

    await expect(el).to.be.accessible();
  });
});

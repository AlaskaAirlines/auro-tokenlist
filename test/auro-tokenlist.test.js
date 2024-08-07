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
    await expect(tableBodyRow1.querySelector("td:nth-of-type(3)")).to.contain.html(`<div class="swatch--rectangle" style="background-color: var(--ds-color-brand-atlas-100)">`);

    await expect(tableBodyRow2.querySelector("td:nth-of-type(1)")).to.contain.text("var(--ds-color-brand-atlas-200)");
    await expect(tableBodyRow2.querySelector("td:nth-of-type(2)")).to.contain.text("#6bb7fb");
    await expect(tableBodyRow2.querySelector("td:nth-of-type(3)")).to.contain.html(`<div class="swatch--rectangle" style="background-color: var(--ds-color-brand-atlas-200)">`);

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
    await expect(tableBodyRow1.querySelector("td:nth-of-type(3)")).to.contain.html(`<div class="swatch--circle" style="background-color: var(--ds-color-brand-canyon-300)">`);

    await expect(tableBodyRow2.querySelector("td:nth-of-type(1)")).to.contain.text("var(--ds-color-brand-breeze-100)");
    await expect(tableBodyRow2.querySelector("td:nth-of-type(2)")).to.contain.text("#c0f7ff");
    await expect(tableBodyRow2.querySelector("td:nth-of-type(3)")).to.contain.html(`<div class="swatch--circle" style="background-color: var(--ds-color-brand-breeze-100)">`);

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

    await expect(el).to.be.accessible();
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

import { fixture, html, expect } from '@open-wc/testing';
import '../src/auro-tokens-list.js';

describe('auro-tokens-list is defined', () => {

  it('auro-tokens-list custom element is defined', async () => {
    const el = await !!customElements.get("auro-tokens-list");

    await expect(el).to.be.true;
  });

  it('auro-tokens-list standard table size token displays value in rem', async () => {
    const el = await fixture(html`
      <auro-tokens-list componentData='[{ "tokenvalue": "0.75", "token": "auro-size-sm" }]'></auro-tokens-list>
    `);
    const tableBodyRow1 = el.shadowRoot.querySelector("tbody tr:nth-of-type(1)");
    await expect(tableBodyRow1.querySelector("td:nth-of-type(2)")).to.contain.text("0.75rem");
  });

  it(`auro-tokens-list standard table 'sizeless' token displays value without units`, async () => {
    const el = await fixture(html`
      <auro-tokens-list componentData='[{ "tokenvalue": "64", "token": "auro-breakpoint-md" }]'></auro-tokens-list>
    `);
    const tableBodyRow1 = el.shadowRoot.querySelector("tbody tr:nth-of-type(1)");
    await expect(tableBodyRow1.querySelector("td:nth-of-type(2)")).to.contain.text("64");
  });

  it('auro-tokens-list standard table displays all componentData', async () => {
    const el = await fixture(html`
      <auro-tokens-list componentData='[
        { "tokenvalue": "660px", "token": "auro-breakpoint-sm" },
        { "tokenvalue": "1024px", "token": "auro-breakpoint-md" }
      ]'></auro-tokens-list>
    `);
    const tableBodyRow1 = el.shadowRoot.querySelector("tbody tr:nth-of-type(1)");
    const tableBodyRow2 = el.shadowRoot.querySelector("tbody tr:nth-of-type(2)");

    await expect(tableBodyRow1.querySelector("td:nth-of-type(1)")).to.contain.text("var(--auro-breakpoint-sm)");
    await expect(tableBodyRow1.querySelector("td:nth-of-type(2)")).to.contain.text("660px");
    await expect(tableBodyRow1.querySelector("td:nth-of-type(3)")).not.to.contain.text(`style="background-color: var(--auro-breakpoint-sm)"></div>`);

    await expect(tableBodyRow2.querySelector("td:nth-of-type(1)")).to.contain.text("var(--auro-breakpoint-md)");
    await expect(tableBodyRow2.querySelector("td:nth-of-type(2)")).to.contain.text("1024px");
    await expect(tableBodyRow2.querySelector("td:nth-of-type(3)")).not.to.contain.text(`style="background-color: var(--auro-breakpoint-md)"></style=>`);

  });

  it('auro-tokens-list standard table with swatch displays all componentData', async () => {
    const el = await fixture(html`
      <auro-tokens-list swatch componentData='[
        { "tokenvalue": "#cde6ff", "token": "auro-color-brand-atlas-100" },
        { "tokenvalue": "#6bb7fb", "token": "auro-color-brand-atlas-200" }
      ]'></auro-tokens-list>
    `);
    const tableBodyRow1 = el.shadowRoot.querySelector("tbody tr:nth-of-type(1)");
    const tableBodyRow2 = el.shadowRoot.querySelector("tbody tr:nth-of-type(2)");

    await expect(tableBodyRow1.querySelector("td:nth-of-type(1)")).to.contain.text("var(--auro-color-brand-atlas-100)");
    await expect(tableBodyRow1.querySelector("td:nth-of-type(2)")).to.contain.text("#cde6ff");
    await expect(tableBodyRow1.querySelector("td:nth-of-type(3)")).to.contain.html(`<div class="swatch" style="background-color: var(--auro-color-brand-atlas-100)">`);

    await expect(tableBodyRow2.querySelector("td:nth-of-type(1)")).to.contain.text("var(--auro-color-brand-atlas-200)");
    await expect(tableBodyRow2.querySelector("td:nth-of-type(2)")).to.contain.text("#6bb7fb");
    await expect(tableBodyRow2.querySelector("td:nth-of-type(3)")).to.contain.html(`<div class="swatch" style="background-color: var(--auro-color-brand-atlas-200)">`);

  });

  it('auro-tokens-list standard table with swatch circle displays all componentData', async () => {
    const el = await fixture(html`
      <auro-tokens-list swatch circle componentData='[
        { "tokenvalue": "#f26135", "token": "auro-color-brand-canyon-300" },
        { "tokenvalue": "#c0f7ff", "token": "auro-color-brand-breeze-100" }
      ]'></auro-tokens-list>
    `);
    const tableBodyRow1 = el.shadowRoot.querySelector("tbody tr:nth-of-type(1)");
    const tableBodyRow2 = el.shadowRoot.querySelector("tbody tr:nth-of-type(2)");

    await expect(tableBodyRow1.querySelector("td:nth-of-type(1)")).to.contain.text("var(--auro-color-brand-canyon-300)");
    await expect(tableBodyRow1.querySelector("td:nth-of-type(2)")).to.contain.text("#f26135");
    await expect(tableBodyRow1.querySelector("td:nth-of-type(3)")).to.contain.html(`<div class="swatch swatch--circle" style="background-color: var(--auro-color-brand-canyon-300)">`);

    await expect(tableBodyRow2.querySelector("td:nth-of-type(1)")).to.contain.text("var(--auro-color-brand-breeze-100)");
    await expect(tableBodyRow2.querySelector("td:nth-of-type(2)")).to.contain.text("#c0f7ff");
    await expect(tableBodyRow2.querySelector("td:nth-of-type(3)")).to.contain.html(`<div class="swatch swatch--circle" style="background-color: var(--auro-color-brand-breeze-100)">`);

  });

  it('auro-tokens-list deprecated table displays n/a currentToken reference', async () => {
    const el = await fixture(html`
      <auro-tokens-list deprecated componentData='[
        { "tokenvalue": "#0064c6", "token": "color-background-active-button", "reference": "n/a" }
      ]'></auro-tokens-list>
    `);
    const tableBodyRow1 = el.shadowRoot.querySelector("tbody tr:nth-of-type(1)");

    await expect(tableBodyRow1.querySelector("td:nth-of-type(2)")).to.contain.text("n/a");
  });

  it('auro-tokens-list deprecated table displays explicit auro currentToken reference', async () => {
    const el = await fixture(html`
      <auro-tokens-list deprecated componentData='[
        { "tokenvalue": "#0074cb", "token": "color-background-is-active-button", "reference": "auro-color-brand-atlas-400" }
      ]'></auro-tokens-list>
    `);
    const tableBodyRow1 = el.shadowRoot.querySelector("tbody tr:nth-of-type(1)");

    await expect(tableBodyRow1.querySelector("td:nth-of-type(2)")).to.contain.text("var(--auro-color-brand-atlas-400)");
  });

  it('auro-tokens-list deprecated table displays implicit auro currentToken reference', async () => {
    const el = await fixture(html`
      <auro-tokens-list deprecated componentData='[
        { "tokenvalue": "#0074cb", "token": "color-background-is-active-button", "reference": "color-brand-atlas-400" }
      ]'></auro-tokens-list>
    `);
    const tableBodyRow1 = el.shadowRoot.querySelector("tbody tr:nth-of-type(1)");

    await expect(tableBodyRow1.querySelector("td:nth-of-type(2)")).to.contain.text("var(--auro-color-brand-atlas-400)");
  });

  it('auro-tokens-list deprecated table displays empty currentToken reference', async () => {
    const el = await fixture(html`
      <auro-tokens-list deprecated componentData='[
        { "tokenvalue": "#0074cb", "token": "color-background-is-active-button", "reference": "" }
      ]'></auro-tokens-list>
    `);
    const tableBodyRow1 = el.shadowRoot.querySelector("tbody tr:nth-of-type(1)");

    await expect(tableBodyRow1.querySelector("td:nth-of-type(2)")).not.to.contain.text("var(--");
  });

  it('auro-tokens-list deprecated table displays all componentData', async () => {
    const el = await fixture(html`
      <auro-tokens-list deprecated componentData='[
        { "tokenvalue": "#0064c6", "token": "color-background-active-button", "reference": "n/a" },
        { "tokenvalue": "#0074cb", "token": "color-background-is-active-button", "reference": "auro-color-brand-atlas-400" }
      ]'></auro-tokens-list>
    `);
    const tableBodyRow1 = el.shadowRoot.querySelector("tbody tr:nth-of-type(1)");
    const tableBodyRow2 = el.shadowRoot.querySelector("tbody tr:nth-of-type(2)");

    await expect(tableBodyRow1.querySelector("td:nth-of-type(1)")).to.contain.text("var(--color-background-active-button)");
    await expect(tableBodyRow1.querySelector("td:nth-of-type(2)")).to.contain.text("n/a");
    await expect(tableBodyRow1.querySelector("td:nth-of-type(3)")).to.contain.text("#0064c6");

    await expect(tableBodyRow2.querySelector("td:nth-of-type(1)")).to.contain.text("var(--color-background-is-active-button)");
    await expect(tableBodyRow2.querySelector("td:nth-of-type(2)")).to.contain.text("var(--auro-color-brand-atlas-400)");
    await expect(tableBodyRow2.querySelector("td:nth-of-type(3)")).to.contain.text("#0074cb");
  });

  it('auro-tokens-list deprecated auro version table displays componentData', async () => {
    const el = await fixture(html`
      <auro-tokens-list deprecated version componentData='[
        { "tokenvalue": "#f8f8f8", "token": "color-base-gray-100", "reference": "auro-color-brand-gray-100", "version": "3.0.1" },
        { "tokenvalue": "#176cff", "token": "color-background-hover-button", "reference": "auro-color-brand-atlas-200", "version": "2.0.1" }
      ]'></auro-tokens-list>
    `);
    const tableBodyRow1 = el.shadowRoot.querySelector("tbody tr:nth-of-type(1)");
    const tableBodyRow2 = el.shadowRoot.querySelector("tbody tr:nth-of-type(2)");

    await expect(tableBodyRow1.querySelector("td:nth-of-type(1)")).to.contain.text("var(--auro-color-base-gray-100)");
    await expect(tableBodyRow1.querySelector("td:nth-of-type(2)")).to.contain.text("var(--auro-color-brand-gray-100)");
    await expect(tableBodyRow1.querySelector("td:nth-of-type(3)")).to.contain.text("3.0.1");
    await expect(tableBodyRow1.querySelector("td:nth-of-type(4)")).to.contain.text("#f8f8f8");

    await expect(tableBodyRow2.querySelector("td:nth-of-type(1)")).to.contain.text("var(--auro-color-background-hover-button)");
    await expect(tableBodyRow2.querySelector("td:nth-of-type(2)")).to.contain.text("var(--auro-color-brand-atlas-200)");
    await expect(tableBodyRow2.querySelector("td:nth-of-type(3)")).to.contain.text("2.0.1");
    await expect(tableBodyRow2.querySelector("td:nth-of-type(4)")).to.contain.text("#176cff");
  });

});

describe('auro-tokens-list is accessible', () => {
  it('auro-tokens-list standard table is accessible', async () => {
    const el = await fixture(html`
      <auro-tokens-list componentData='[
        { "tokenvalue": "660px", "token": "auro-breakpoint-sm" },
        { "tokenvalue": "1024px", "token": "auro-breakpoint-md" }
      ]'></auro-tokens-list>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-tokens-list deprecated table is accessible', async () => {
    const el = await fixture(html`
      <auro-tokens-list deprecated componentData='[
        { "tokenvalue": "480px", "token": "breakpoint-width-narrow", "reference": "auro-breakpoint-sm" },
        { "tokenvalue": "840px", "token": "breakpoint-width-medium", "reference": "auro-breakpoint-sm" }
      ]'></auro-tokens-list>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-tokens-list deprecated version table is accessible', async () => {
    const el = await fixture(html`
      <auro-tokens-list deprecated version componentData='[
        { "tokenvalue": "#f8f8f8", "token": "color-base-gray-100", "reference": "auro-color-brand-gray-100", "version": "3.0.1" },
        { "tokenvalue": "#176cff", "token": "color-background-hover-button", "reference": "auro-color-brand-atlas-200", "version": "2.0.1" }
      ]'></auro-tokens-list>
    `);

    await expect(el).to.be.accessible();
  });
});

import { fixture, html, expect, elementUpdated } from '@open-wc/testing';
import sinon from 'sinon';
import '../src/auro-swatch-list.js';

const componentData=`[
  { "backgroundcolor": "#6bb7fb", "colorname": "auro-color-brand-atlas-200", "usage": "Notification color on light backgrounds" },
  { "backgroundcolor": "#2492eb", "colorname": "auro-color-brand-atlas-300", "usage": "Notification color on light backgrounds" },
  { "backgroundcolor": "#0074cb", "colorname": "auro-color-brand-atlas-400", "usage": "Notification color on light backgrounds" },
  { "backgroundcolor": "#054687", "colorname": "auro-color-brand-atlas-500", "usage": "Notification color on light backgrounds" }
  ]`;
const componentDataWithWCAG=`[
  { "backgroundcolor": "#6bb7fb", "colorname": "auro-color-brand-atlas-200", "wcag": "AAA", "usage": "Notification color on light backgrounds" },
  { "backgroundcolor": "#2492eb", "colorname": "auro-color-brand-atlas-300", "wcag": "AAA", "usage": "Notification color on light backgrounds" }
  ]`;

const fetchStub = sinon.stub(window, 'fetch');

const mockWCAGResponse = (body) => {
  var mockResponse = new window.Response(JSON.stringify(body), {
    status: 200,
    headers: { 'Content-type': 'application/json' }
 });
 return Promise.resolve(mockResponse);
}

const wcagReplies = {
  failFail: {"ratio": "2.14", "AA":"fail","AALarge":"fail","AAA":"fail","AAALarge":"fail"},
  failPassAA: {"ratio": "3.28", "AA":"fail","AALarge":"pass","AAA":"fail","AAALarge":"fail"},
  passAAPassAAA: {"ratio": "4.81", "AA":"pass","AALarge":"pass","AAA":"fail","AAALarge":"pass"},
  passAAAPassAAA: {"ratio": "9.40", "AA":"pass","AALarge":"pass","AAA":"pass","AAALarge":"pass"}
};

beforeEach(() => {
  fetchStub.resetHistory();
  fetchStub.onCall(0).returns(mockWCAGResponse(wcagReplies.failFail));
  fetchStub.onCall(1).returns(mockWCAGResponse(wcagReplies.failPassAA));
  fetchStub.onCall(2).returns(mockWCAGResponse(wcagReplies.passAAPassAAA));
  fetchStub.onCall(3).returns(mockWCAGResponse(wcagReplies.passAAAPassAAA));
});

describe('auro-swatch-list', () => {

  it('auro-swatch-list standard is accessible', async () => {
    const el = await fixture(html`
      <auro-swatch-list componentData=${componentData}></auro-swatch-list>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-swatch-list custom element is defined', async () => {
    const el = await Boolean(customElements.get("auro-swatch-list"));

    await expect(el).to.be.true;
  });

  it('auro-swatch-list displays componentData', async () => {
    const el = await fixture(html`
      <auro-swatch-list componentData=${componentData}></auro-swatch-list>
    `);

    const tableBodyRow1 = el.shadowRoot.querySelector(".tableListing > tbody tr:nth-of-type(1)");
    const tableBodyRow2 = el.shadowRoot.querySelector(".tableListing > tbody tr:nth-of-type(2)");
    await expect(tableBodyRow1.querySelector("td:nth-of-type(1)")).to.contain.text("var(--auro-color-brand-atlas-200");
    await expect(tableBodyRow1.querySelector("td:nth-of-type(2)")).to.contain.text("Notification color on light backgrounds");
    await expect(tableBodyRow1.querySelector("td:nth-of-type(3)")).to.contain.text("#6bb7fb");
    await expect(tableBodyRow1.querySelector("td:nth-of-type(4)")).to.contain.html(`<div style="background-color: var(--auro-color-brand-atlas-200)"></div>`);

    await expect(tableBodyRow2.querySelector("td:nth-of-type(1)")).to.contain.text("var(--auro-color-brand-atlas-300");
    await expect(tableBodyRow2.querySelector("td:nth-of-type(2)")).to.contain.text("Notification color on light backgrounds");
    await expect(tableBodyRow2.querySelector("td:nth-of-type(3)")).to.contain.text("#2492eb");
    await expect(tableBodyRow2.querySelector("td:nth-of-type(4)")).to.contain.html(`<div style="background-color: var(--auro-color-brand-atlas-300)"></div>`);
  });

  it('auro-swatch-list WCAG from webaim.org is displayed', async () => {
    const el = await fixture(html`
      <auro-swatch-list componentData=${componentData}></auro-swatch-list>
    `);
    const tableBodyRowRatio1 = el.shadowRoot.querySelector(".tableListing > tbody tr:nth-of-type(1) td:nth-of-type(5)");
    const tableBodyRowRatio2 = el.shadowRoot.querySelector(".tableListing > tbody tr:nth-of-type(2) td:nth-of-type(5)");
    await elementUpdated(tableBodyRowRatio1);
    await elementUpdated(tableBodyRowRatio2);

    await expect(tableBodyRowRatio1).to.contain.text("2.14:1");
    await expect(tableBodyRowRatio2).to.contain.text("3.28:1");
  });

  it('auro-swatch-list WCAG from webaim.org displays despite presence of componentData wcag', async () => {
    const el = await fixture(html`
      <auro-swatch-list componentData=${componentDataWithWCAG}></auro-swatch-list>
    `);
    const tableBodyRowRatio1 = el.shadowRoot.querySelector(".tableListing > tbody tr:nth-of-type(1) td:nth-of-type(5)");
    const tableBodyRowRatio2 = el.shadowRoot.querySelector(".tableListing > tbody tr:nth-of-type(2) td:nth-of-type(5)");
    await elementUpdated(tableBodyRowRatio1);
    await elementUpdated(tableBodyRowRatio2);

    await expect(tableBodyRowRatio1).to.contain.text("2.14:1");
    await expect(tableBodyRowRatio2).to.contain.text("3.28:1");
  });

  it('auro-swatch-list WCAG pass-fail avatars are displayed', async () => {
    const el = await fixture(html`
      <auro-swatch-list componentData=${componentData}></auro-swatch-list>
    `);
    const tableBodyRowRatings1 = el.shadowRoot.querySelector(".tableListing > tbody tr:nth-of-type(1) td:nth-of-type(6)");
    const tableBodyRowRatings2 = el.shadowRoot.querySelector(".tableListing > tbody tr:nth-of-type(2) td:nth-of-type(6)");
    const tableBodyRowRatings3 = el.shadowRoot.querySelector(".tableListing > tbody tr:nth-of-type(3) td:nth-of-type(6)");
    const tableBodyRowRatings4 = el.shadowRoot.querySelector(".tableListing > tbody tr:nth-of-type(4) td:nth-of-type(6)");

    await elementUpdated(tableBodyRowRatings1);
    await elementUpdated(tableBodyRowRatings2);
    await elementUpdated(tableBodyRowRatings3);
    await elementUpdated(tableBodyRowRatings4);

    await expect(tableBodyRowRatings1.innerHTML).to.contain(`<div class="wcagHeader"><!---->FAIL<!----></div>`);
    await expect(tableBodyRowRatings1.innerHTML).to.contain(`<div class="wcagType"><!---->normal<!----></div>`);
    await expect(tableBodyRowRatings1.innerHTML).to.contain(`<div class="wcagHeader"><!---->FAIL<!----></div>`);
    await expect(tableBodyRowRatings1.innerHTML).to.contain(`<div class="wcagType"><!---->Large<!----></div>`);

    await expect(tableBodyRowRatings2.innerHTML).to.contain(`<div class="wcagHeader"><!---->FAIL<!----></div>`);
    await expect(tableBodyRowRatings2.innerHTML).to.contain(`<div class="wcagType"><!---->normal<!----></div>`);
    await expect(tableBodyRowRatings2.innerHTML).to.contain(`<div class="wcagHeader"><!---->AA<!----></div>`);
    await expect(tableBodyRowRatings2.innerHTML).to.contain(`<div class="wcagType"><!---->Large<!----></div>`);

    await expect(tableBodyRowRatings3.innerHTML).to.contain(`<div class="wcagHeader"><!---->AA<!----></div>`);
    await expect(tableBodyRowRatings3.innerHTML).to.contain(`<div class="wcagType"><!---->normal<!----></div>`);
    await expect(tableBodyRowRatings3.innerHTML).to.contain(`<div class="wcagHeader"><!---->AAA<!----></div>`);
    await expect(tableBodyRowRatings3.innerHTML).to.contain(`<div class="wcagType"><!---->Large<!----></div>`);

    await expect(tableBodyRowRatings4.innerHTML).to.contain(`<div class="wcagHeader"><!---->AAA<!----></div>`);
    await expect(tableBodyRowRatings4.innerHTML).to.contain(`<div class="wcagType"><!---->normal<!----></div>`);
    await expect(tableBodyRowRatings4.innerHTML).to.contain(`<div class="wcagHeader"><!---->AAA<!----></div>`);
    await expect(tableBodyRowRatings4.innerHTML).to.contain(`<div class="wcagType"><!---->Large<!----></div>`);
  });
});

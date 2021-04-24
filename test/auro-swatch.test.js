import { fixture, html, expect } from '@open-wc/testing';
import sinon from 'sinon';
import '../src/auro-swatch.js';

describe('auro-swatch', () => {
  it('sets the CSS class on auro-swatch > div element', async () => {
    const el = await fixture(html`
      <auro-swatch cssclass="testClass"></auro-swatch>
    `);

    const div = el.shadowRoot.querySelector('div');
    expect(div.className).to.equal('testClass');
  });

  it('auro-swatch is accessible', async () => {
    const el = await fixture(html`
      <auro-swatch cssclass="testClass"></auro-swatch>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-swatch custom element is defined', async () => {
    const el = await !!customElements.get("auro-swatch");

    await expect(el).to.be.true;
  });
});

import { fixture, html, expect, waitUntil } from '@open-wc/testing';
import { aTimeout } from '@open-wc/testing-helpers';
import '../src/auro-tokenavatar.js';

describe('auro-tokenavatar', () => {

  it('auro-tokenavatar custom element is defined', async () => {
    const el = await Boolean(customElements.get("auro-tokenavatar"));

    await expect(el).to.be.true;
  });

  it('auro-tokenavatar returns default color avatar', async () => {
    const el = await fixture(html`
      <auro-tokenavatar colorname='auro-color-border-error-on-light'></auro-tokenavatar>
    `);
    const avatarWrapper = el.shadowRoot.querySelector(".avatarWrapper");

    await expect(avatarWrapper).to.contain.html(
      `<div class="avatar avatar--color" style="background-color: var(--auro-color-border-error-on-light)"></div>`
    );
  });

  it('auro-tokenavatar displays avatar token name', async () => {
    const el = await fixture(html`
      <auro-tokenavatar colorname='auro-color-border-error-on-light'></auro-tokenavatar>
    `);
    const avatarToken = el.shadowRoot.querySelector(".avatarToken");

    await expect(avatarToken).to.contain.text("auro-color-border-error-on-light");
  });

  it('auro-tokenavatar returns alert color avatar', async () => {
    const el = await fixture(html`
      <auro-tokenavatar avatartype="alert" colorname="auro-color-alert-success-on-light"></auro-tokenavatar>
    `);
    const avatar = el.shadowRoot.querySelector(".avatar");

    await expect(avatar).to.contain.html(
      `<div class="alertBox icon" style="border-color: var(--auro-color-alert-success-on-light)"></div>`
    );
  });

  it('auro-tokenavatar returns ui color avatar', async () => {
    const el = await fixture(html`
      <auro-tokenavatar avatartype="ui" colorname="auro-color-ui-default-on-light"></auro-tokenavatar>
    `);
    const avatar = el.shadowRoot.querySelector(".avatar");

    await expect(avatar).to.contain.html(
      `<div class="uiBox icon" style="background-color: var(--auro-color-ui-default-on-light)"></div>`
    );
  });

  it('auro-tokenavatar returns border color avatar', async () => {
    const el = await fixture(html`
      <auro-tokenavatar avatartype="border" colorname="auro-color-border-error-on-light"></auro-tokenavatar>
    `);
    const avatar = el.shadowRoot.querySelector(".avatar");

    await expect(avatar).to.contain.html(
      `<div class="icon" style="background-color: var(--auro-color-border-error-on-light)"></div>`
    );
  });

  it('auro-tokenavatar returns font color avatar', async () => {
    const el = await fixture(html`
      <auro-tokenavatar avatartype="font" colorname="auro-color-text-primary-on-light">Aa</auro-tokenavatar>
    `);
    const avatar = el.shadowRoot.querySelector(".avatar");
    await expect(avatar).to.have.attribute("style", "color: var(--auro-color-text-primary-on-light)")
    await expect(avatar).to.contain.text("Aa");
  });

  it('auro-tokenavatar returns icon color avatar', async () => {
    const el = await fixture(html`
      <auro-tokenavatar avatartype="icon" colorname='auro-color-ui-default-on-light'></auro-tokenavatar>
    `);
    const avatarIcon = el.shadowRoot.querySelector("auro-icon");
    await expect(avatarIcon).to.have.attribute("style", "color: var(--auro-color-ui-default-on-light)");
    await expect(avatarIcon).to.have.attribute("name", "location-filled");
  });
});

describe('auro-tokenavatar is accessible', () => {

  it('auro-tokenavatar default is accessible', async () => {
    const el = await fixture(html`
      <auro-tokenavatar colorname='auro-color-border-error-on-light'></auro-tokenavatar>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-tokenavatar color avatar is accessible', async () => {
    const el = await fixture(html`
      <auro-tokenavatar avatartype="alert" colorname="auro-color-alert-success-on-light"></auro-tokenavatar>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-tokenavatar ui color avatar is accessible', async () => {
    const el = await fixture(html`
      <auro-tokenavatar avatartype="ui" colorname="auro-color-ui-default-on-light"></auro-tokenavatar>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-tokenavatar border color avatar is accessible', async () => {
    const el = await fixture(html`
      <auro-tokenavatar avatartype="border" colorname="auro-color-border-error-on-light"></auro-tokenavatar>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-tokenavatar font color avatar is accessible', async () => {
    const el = await fixture(html`
      <auro-tokenavatar avatartype="font" colorname="auro-color-text-primary-on-light">Aa</auro-tokenavatar>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-tokenavatar icon color avatar is accessible', async () => {
    const el = await fixture(html`
      <auro-tokenavatar avatartype="icon" colorname='auro-color-ui-default-on-light'></auro-tokenavatar>
    `);

    await expect(el).to.be.accessible();
  });

});

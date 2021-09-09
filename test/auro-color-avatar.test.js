import { fixture, html, expect, waitUntil } from '@open-wc/testing';
import { aTimeout } from '@open-wc/testing-helpers';
import '../src/auro-color-avatar.js';

describe('auro-color-avatar', () => {

  it('auro-color-avatar custom element is defined', async () => {
    const el = await Boolean(customElements.get("auro-color-avatar"));

    await expect(el).to.be.true;
  });

  it('auro-color-avatar returns default color avatar', async () => {
    const el = await fixture(html`
      <auro-color-avatar colorname='auro-color-border-error-on-light'></auro-color-avatar>
    `);
    const avatarWrapper = el.shadowRoot.querySelector(".avatarWrapper");

    await expect(avatarWrapper).to.contain.html(
      `<div class="avatar avatar--color" style="background-color: var(--auro-color-border-error-on-light)"></div>`
    );
  });

  it('auro-color-avatar displays avatar token name', async () => {
    const el = await fixture(html`
      <auro-color-avatar colorname='auro-color-border-error-on-light'></auro-color-avatar>
    `);
    const avatarToken = el.shadowRoot.querySelector(".avatarToken");

    await expect(avatarToken).to.contain.text("auro-color-border-error-on-light");
  });

  it('auro-color-avatar returns alert color avatar', async () => {
    const el = await fixture(html`
      <auro-color-avatar avatartype="alert" colorname="auro-color-alert-success-on-light"></auro-color-avatar>
    `);
    const avatar = el.shadowRoot.querySelector(".avatar");

    await expect(avatar).to.contain.html(
      `<div class="alertBox icon" style="border-color: var(--auro-color-alert-success-on-light)"></div>`
    );
  });

  it('auro-color-avatar returns ui color avatar', async () => {
    const el = await fixture(html`
      <auro-color-avatar avatartype="ui" colorname="auro-color-ui-default-on-light"></auro-color-avatar>
    `);
    const avatar = el.shadowRoot.querySelector(".avatar");

    await expect(avatar).to.contain.html(
      `<div class="uiBox icon" style="background-color: var(--auro-color-ui-default-on-light)"></div>`
    );
  });

  it('auro-color-avatar returns border color avatar', async () => {
    const el = await fixture(html`
      <auro-color-avatar avatartype="border" colorname="auro-color-border-error-on-light"></auro-color-avatar>
    `);
    const avatar = el.shadowRoot.querySelector(".avatar");

    await expect(avatar).to.contain.html(
      `<div class="icon" style="background-color: var(--auro-color-border-error-on-light)"></div>`
    );
  });

  it('auro-color-avatar returns font color avatar', async () => {
    const el = await fixture(html`
      <auro-color-avatar avatartype="font" colorname="auro-color-text-primary-on-light">Aa</auro-color-avatar>
    `);
    const avatar = el.shadowRoot.querySelector(".avatar");
    await expect(avatar).to.have.attribute("style", "color: var(--auro-color-text-primary-on-light)")
    await expect(avatar).to.contain.text("Aa");
  });

  it('auro-color-avatar returns icon color avatar', async () => {
    const el = await fixture(html`
      <auro-color-avatar avatartype="icon" colorname='auro-color-ui-default-on-light'></auro-color-avatar>
    `);
    const avatarIcon = el.shadowRoot.querySelector("auro-icon");
    await expect(avatarIcon).to.have.attribute("style", "color: var(--auro-color-ui-default-on-light)");
    await expect(avatarIcon).to.have.attribute("name", "location-filled");
  });
});

describe('auro-color-avatar is accessible', () => {

  it('auro-color-avatar default is accessible', async () => {
    const el = await fixture(html`
      <auro-color-avatar colorname='auro-color-border-error-on-light'></auro-color-avatar>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-color-avatar color avatar is accessible', async () => {
    const el = await fixture(html`
      <auro-color-avatar avatartype="alert" colorname="auro-color-alert-success-on-light"></auro-color-avatar>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-color-avatar ui color avatar is accessible', async () => {
    const el = await fixture(html`
      <auro-color-avatar avatartype="ui" colorname="auro-color-ui-default-on-light"></auro-color-avatar>
    `);
    
    await expect(el).to.be.accessible();
  });

  it('auro-color-avatar border color avatar is accessible', async () => {
    const el = await fixture(html`
      <auro-color-avatar avatartype="border" colorname="auro-color-border-error-on-light"></auro-color-avatar>
    `);
    
    await expect(el).to.be.accessible();
  });

  it('auro-color-avatar font color avatar is accessible', async () => {
    const el = await fixture(html`
      <auro-color-avatar avatartype="font" colorname="auro-color-text-primary-on-light">Aa</auro-color-avatar>
    `);
    
    await expect(el).to.be.accessible();
  });

  it('auro-color-avatar icon color avatar is accessible', async () => {
    const el = await fixture(html`
      <auro-color-avatar avatartype="icon" colorname='auro-color-ui-default-on-light'></auro-color-avatar>
    `);

    await expect(el).to.be.accessible();
  });

});

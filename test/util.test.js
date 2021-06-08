import { expect } from '@open-wc/testing';
import { varName } from '../src/util.js';

describe('utility - varName', () => {

  it('varname for auro token', async () => {
    expect(varName('some-color', 'auro')).to.equal("var(--auro-some-color)");
  });

  it('varname for deprecated token', async () => {
    expect(varName('ods-blue', 'deprecated')).to.equal("var(--ods-blue)");
  });

  it('varname for css token', async () => {
    expect(varName('light-gray', 'css')).to.equal("var(--light-gray)");
  });

  it('varname for android token', async () => {
    expect(varName('light-green', 'droid')).to.equal("light_green");
  });

  it('varname for ios token', async () => {
    expect(varName('dark-red', 'ios')).to.equal("DarkRed");
  });

  it('varname for sass token', async () => {
    expect(varName('border-dark', 'sass')).to.equal("$border-dark");
  });

  it('varname for standard token', async () => {
    expect(varName('some-other-token', 'standard')).to.equal("--some-other-token");
  });

  it('varname for typeless token', async () => {
    expect(varName('ultra-thick-border')).to.equal("{ultra.thick.border.value}");
  });

  it('varname for other type token', async () => {
    expect(varName("24", "fakeType")).to.equal("{24.value}");
  });
});
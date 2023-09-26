/**
 * @name varName
 * @private
 * @param {string} name Token name.
 * @param {string} type DeprecatedType.
 * @returns {string} Token name.
 */

export const varName = (name, type) => {

  switch (type) {
    case 'ds':
      return `var(--auro-${name})`;
    case 'deprecated':
      return `var(--${name})`;
    case 'css':
      return `var(--${name})`;
    default:
      return `{${name.replace(/-/gu, ".")}.value}`;
  }
};

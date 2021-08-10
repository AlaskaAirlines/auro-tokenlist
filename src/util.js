/**
   * @name varName
   * @private
   * @param {string} name token name
   * @param {string} type deprecatedType
   * @returns {string} token name
   */

export const varName = (name, type) => {

  const camelCase = (str) => {
    const cleanStr = str.replace(/-/gu, " ");

    return cleanStr.replace(/(?:^\w|[A-Z]|\b\w)/gu, (word) => word.toUpperCase()).replace(/\s+/gu, '');
  }
  
  switch (type) {
  case 'auro':
    return `var(--auro-${name})`;
  case 'deprecated':
    return `var(--${name})`;
  case 'css':
    return `var(--${name})`
  case 'droid':
    return `${name.replace(/-/gu, "_")}`
  case 'ios':
    return `${camelCase(name)}`
  case 'sass':
    return `$${name}`
  case 'standard':
    return `--${name}`
  default:
    return `{${name.replace(/-/gu, ".")}.value}`
  }
}

const fetchMap = new Map();

/**
 * A callback to parse Response body.
 *
 * @callback ResponseParser
 * @param {fetch} response
 * @returns {Promise}
 */

/**
 * A minimal in-memory map to de-duplicate Fetch API media requests.
 *
 * @param {string} uri
 * @param {object} [options={}]
 * @param {ResponseParser} [options.responseParser=(response) => response.text()]
 * @returns {Promise}
 */

const cacheFetch = (uri, options = {}) => {
  const responseParser = options.responseParser || ((response) => response.text());
  if (!fetchMap.has(uri)) {
    fetchMap.set(uri, fetch(uri).then(responseParser));
  }
  return fetchMap.get(uri);
};

export default cacheFetch;

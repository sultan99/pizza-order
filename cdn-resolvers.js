const R = require(`ramda`)
const moduleToCdn = require(`module-to-cdn`)

/**
 * @typedef {object} CDN
 * @property {string} name
 * @property {string} url
 * @property {string} var
 * @property {string} version
 */

/**
 * @param {string} version
 * @returns {CDN[]}
 */
const createCdnList = version => [
  {
    name: `ramda`,
    url: `https://unpkg.com/ramda@${version}/dist/ramda.min.js`,
    var: `R`,
    version
  },
  {
    name: `react-redux`,
    url: `https://unpkg.com/react-redux@${version}/dist/react-redux.min.js`,
    var: `ReactRedux`,
    version
  },
  {
    name: `redux-saga`,
    url: `https://unpkg.com/redux-saga@${version}/dist/redux-saga.umd.min.js`,
    var: `ReduxSaga`,
    version
  },
  {
    name: `regenerator-runtime`,
    url: `https://unpkg.com/regenerator-runtime@${version}/runtime.js`,
    var: `regeneratorRuntime`,
    version
  },
  {
    name: `reselect`,
    url: `https://unpkg.com/reselect@${version}/dist/reselect.min.js`,
    var: `Reselect`,
    version
  },
  {
    name: `styled-components`,
    url: `https://unpkg.com/styled-components@${version}/dist/styled-components.min.js`,
    var: `styled`,
    version
  },
]

/**
 * @param {string} name
 * @param {string} version
 * @returns {CDN | undefined}
 */
const resolve = (name, version) => R.find(
  R.propEq(`name`, name),
  createCdnList(version)
)

/**
 * @param {string} name
 * @param {string} version
 * @param {any} opts
 * @returns {CDN | undefined}
 */
const cdnResolver = (name, version, opts) => (
  resolve(name, version) ||
  moduleToCdn(name, version, opts)
)

module.exports = cdnResolver
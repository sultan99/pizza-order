import * as R from 'ramda'

/**
 * @param {object} data
 * @returns {string}
 */
const toString = data => JSON.stringify(
  data,
  (key, value) => value || R.toString(value)
)

/**
 * @param {object} value
 * @returns {string}
 */
export const hashCode = R.pipe(
  R.unless(R.is(String), toString),
  R.split(``),
  R.reduce((a, b) => {
    const h = (a << 5) - a + b.charCodeAt(0)
    return h & h & 0xfffffff
  }, 0),
  R.toString,
)

/**
 * @param {number} value
 * @returns {number}
 */
export const round = value => (
  parseFloat(value.toFixed(2))
)

const { deepStrictEqual } = require('assert');
let differently = require('differently'); if (differently && differently.__esModule) differently = differently.default;

/**
 * The Deep Equal Assertion With Color.
 * @param {?} actual
 * @param {?} expected
 * @param {string} [message]
 */
               function deepEqual(actual, expected, message) {
  try {
    deepStrictEqual(actual, expected, message)
  } catch (err) {
    const s = differently(expected, actual)
    err.message = [err.message, s].filter(Boolean).join('\n')
    throw err
  }
}



module.exports = deepEqual
import { deepStrictEqual } from 'assert'
import differently from 'differently'

/**
 * The Deep Equal Assertion With Color.
 * @param {?} actual
 * @param {?} expected
 * @param {string} [message]
 */
export default function deepEqual(actual, expected, message) {
  try {
    deepStrictEqual(actual, expected, message)
  } catch (err) {
    const s = differently(expected, actual)
    err.message = [err.message, s].filter(Boolean).join('\n')
    throw err
  }
}


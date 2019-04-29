import { throws, equal } from 'zoroaster/assert'
import Context from '../context'
import deepEqual from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof deepEqual, 'function')
  },
  async 'throws an error'() {
    let m
    await throws({
      fn: deepEqual,
      args: ['test', 'not-test'],
      message(msg) {
        m = msg
      },
    })
    return m
  },
  async 'does not throw an error for nested objects'() {
    deepEqual(
      { obj: 'hello', test: { world: 10 } },
      { obj: 'hello', test: { world: 10 } },
    )
  },
  async 'does not throw an error for arrays'() {
    deepEqual(
      [{ obj: 'hello', test: { world: 10 } }],
      [{ obj: 'hello', test: { world: 10 } }],
    )
    deepEqual(
      [10, 20],
      [10, 20],
    )
  },
  async 'throws an error for nested objects'() {
    let m
    await throws({
      fn: deepEqual,
      args: [{ obj: 'world', test: { world: 20 } }, { obj: 'hello', test: { world: 10 } }],
      message(msg) {
        m = msg
      },
    })
    return m
  },
  async 'throws an error for arrays'() {
    let m
    await throws({
      fn: deepEqual,
      args: [[10, { obj: 'world', test: { world: 20 } }], [20, { obj: 'hello', test: { world: 10 } }]],
      message(msg) {
        m = msg
      },
    })
    return m
  },
}

export default T
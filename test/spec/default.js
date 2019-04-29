import { equal, ok } from 'zoroaster/assert'
import Context from '../context'
import deepEqual from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof deepEqual, 'function')
  },
  async 'calls package without error'() {
    await deepEqual()
  },
  async 'gets a link to the fixture'({ FIXTURE }) {
    const res = await deepEqual({
      text: FIXTURE,
    })
    ok(res, FIXTURE)
  },
}

export default T
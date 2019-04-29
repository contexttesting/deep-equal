import makeTestSuite from '@zoroaster/mask'
import Context from '../context'
import deepEqual from '../../src'

// export default
makeTestSuite('test/result', {
  async getResults(input) {
    const res = await deepEqual({
      text: input,
    })
    return res
  },
  context: Context,
})
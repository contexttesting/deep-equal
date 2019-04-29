/* alanode example/ */
import deepEqual from '../src'

(async () => {
  const res = await deepEqual({
    text: 'example',
  })
  console.log(res)
})()
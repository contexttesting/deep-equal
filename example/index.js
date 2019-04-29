import deepEqual from '../src'

const compare = (a, b) => {
  try {
    deepEqual(a, b)
  } catch (err) {
    console.log(err.message)
  }
}

compare('hello', 'world')
compare([10, 4, 20], [100, 4, 30])
compare({ a: 'example', b: 10 }, { b: 10, c: 'context-testing' })
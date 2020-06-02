import {asyncPipe} from '../api-effects'

const addOne = n => new Promise(resolve =>
  setTimeout(() => resolve(n + 1))
)
const fail = () => new Promise(reject =>
  setTimeout(() => reject(`No way!`), 100)
)

describe(`common/side-effects`, () => {
  it(``, async () => {
    const test = asyncPipe(
      addOne,
      seconds => `00:0${seconds}`
    )
    const result = await test(1)
    expect(result).toBe(`00:02`)
  })
  it(``, async () => {
    const test = asyncPipe(
      fail,
      seconds => `00:0${seconds}`
    )
    try {
      await test(1)
    }
    catch (err) {
      expect(err).toBe(`No way!`)
    }
  })
})

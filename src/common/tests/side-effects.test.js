import {asyncPipe} from '../side-effects'

function* genId() {
  for (const i = 1; true; i ++) {
    yield i
  }
}

const addOne = n => new Promise(resolve =>
  setTimeout(() => resolve(n + 1))
)

describe(`common/side-effects`, () => {
  it(`should pipe async function and generators`, async() => {
    const time = await asyncPipe(
      genId,
      addOne,
      seconds => `00:0${seconds}`
    )

    expect(time(1)).toBe(`00:02`)
  })
})

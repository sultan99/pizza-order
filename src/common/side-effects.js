import * as R from 'ramda'

const API_URL = `https://core-graphql.dev.waldo.photos/pizza`

export const asyncPipe = (...fns) => fns.reduce(
  (prev, next) => (...args) => {
    const result = prev(...args)

    return R.is(Promise, result)
      ? result.then(x => next(x))
      : Promise.resolve(next(result))
  }
)

export function fetchData(query) {
  const opts = {
    method: `POST`,
    headers: {"Content-Type": `application/json`},
    body: JSON.stringify({query: `{${query}}`})
  }

  return fetch(API_URL, opts)
    .then(res => res.json())
    .catch(err => console.error(err))
}

export function guid() {
  const rnd = c => {
    const r = Math.random() * 16 | 0, v = c === `x` ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  }

  return `xxxx-xxxx-4xxx-yxxx`.replace(/[xy]/g, rnd)
}

export function random(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)

  return Math.floor(Math.random() * (max - min + 1)) + min
}

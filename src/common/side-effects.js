import * as R from 'ramda'

const API_URL = `https://core-graphql.dev.waldo.photos/pizza`

const toOpts = str => ({
  method: `POST`,
  headers: {"Content-Type": `application/json`},
  body: JSON.stringify({query: `{${str}}`})
})

export const fetchData = query => (
  fetch(API_URL, toOpts(query))
    .then(res => res.json())
    .catch(err => console.error(err))
)

export const asyncPipe = (...fns) => fns.reduce(
  (prev, next) => (...args) => {
    const result = prev(...args)
    return R.is(Promise, result)
      ? result.then(x => next(x))
      : Promise.resolve(next(result))
  }
)

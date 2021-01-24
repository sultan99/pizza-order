import * as R from 'ramda'

const toString: ToString = data => JSON.stringify(
  data,
  ((key, value)=> value || R.toString(value))as ConvertHandler
)

export const hashCode: HashCode = R.pipe(
  R.unless(R.is(String), toString),
  R.split(``),
  R.reduce((a, b) => {
    const h = (a << 5) - a + b.charCodeAt(0)
    return h & h & 0xfffffff
  }, 0),
  R.toString,
)

export const round: Round = value => (
  parseFloat(value.toFixed(2))
)

interface ToString {
  <T>(data: T): string
}

interface ConvertHandler {
  <T>(key: string, value: T): T | string
}

interface HashCode {
  (key: string): string
}

interface Round {
  (x: number): number
}
export function guid() {
  const rnd = c => {
    const r = Math.random() * 16 | 0, v = c === `x` ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  }

  return `xxxx-xxxx-4xxx-yxxx`.replace(/[xy]/g, rnd)
}

export function makeCacheable(fn) {
  const cache = {}
  return key => {
    if (!cache[key]) {
      cache[key] = fn(key)
    }
    return cache[key]
  }
}

export function random(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)

  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const round = value => (
  Math.trunc(value * 100) / 100
)

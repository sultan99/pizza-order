export function makeCacheable(fn) {
  const cache = {}
  return key => {
    if (!cache[key]) {
      cache[key] = fn(key)
    }
    return cache[key]
  }
}

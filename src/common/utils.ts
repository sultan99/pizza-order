export const isDev = process.env.NODE_ENV === 'development'

export const guid = () => {
  const rnd = (c: string) => {
    const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  }
  return 'xxxx-xxxx-4xxx-yxxx'.replace(/[xy]/g, rnd)
}

export const random = (min: number, max: number) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

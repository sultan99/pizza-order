export const guid: Guid = () => {
  const rnd = (c: string) => {
    const r = Math.random() * 16 | 0, v = c === `x` ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  }
  return `xxxx-xxxx-4xxx-yxxx`.replace(/[xy]/g, rnd)
}

export const random: Random = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

interface Guid {
  (): string
}

interface Random {
  (min: number, max: number): number
}
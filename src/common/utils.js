import {useEffect} from 'react'

export const useMount = mount => useEffect(
  mount, []
)

export const useUnmount = unmount => useEffect(
  () => () => {
    unmount && unmount()
  }, []
)

export function random(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

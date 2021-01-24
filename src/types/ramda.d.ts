export function pipe<T0, T1, T2, T3>(fn0: (x: T0) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3): (x: T0) => T3;
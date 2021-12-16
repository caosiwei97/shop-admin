type ABC = { a: number; b: number; c: number }

function sum({ a, b, c }: ABC) {
  return a + b + c
}

sum({ a: 1, b: 2, c: 3 })

const args = [1, 2] as const
const angle = Math.atan2(...args)

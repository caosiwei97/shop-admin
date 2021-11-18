interface Eg1 {
  name: string
  age: number
}
interface Eg2 {
  color: string
  age: string
}

type T1 = Eg1 & Eg2

const a: T1 = {
  name: '1',
  age: (function a() {
    throw Error()
  })(),
  color: ''
}

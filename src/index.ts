export type Item = {
  name: string
  age: number
}
export function greet(name: string): void {
  console.log(`hello ${name}`)
}

export * from "./count"

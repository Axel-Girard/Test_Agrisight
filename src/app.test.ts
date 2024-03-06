import { displayPrefix, displayFirstPrefix, displayAllPrefix } from "./app.ts"

test('display a string of the first prefix', () => {
  expect(displayFirstPrefix(['c'])).toStrictEqual('c')
})

test('display a string of the first two prefixes', () => {
  expect(displayPrefix(['c', 'n'])).toStrictEqual('cn')
})

test('display an array of string for the first two input', () => {
  expect(displayAllPrefix(['c', 'n'])).toStrictEqual(['c', 'cn'])
})

test('display an array of string for the first three input', () => {
  expect(displayAllPrefix(['c', 'n', 's'])).toStrictEqual(['c', 'cn', 'cns'])
})
import {
  displayPrefixAsString,
  displayFirstPrefix,
  displayAllPrefixAsString,
  displayListPrefix,
} from "./app.ts"

test('display a string of the first prefix', () => {
  expect(displayFirstPrefix(['c'])).toStrictEqual('c')
})

test('display a string of the first two prefixes', () => {
  expect(displayPrefixAsString(['c', 'n'])).toStrictEqual('cn')
})

test('display an array of string for the first 2 inputs', () => {
  expect(displayAllPrefixAsString(['c', 'n'])).toStrictEqual(['c', 'cn'])
})

test('display an array of string for the first 3 inputs', () => {
  expect(displayAllPrefixAsString(['c', 'n', 's'])).toStrictEqual(['c', 'cn', 'cns'])
})

test('display an array of string for the first 4 inputs', () => {
  expect(displayListPrefix(['c', 'n', 's'])).toStrictEqual(['c', 'cn', 'cns', 'cs'])
})
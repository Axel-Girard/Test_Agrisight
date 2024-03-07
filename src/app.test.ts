import {
  extendPrefixes,
  reducePrefixes,
  formatPrefixesList,
} from "./app.ts"

test('display an array of strings for the first 2 inputs', () => {
  expect(extendPrefixes(['c', 'n'])).toStrictEqual(['c', 'cn'])
})

test('display an array of strings for the first 3 inputs', () => {
  expect(extendPrefixes(['c', 'n', 's'])).toStrictEqual(['c', 'cn', 'cns'])
})

test('display an array of strings with a downward list of string and a prefix', () => {
  expect(reducePrefixes('c', ['s'])).toStrictEqual(['cs'])
})

test('display an empty array of strings', () => {
  expect(reducePrefixes('', [])).toStrictEqual([])
})

test('display an array of strings based on prefixes', () => {
  expect(formatPrefixesList(['c', 'n', 's'])).toStrictEqual(['c', 'cn', 'cns', 'cs', 'n', 'ns', 's'])
})

test('display an empty array if no prefixes are given', () => {
  expect(formatPrefixesList([])).toStrictEqual([])
})

test('display an array of one string if only one prefix is given', () => {
  expect(formatPrefixesList(['c'])).toStrictEqual(['c'])
})
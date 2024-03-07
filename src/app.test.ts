import {
  displayUpgradingPrefixAsString,
  displayListPrefix,
} from "./app.ts"

test('display an array of string for the first 2 inputs', () => {
  expect(displayUpgradingPrefixAsString(['c', 'n'])).toStrictEqual(['c', 'cn'])
})

test('display an array of string for the first 3 inputs', () => {
  expect(displayUpgradingPrefixAsString(['c', 'n', 's'])).toStrictEqual(['c', 'cn', 'cns'])
})

test('display an array of string based on prefixes', () => {
  expect(displayListPrefix(['c', 'n', 's'])).toStrictEqual(['c', 'cn', 'cns', 'cs', 'n', 'ns', 's'])
})

test('display an empty array if no prefixes are given', () => {
  expect(displayListPrefix([])).toStrictEqual([])
})

test('display an array of one string if only one prefixes is given', () => {
  expect(displayListPrefix(['c'])).toStrictEqual(['c'])
})
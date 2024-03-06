import { displayPrefix, displayFirstPrefix } from "./app";

test('display a string of the first prefix', () => {
    expect(displayFirstPrefix(['c'])).toBe('c');
})

test('display a string of the first two prefixes', () => {
    expect(displayPrefix(['c', 'n'])).toBe('cn');
})
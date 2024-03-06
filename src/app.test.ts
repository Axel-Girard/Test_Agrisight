import { displayFirstPrefix } from "./app";

test('display a string of the first prefix', () => {
    expect(displayFirstPrefix(['c'])).toBe('c');
})
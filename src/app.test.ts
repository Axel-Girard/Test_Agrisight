import { helloWord } from "./app";

test('basic', () => {
    expect(helloWord()).toBe('Hello, World!');
})
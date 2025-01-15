import { capitalize } from "../scripts/capitalize";
describe("capitalize function", () => {
    test("Empty string returns nothing", () => {
        expect(capitalize('')).toBe('');
    });

    test("Single letter should be capitalized", () => {
        expect(capitalize('a')).toBe('A');
    });

    test("First letter of the word should be capitalized", () => {
        expect(capitalize('hello')).toBe("Hello");
    });

    test("First letter of the sentence should be capitalized", () => {
        expect(capitalize('hello to the world.')).toBe("Hello to the world.");
    });
});

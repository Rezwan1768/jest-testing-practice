import { reverseString } from "../scripts/reverseString";

describe("Reverse string", () => {
    test("Function exists", () => {
        expect(typeof reverseString).toBe("function");
    })

    test("Single character is returned as is", () => {
        expect(reverseString("y")).toBe("y");
    })

    test("Word is reversed", () => {
        expect(reverseString("Hello")).toBe("olleH");
    })

    test("Sentence is reversed", () => {
        expect(reverseString("Hello World!")).toBe("!dlroW olleH");
    })
})
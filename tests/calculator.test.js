import { calculator } from "../scripts/calculator";

describe("Calculator object", () => {
    test("Calculator object exists", () => {
        expect(typeof calculator).toBe('object');
    });
});

describe("Calculator add method", () => {
    test("Add method exists", () => {
        expect(typeof calculator.add).toBe('function');
    });

    test("Testing Positves: 5 + 6 should be 11", () => {
        expect(calculator.add(5, 6)).toBe(11);
    });

    test("Testing Negatives: -5 + -7 should be -12", () => {
        expect(calculator.add(-5, -7)).toBe(-12);
    });

    test("Testing Mixed: 5 + -5 should be 0", () => {
        expect(calculator.add(5, -5)).toBe(0);
    });
});

describe("Calculator subtract method", () => {
    test("Subtract method exists", () => {
        expect(typeof calculator.subtract).toBe('function');
    });

    test("Testing Positves: 5 - 6 should be -1", () => {
        expect(calculator.subtract(5, 6)).toBe(-1);
    });

    test("Testing Negatives: -5 - -7 should be 2", () => {
        expect(calculator.subtract(-5, -7)).toBe(2);
    });

    test("Testing Mixed: -5 - 5 should be -10", () => {
        expect(calculator.subtract(-5, 5)).toBe(-10);
    });
});


describe("Calculator multiply method", () => {
    test("Multiply method exists", () => {
        expect(typeof calculator.multiply).toBe('function');
    });

    test("Testing Positves: 5 * 6 should be 30", () => {
        expect(calculator.multiply(5, 6)).toBe(30);
    });

    test("Testing Negatives: -5 * -7 should be 35", () => {
        expect(calculator.multiply(-5, -7)).toBe(35);
    });

    test("Testing Mixed: -5 * 5 should be -25", () => {
        expect(calculator.multiply(-5, 5)).toBe(-25);
    });
});

describe("Calculator divide method", () => {
    test("Divide method exists", () => {
        expect(typeof calculator.divide).toBe('function');
    });

    test("Testing Positves: 102 / 6 should be 17", () => {
        expect(calculator.divide(102, 6)).toBe(17);
    });

    test("Testing Negatives: -32 / -5 should be 6", () => {
        expect(calculator.divide(-30, -5)).toBe(6);
    });

    test("Testing Mixed: -106 / 6 should be -17", () => {
        expect(calculator.divide(-106, 6)).toBe(-18);
    });

    test("Divisor is greater: 6 / 8 should be 0", () => {
        expect(calculator.divide(6, 8)).toBe(0);
    });
});



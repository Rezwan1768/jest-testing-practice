import { caesarCipher } from "../scripts/caesarCipher";

describe("CaesarCipher function", () => {
    test("Function exists", () => {
        expect(typeof caesarCipher).toBe('function');
    });

    test("'b' shifted by 4 should be 'f'", () => {
        expect(caesarCipher('b', 4)).toBe('f');
    });

    test("'abc' shifted by 4 should be 'efg'", () => {
        expect(caesarCipher('abc', 4)).toBe('efg');
    });

    test("'xyz' shifted by 3 should be 'abc'", () => {
        expect(caesarCipher('xyz', 3)).toBe('abc');
    });

    test("'zeus' shifted by 10 should be 'joec'", () => {
        expect(caesarCipher('zeus', 10)).toBe('joec');
    });

    test("'hello' shifted by 150 should be 'byffi'", () => {
        expect(caesarCipher('hello', 150)).toBe('byffi');
    });

    test("'sEe' shifted by 5 should be 'xJj'", () => {
        expect(caesarCipher('sEe', 5)).toBe('xJj');
    });

    test("'Hello World!' shifted by 4 should be 'Khoor, Zruog!'", () => {
        expect(caesarCipher('Hello World!' , 4)).toBe('Lipps Asvph!');
    });

    test("'Hello World!' shifted by 1000 should be 'Tqxxa Iadxp!'", () => {
        expect(caesarCipher('Hello World!' , 1000)).toBe('Tqxxa Iadxp!');
    });

    test("'Hello World!' shifted by 1000 should be 'Vszzc Kcfzr!'", () => {
        expect(caesarCipher('Hello World!' , -1000)).toBe('Vszzc Kcfzr!');
    });

    

});
import { analyzeArray } from "../scripts/analyzeArray";

describe("Test individula part of the returned object", () => {
    test("Funciton exists", () => {
        expect(typeof analyzeArray).toBe('function');
    });

    test("Calculates correct values for [1,8,3,4,2,6]", () => {
        const result = analyzeArray([1, 8, 3, 4, 2, 6]);
        expect(result.average).toBe(4);
        expect(result.min).toBe(1);
        expect(result.max).toBe(8);
        expect(result.length).toBe(6);
    });

});


describe("Full returned object test", () => {
    test("analyzeArray([5, 5, 5, 5, 5])", () => {
        expect(analyzeArray([5, 5, 5, 5, 5])).toEqual({
            average: 5,
            min: 5, 
            max: 5,
            length: 5,
        });
    });

    test("analyzeArray([8, 7, 3, 5, 4, 6])", () => {
        expect(analyzeArray([8, 7, 3, 5, 4, 6])).toEqual({
            average: 5,
            min: 3, 
            max: 8,
            length: 6,
        });
    });

    test("analyzeArray([5, 3, -9, -9, -5, 2, 2, -6])", () => {
        expect(analyzeArray([5, 3, -9, -9, -5, 2, 2, -6])).toEqual({
            average: -2,
            min: -9, 
            max: 5,
            length: 8,
        });
    });

    test("analyzeArray([-11, -3, -5, -12, 0, -7, -9, -3])", () => {
        expect(analyzeArray([-11, -3, -5, -12, 0, -7, -9, -3])).toEqual({
            average: -6,
            min: -12, 
            max: 0,
            length: 8,
        });
    });

    test("analyzeArray([]])", () => {
        expect(analyzeArray([])).toEqual({
            average: 0,
            min: null, 
            max: null,
            length: 0,
        });
    });
})
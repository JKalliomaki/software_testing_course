// Unit tests for map method
import { expect } from "chai";
import map from "../src/map.js";

describe("Map", () => {
    describe("Number mapping", () => {
        it("Calculate squares of number array", () => {
            function square(n) {
                return n * n
                }

            const cases = [
                {
                    in_array: [1, 2, 3, 4],
                    out_array: [1, 4, 9, 16]
                },
                {
                    in_array: [-1, -2, -3, -4],
                    out_array: [1, 4, 9, 16]
                },
                {
                    in_array: [1.0, 2.0, 3.0, 4.0],
                    out_array: [1.0, 4.0, 9.0, 16.0]
                }
            ]

            for (const test_case of cases) {
                expect(map(test_case.in_array, square)).deep.equal(test_case.out_array)
            }
        })
    })

    describe("String mapping", () => {
        it("Calculate length of strings", () => {
            function calculate_string_length(word) {
                return word.length
            }

            const cases = [
                {
                    in_array: ["cat", "hamster", "elephant", "five"],
                    out_array: [3, 7, 8, 4]
                },
                {
                    in_array: ["-1", "3000", "5 million"],
                    out_array: [2, 4, 9]
                }
            ]

            for (const test_case of cases) {
                expect(map(test_case.in_array, calculate_string_length)).deep.equal(test_case.out_array)
            }
        })
    })

    describe("Negative cases", () => {
        it("iteratee doesn't work for all input elements", () => {
            function slice_string(word) {
                return word.slice(1, 2)
            }
            expect(() => map(["one", 2, "three"], slice_string)).to.throw()
        })

        it("Input string instead of array", () => {
            function calculate_string_length(word) {
                return word.length
            }

            expect(() => map("three", calculate_string_length)).to.throw(TypeError)
        })
    })
})
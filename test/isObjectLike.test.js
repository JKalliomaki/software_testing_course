// Unit tests for isObjectLike() function
import { expect } from "chai"
import isObjectLike from "../src/isObjectLike.js"

describe("isObjectLike()-function", () => {
    describe("Positive cases", () => {
        it("Recognize objects", () => {
            const test_cases = [
                {
                    input: {},
                    result: true
                },
                {
                    input: {
                        name: "matti",
                        occupation: "programmer"
                    },
                    result: true
                },
                {
                    input: [1, 2, 3],
                    result: true
                },
                {
                    input: null,
                    result: false
                }
            ]
            for (let test_case of test_cases) {
                expect(isObjectLike(test_case.input)).equal(test_case.result)
            }
        })

        it("Recognize non-objects", () => {
            let a;
            const test_cases = [
                {
                    input: isObjectLike,
                    result: false
                },
                {
                    input: 2,
                    result: false
                },
                {
                    input: "[1, 2, 3]",
                    result: false
                },
                {
                    input: a,
                    result: false
                }
            ]
            for (let test_case of test_cases) {
                expect(isObjectLike(test_case.input)).equal(test_case.result)
            }
        })
    })
})
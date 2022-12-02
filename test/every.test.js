import { expect } from "chai";
import every from "../src/every.js";

describe("Every-function runs predicate for each element of array", () => {

    describe("Check truthiness of elements", () => {
        it("Integer number truthiness", () => {
            const test_cases = [
                {
                    input: [1, 2, 3, 4],
                    equal: true
                },
                {
                    input: [0, 1, 2, 3, 4],
                    equal: false
                },
                {
                    input: [0, -1, -2, -3],
                    equal: false
                },
            ]
            for (let test of test_cases){
                expect(every(test.input, Boolean)).equal(test.equal)
            }
        })

        it("Float number truthiness", () => {
            const test_cases = [
                {
                    input: [1.0, 2.0, 3.0, 4.0],
                    equal: true
                },
                {
                    input: [0.0, 1.0, 2.0, 3.0, 4.0],
                    equal: false
                },
                {
                    input: [0.0, -1.0, -2.0, -3.0],
                    equal: false
                },
            ]
            for (let test of test_cases){
                expect(every(test.input, Boolean)).equal(test.equal)
            }
        })

    })

    describe("Check types of element", () => {
        it("Is of type Number", () => {
            function is_number(val) {
                // Check the type of input and return true if it is number
                return typeof val == "number"
            }
            const test_cases = [
                {
                    input: [1.0, 2.0, 3.0, 4.0],
                    equal: true
                },
                {
                    input: [0.0, "1.0", 2.0, 3.0, 4.0],
                    equal: false
                },
                {
                    input: [0.0, {}, "cat", -3.0],
                    equal: false
                },
            ]
            for (let test of test_cases){
                expect(every(test.input, is_number)).equal(test.equal)
            }
        })

        it("Is of type String", () => {
            function is_string(val) {
                // Check the type of input and return true if it is string
                return typeof val == "string"
            }
            const test_cases = [
                {
                    input: ["cat", "dog", "elephant"],
                    equal: true
                },
                {
                    input: ["cat", "1", "elephant", 1234],
                    equal: false
                },
                {
                    input: ["cat", "dog", {}, "elephant"],
                    equal: false
                },
            ]
            for (let test of test_cases){
                expect(every(test.input, is_string)).equal(test.equal)
            }
        })
    })

    describe("Negative cases", () => {
        it("Don't give function as predicate", () => {
            let pred = "hello"
            expect(() => every(["cat", "dog", "elephant"], pred)).to.throw(TypeError)
        })

        it("Give string as an input", () => {
            expect(() => every("cat", Boolean)).to.throw(TypeError)
        })
    })
})
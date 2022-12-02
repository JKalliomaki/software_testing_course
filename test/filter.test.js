// Unit tests for filter method
import { expect } from "chai";
import filter from "../src/filter.js";

describe("Filter-function iterates over elements of 'array' and returns items with predicate true", function(){
    describe("Remove elements of wrong type", () => {
        it("Remove non-numbers", () => {
            function is_number(val) {
                // Check the type of input and return true if it is number
                return typeof val == "number"
            }
            const test_cases = [
                {
                    input: [1.0, 2.0, 3.0, 4.0],
                    equal: [1.0, 2.0, 3.0, 4.0]
                },
                {
                    input: [0.0, "1.0", 2.0, 3.0, 4.0],
                    equal: [0.0, 2.0, 3.0, 4.0]
                },
                {
                    input: [0.0, {}, "cat", -3.0],
                    equal: [0.0, -3.0]
                },
            ]
            for (let test of test_cases){
                expect(filter(test.input, is_number)).deep.equal(test.equal)
            }
        })
        it("Remove non-strings", () => {
            function is_string(val) {
                // Check the type of input and return true if it is string
                return typeof val == "string"
            }
            const test_cases = [
                {
                    input: ["cat", "dog", "elephant"],
                    equal: ["cat", "dog", "elephant"]
                },
                {
                    input: ["cat", "1", "elephant", 1234],
                    equal: ["cat", "1", "elephant"]
                },
                {
                    input: ["cat", "dog", {}, "elephant"],
                    equal: ["cat", "dog", "elephant"]
                },
            ]
            for (let test of test_cases){
                expect(filter(test.input, is_string)).deep.equal(test.equal)
            }
        })

        it("Remove nulls", () => {
            function is_not_null(val) {
                // Check the type of input and return true if it is number
                return !(val == null)
            }
            const test_cases = [
                {
                    input: ["cat", "dog", null, "elephant"],
                    equal: ["cat", "dog", "elephant"]
                },
                {
                    input: ["cat", "1", "elephant", undefined],
                    equal: ["cat", "1", "elephant"]
                },
                {
                    input: ["cat", null, null, "elephant"],
                    equal: ["cat", "elephant"]
                },
            ]
            for (let test of test_cases){
                expect(filter(test.input, is_not_null)).deep.equal(test.equal)
            }
        })
    })
    
    describe("Negative cases", () => {
        it("Don't give function as predicate", () => {
            let pred = "hello"
            expect(() => filter(["cat", "dog", "elephant"], pred)).to.throw(TypeError)
        })

        it("Give string as an input", () => {
            expect(() => filter("cat", Boolean)).to.throw(TypeError)
        })
    })
})

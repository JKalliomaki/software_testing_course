// Unit tests for isArrayLikeObject
import { expect } from "chai"
import isArrayLikeObject from "../src/isArrayLikeObject.js"

describe("isArrayLikeObject", () => {
    it("Recognize array-like objects", () => {
        expect(isArrayLikeObject([1, 2, 3])).equal(true)
        expect(isArrayLikeObject([])).equal(true)
    })
    it("return false on regular objects", () => {
        expect(isArrayLikeObject({})).equal(false)
        let obj = {
            name: "matti",
            age: 33
        }
        expect(isArrayLikeObject(obj)).equal(false)
        expect(isArrayLikeObject(null)).equal(false)
    })
    it("Return false on other types of values", () => {
        expect(isArrayLikeObject(2)).equal(false)
        expect(isArrayLikeObject("hello")).equal(false)
        expect(isArrayLikeObject(undefined)).equal(false)
    })
})
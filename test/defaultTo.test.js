// Unit tests for defaultTo method
import { expect } from "chai";
import defaultTo from "../src/defaultTo.js";


describe("DefaultTo checks input for null value", () => {

    describe("Cases when value is outputted", () => {
        it("Input is number", () => {
            expect(defaultTo(3, 1)).equal(3)
            expect(defaultTo(10.0, 3)).equal(10.0)
            expect(defaultTo(-5, 3)).equal(-5)
            expect(defaultTo(-7.0, 3)).equal(-7.0)
        })
        it("Input is string", () => {
            expect(defaultTo("hello", "world")).equal("hello")
        })
        
        it("Input is object", () => {
            expect(defaultTo({hello: "world"}, 3)).deep.equal({ hello: "world" })
            expect(defaultTo({}, 3)).deep.equal({})
        })
    })

    describe("Cases when defaultValue is outputted", () => {
        it("Input is null", () => {
            expect(defaultTo(null, 3)).equal(3)
            const null_var = null
            expect(defaultTo(null_var, 3)).equal(3)
        })
        it("Input is undefined", () => {
            expect(defaultTo(undefined, 3)).equal(3)
            let a;
            expect(defaultTo(a, 3)).equal(3)
            
        }) 
        it("Input is NaN", () => {
            expect(defaultTo(NaN, 3)).equal(3)
            const a = NaN
            expect(defaultTo(a, 3)).equal(3)
        })
    })
})
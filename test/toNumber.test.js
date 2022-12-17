import { expect } from "chai";
import toNumber from "../src/toNumber.js"

describe( "toNumber returns input as number", () => {

    describe("Give obvious number as input", ()=>{
        var input = [0, 1, 1.9, "1.1", Infinity, -1.1, Number.MIN_VALUE, "5e-324", true, false, null]
        var result = [0, 1, 1.9, 1.1, Infinity, -1.1, 5e-324, 5e-324, 1, 0, 0]
        input.forEach(check);

        function check( val, index, array ){
            it(`${val} as input`, () => {
                expect(toNumber(val)).to.deep.equal(result[index]);
            })
        }

    })

    describe("Give non-number as input", ()=>{
        var input = [NaN, "Hello", {number:1.9}, Function(), Symbol()]
        input.forEach(check);

        function check( val ){
            it(`${typeof val} as input`, () => {
                expect(toNumber(val)).to.deep.equal(NaN);
            })
        }

    })

})
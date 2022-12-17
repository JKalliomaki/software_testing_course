import { expect } from "chai";
import toInteger from "../src/toInteger.js"

describe( "toInteger rounds the input down to next integer", () => {

    describe("Give number as input", ()=>{
        var input = [0, 1, 1.9, 100.1, "1.1", Infinity, -1.1, true, false]
        var result = [0, 1, 1, 100, 1, 1.7976931348623157e+308, -1, 1, 0]
        input.forEach(check);

        function check( val, index, array ){
            it(`${val} as input`, () => {
                expect(toInteger(val)).to.deep.equal(result[index]);
            })
        }

    })

    describe("Give non-number as input", ()=>{
        var input = [NaN, "Hello", {number:1.9}, Function(), Symbol(), null]
        input.forEach(check);

        function check( val ){
            it(`${typeof val} as input`, () => {
                expect(toInteger(val)).to.equal(0);
            })
        }

    })

})
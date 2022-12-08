// Unit tests for isObject method
import { expect } from "chai";
import isObject from "../src/isObject.js";

describe("isObject", function(){
    it("Give non-object as parameter", function(done){
        expect(isObject(null)).is.false;
        expect(isObject(NaN)).is.false;
        expect(isObject(10)).is.false;
        expect(isObject(undefined)).is.false;
        expect(isObject("undefined")).is.false;
        expect(isObject(true)).is.false;
        done();
    })

    it("Give object as parameter", function(done){
        let a = new String("null");
        expect(isObject(a)).is.true;
        let b = new Array(123, 22);
        expect(isObject(b)).is.true;
        let c = {a : "null"};
        expect(isObject(c)).is.true;
        let e = [];
        expect(isObject(e)).is.true;
        let f = function(){};
        expect(isObject(f)).is.true;
        done();
    })

})

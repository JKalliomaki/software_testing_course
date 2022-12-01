// Unit tests for drop method
import { expect } from "chai";
import drop from "../src/drop.js";

describe("Drop from beging of array", function(){
    var inputArray = [1, 2, 3];

    describe("Items get removed from beging", function(){

        it("Drop one", function(done){
            expect(drop(inputArray)).to.deep.equal([2, 3]);
            expect(drop(inputArray, 1)).to.deep.equal([2, 3]);
            done();
        })

        it("Drop multiple", function(done){
            expect(drop(inputArray, 2)).to.deep.equal([3]);
            expect(drop(inputArray, 3)).to.deep.equal([]);
            expect(drop(inputArray, 6)).to.deep.equal([]);
            done();
        })

        it("Don't drop", function(done){
            expect(drop(inputArray, 0)).to.deep.equal(inputArray);
            done();
        })
    })

    describe("Invalid parameters", function(){
        it("Null as 1st parameter", function(done){
            expect(drop(null)).to.throw();
            done();
        })
        it("String as 1st parameter", function(done){
            expect(drop("String")).to.throw();
            done();
        })
        it("Int as 1st parameter", function(done){
            expect(drop(123)).to.throw();
            done();
        })
        it("Object as 1st parameter", function(done){
            expect(drop({a:null})).to.throw();
            done();
        })

        it("Null as 2st parameter", function(done){
            expect(drop(inputArray, null)).to.throw();
            done();
        })
        it("String as 2st parameter", function(done){
            expect(drop(inputArray, "String")).to.throw();
            done();
        })
        it("Array as 2st parameter", function(done){
            expect(drop(inputArray, inputArray)).to.throw();
            done();
        })
        it("Object as 2st parameter", function(done){
            expect(drop(inputArray, {a:5})).to.throw();
            done();
        })
        it("Negative 2st parameter", function(done){
            expect(drop(inputArray, -1)).to.throw();
            done();
        })
    })
})
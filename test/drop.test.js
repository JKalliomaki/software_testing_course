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

        it("Array including different types", function(done){
            expect(drop(["String", 123, [], {a:null}], 2)).to.deep.equal([[], {a:null}]);
            done();
        })
    })

    describe("Invalid parameters", function(){
        it("Invalid type for 1st parameter", function(done){
            expect(drop(null)).to.throw();
            expect(drop("String")).to.throw();
            expect(drop(123)).to.throw();
            expect(drop({a:null})).to.throw();
            done();
        })

        it("Invalid type for 2nd parameter", function(done){
            expect(drop(inputArray, null)).to.throw();
            expect(drop(inputArray, "String")).to.throw();
            expect(drop(inputArray, inputArray)).to.throw();
            expect(drop(inputArray, {a:5})).to.throw();
            done();
        })

        it("Negative 2nd parameter", function(done){
            expect(drop(inputArray, -1)).to.throw();
            done();
        })
    })
})
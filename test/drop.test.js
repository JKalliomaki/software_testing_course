// Unit tests for drop method
import { expect } from "chai";
import drop from "../src/drop.js";

describe("Drop from beginning of array", function(){
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
        var secondParams = [null, "String", 123, {a:5}]
        secondParams.forEach(elment => {
            it(`${typeof elment} type for 1st parameter`, function(done){
                expect(drop(element)).to.throw();
                done()
            })

            it(`${typeof elment} type for 2nd parameter`, function(done){
                expect(drop(inputArray, element)).to.throw();
                done()
            })

        });

        it("Negative 2nd parameter", function(done){
            expect(drop(inputArray, -1)).to.throw();
            done();
        })
    })
})
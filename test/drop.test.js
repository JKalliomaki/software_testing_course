// Unit tests for drop method
import { expect } from "chai";
import drop from "../src/drop.js";

describe("Drop from beging of array", function(){
    it("Items get removed from beging / Positive cases", function(done){
        var inputArray = [1, 2, 3];

        var oneDropped = drop(inputArray);
        var oneDropped2 = drop(inputArray, 1);
        var twoDropped = drop(inputArray, 2);
        var notDropped = drop(inputArray, 0);
        var allDropped = drop(inputArray, 3);

        expect(oneDropped).to.deep.equal([2, 3]);
        expect(oneDropped2).to.deep.equal([2, 3]);
        expect(twoDropped).to.deep.equal([3]);
        expect(notDropped).to.deep.equal(inputArray);
        expect(allDropped).to.deep.equal([]);

        done();
    })
})
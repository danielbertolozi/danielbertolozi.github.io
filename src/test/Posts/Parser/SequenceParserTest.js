const { expect } = require("chai");
const { SequenceParser } = require("../../../../dist/Posts/Parser/Metadata/SequenceParser");

const testOne = "Title: Example\n\
Tags:\n\
- amazing\n\
- cool";

const testTwo = "Title: Example\n\
Tags:\n\
- nice\n\
- good\n\
Time: Yesterday";

context("Sequence Parser", () => {
  describe(".extractEntries", () => {
    it("should get all items from a given sequence node", () => {
      expect(SequenceParser.extractEntries(testOne, "Tags:")).to.be.deep.equal(
        ["amazing", "cool"]
      );
      expect(SequenceParser.extractEntries(testTwo, "Tags:")).to.be.deep.equal(
        ["nice", "good"]
      );
    });
  });
});
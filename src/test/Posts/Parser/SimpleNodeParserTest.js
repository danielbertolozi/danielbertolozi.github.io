const { expect } = require("chai");
const { SimpleNodeParser } = require("../../../../dist/Posts/Parser/Metadata/SimpleNodeParser");

const testInput = "Title: Example\n\
Tags:\n\
- nice\n\
- good\n\
Time: Yesterday";

context("Simple Node Parser", () => {
  describe(".extractNodeValue", () => {
    it("should extract values from given nodes", () => {
      expect(SimpleNodeParser.extractNodeValue(testInput, "Title:")).to.be.equal("Example");
      expect(SimpleNodeParser.extractNodeValue(testInput, "Time:")).to.be.equal("Yesterday");
    });
  });
});
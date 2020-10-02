const { expect } = require("chai");
const { Fetcher } = require("../../../dist/Posts/Fetcher");

context("Post/Fetcher Test", () => {
  describe("basic", () => {
    it("should import", () => {
      expect(new Fetcher()).not.to.be.undefined;
    });
  });
});

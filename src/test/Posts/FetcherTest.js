const { expect } = require("chai");
const { Fetcher } = require("../../../dist/Posts/Fetcher");

context("Post/Fetcher Test", () => {
  describe(".import", () => {
    it("should import all md content from given path", () => {
      const fetcher = new Fetcher();
      const posts = fetcher.importFrom("");
      expect(new Fetcher()).not.to.be.undefined;
    });
  });
});

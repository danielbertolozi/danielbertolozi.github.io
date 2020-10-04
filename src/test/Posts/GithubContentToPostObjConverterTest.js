const { expect } = require("chai");
const {GithubContentToPostObjConverter} = require("../../../dist/Posts/GithubContentToPostObjConverter");
const {PostWrapper} = require("../../../dist/Posts/PostWrapper");

context("Github Content to Post Object Converter", () => {
  let converter;
  const mockPost = {
    fileName: "Mock",
    content: "This is the mock corpus",
    downloadUrl: "http://google.com"
  };
  beforeEach(() => {
    converter = new GithubContentToPostObjConverter();
  });
  describe(".convert", () => {
    it("should return a PostWrapper instance w/ post content", () => {
      const result = converter.convert(mockPost);
      expect(result).to.be.an.instanceOf(PostWrapper);
    });
  });
});
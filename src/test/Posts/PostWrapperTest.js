const { expect } = require("chai");
const {PostWrapper} = require("../../../dist/Posts/PostWrapper");

context("Post Wrapper", () => {
  const mockPost = {
    fileName: "Mock",
    content: "This is the mock corpus",
    downloadUrl: "http://google.com"
  };
  const mockPostWithMeta = {
    fileName: "Metadata",
    content: "Time: Sun Oct 04 2020 20:07:12 GMT-0300\
    Title: Metadata support for Markdown!\
    Tags:\
    - programming\
    - meta\
    - javascript\
    - markdown\
    \
    --/--/--\
    This is the first line of content.\
    Second line.",
    downloadUrl: "http://google.com"
  };
  describe("when instantiating", () => {
    it("should store provided GitHub Post Object", () => {
      const wrapper = new PostWrapper(mockPost);
      expect(wrapper.getRawFile()).to.be.equal(mockPost.content);
      expect(wrapper.getFileName()).to.be.equal(mockPost.fileName);
      expect(wrapper.getFileUrl()).to.be.equal(mockPost.downloadUrl);
    });
    it("should parse given content metadata", () => {
      const wrapper = new PostWrapper(mockPostWithMeta);
      expect(wrapper.getMetadata()).to.be.deep.equal({
        Time: "Sun Oct 04 2020 20:07:12 GMT-0300",
        Title: "Metadata support for Markdown!",
        Tags: ["programming", "meta", "javascript", "markdown"]
      });
    });
  });
});
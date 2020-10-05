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
    content: "Time: Sun Oct 04 2020 20:07:12 GMT-0300\n\
    Title: Metadata support for Markdown!\n\
    Tags:\n\
    - programming\n\
    - meta\n\
    - javascript\n\
    - markdown\n\
    \n\
    --/--/--\nThis is the first line of content.\nSecond line.",
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
    it("should separate post content from metadata correctly", () => {
      const wrapper = new PostWrapper(mockPostWithMeta);
      expect(wrapper.getContent()).to.be.equal("This is the first line of content.\nSecond line.");
    });
    it("should support posts with no metadata", () => {
      const wrapper = new PostWrapper(mockPost);
      expect(wrapper.getContent()).to.be.equal("This is the mock corpus");
      expect(wrapper.getMetadata()).to.be.deep.equal({
        Time: "",
        Title: "",
        Tags: []
      });
    });
  });
});
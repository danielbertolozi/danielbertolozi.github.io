const { expect } = require("chai");
const {PostWrapper} = require("../../../dist/Posts/PostWrapper");

context("Post Wrapper", () => {
  const mockPost = {
    fileName: "Mock",
    content: "This is the mock corpus",
    downloadUrl: "http://google.com"
  };
  describe("when instantiating", () => {
    it("should store provided GitHub Post Object", () => {
      const wrapper = new PostWrapper(mockPost);
      expect(wrapper.getRawPost()).to.be.equal(mockPost.content);
      expect(wrapper.getFileName()).to.be.equal(mockPost.fileName);
      expect(wrapper.getFileUrl()).to.be.equal(mockPost.downloadUrl);
    });
  });
});
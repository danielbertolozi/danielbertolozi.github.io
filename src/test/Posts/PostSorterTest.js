const { PostWrapper } = require("../../../dist/Posts/PostWrapper");
const { PostSorter } = require("../../../dist/Posts/PostSorter");
const { expect } = require("chai");

context("Post Sorter", () => {
  describe(".newToOld", () => {
    it("should sort posts by date (descending)", () => {
      const oldPost = new PostWrapper({
        content: "Time: Fri Oct 02 2020 20:07:12 GMT-0300"
      });
      const newPost = new PostWrapper({
        content: "Time: Sat Oct 03 2020 20:07:12 GMT-0300"
      });
      const wrongOrderArr = [newPost, oldPost];
      PostSorter.newToOld(wrongOrderArr);

      expect(wrongOrderArr[0]).to.be.equal(newPost);
    });
  });
});
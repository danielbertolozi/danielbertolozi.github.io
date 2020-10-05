const { expect } = require("chai");
const { DateFormatter } = require("../../../dist/Formatter/DateFormatter");

context("Date Formatter", () => {
  describe(".formatPostDate", () => {
    it("should format in dd/MM/YYYY", () => {
      const testDate = new Date(2020, 1, 3);
      expect(DateFormatter.formatPostDate(testDate)).to.be.equal("2/3/2020, 12:00:00 AM");
    });
  });
});
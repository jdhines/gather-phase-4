const { assert, expect } = require("chai");
const { buildItemObject } = require("../test-utils");

describe("User creates a new item: ", () => {
  describe("navigates to the item's page", () => {
    it("and can see individual item details", () => {
      const itemToCreate = buildItemObject();
      browser.url("/items/create");
      // browser.click('a[href="/items/create"]');
      browser.setValue("#title-input", itemToCreate.title);
      browser.setValue("#description-input", itemToCreate.description);
      browser.setValue("#imageUrl-input", itemToCreate.imageUrl);
      browser.click("#submit-button");
      assert.include(browser.getText("body"), itemToCreate.title);
      // assert.include(
      //   browser.getAttribute("body img", "src"),
      //   itemToCreate.imageUrl
      // // );
      browser.click(".item-card a:first-child");
      assert.include(browser.getText("body"), itemToCreate.description);
    });
  });
});

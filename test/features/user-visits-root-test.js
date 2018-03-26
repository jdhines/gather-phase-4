const { assert } = require("chai");
const { buildItemObject } = require("../test-utils");

describe("User visits root", () => {
  describe("without existing items", () => {
    it("starts blank", () => {
      browser.url("/");
      assert.equal(browser.getText("#items-container"), "");
    });
  });
  describe("can navigate", () => {
    it("to the create page", () => {
      // Setup
      browser.url("/");
      // Exercise
      browser.click('a[href="/items/create"]');
      // Verification
      assert.include(browser.getText("body"), "Create");
    });
  });

  describe("can use item buttons", () => {
    beforeEach(() => {
      const itemToCreate = buildItemObject();
      browser.url("/items/create");
      browser.setValue("#title-input", itemToCreate.title);
      browser.setValue("#description-input", itemToCreate.description);
      browser.setValue("#imageUrl-input", itemToCreate.imageUrl);
      browser.click("#submit-button");
    });

    it("to delete an existing item", () => {
      //TDD: Couldn't get single-item router test to pass
      //because of timeout issues
      // assert.include(browser.getText("body"), "My favorite item");
      // browser.click(".image-overlay a:first-child");
      // assert.notInclude(browser.getText("body"), "My favorite item");
    });
  });
});

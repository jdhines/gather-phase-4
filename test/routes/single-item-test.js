const { assert } = require("chai");
const request = require("supertest");

const app = require("../../app");

const { parseTextFromHTML, seedItemToDatabase } = require("../test-utils");
const {
  connectDatabaseAndDropData,
  diconnectDatabase,
} = require("../setup-teardown-utils");

describe("Server path: /items/:id", () => {
  beforeEach(connectDatabaseAndDropData);

  afterEach(diconnectDatabase);

  // Write your test blocks below:
  describe("GET", () => {
    it("renders item properties", async () => {
      const item = await seedItemToDatabase();

      const response = await request(app).get(`/items/${item._id}`);

      assert.include(
        parseTextFromHTML(response.text, "#item-title"),
        item.title
      );
      assert.include(
        parseTextFromHTML(response.text, "#item-description"),
        item.description
      );
    });
  });
});

describe("Server path: /items/:id/delete", () => {
  describe("DELETE", () => {
    // it("removes an item from the database", async () => {
    //   const item = await seedItemToDatabase();
    //   const response = await request(app)
    //     .del(`/items/${item._id}/delete`)
    //     .send({ id: item._id })
    //     .expect(200);
    //   // assert.equal(repsonse.status, 200);
    //   console.log(response);
    //   done();
    // });
  });
});

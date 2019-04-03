const { company } = require("../src");

describe("Company", () => {
  describe("success", () => {});

  describe("failure", () => {
    test("creates a company", async () => {
      const [success, body] = await company.create();
      expect(success).toEqual(false);
      expect(body).toEqual({
        description: "Invalid request",
        content: { id: ["can't be blank"] }
      });
    });
  });
});

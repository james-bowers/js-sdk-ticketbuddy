const { company } = require("../src");

describe("Company", () => {
  test("creates a company", async () => {
    const [isSuccessful, body] = await company.create();
    expect(isSuccessful).toEqual(true);
    // expect(body).toEqual({
    //   description: "Invalid request",
    //   content: { id: ["can't be blank"] }
    // });
  });
});

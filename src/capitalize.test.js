const capitalize = require("./capitalize");

test("returns string with first letter capitalized", () => {
  expect(capitalize("test")).toBe("Test");
});

test("works with all caps", () => {
  expect(capitalize("TEST")).toBe("TEST");
});

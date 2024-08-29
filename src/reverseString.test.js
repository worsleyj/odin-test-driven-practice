const reverseString = require("./reverseString");

test("reverses string correctly", () => {
  expect(reverseString("joseph")).toBe("hpesoj");
});

test("works with palindromes", () => {
  expect(reverseString("racecar")).toBe("racecar");
});

test("works with numbers", () => {
  expect(reverseString("12345")).toBe("54321");
});

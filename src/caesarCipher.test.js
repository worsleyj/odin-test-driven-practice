const caesarCipher = require("./caesarCipher");

test("works correctly", () => {
  expect(caesarCipher("abc", 5)).toBe("fgh");
});

test("works with negative", () => {
  expect(caesarCipher("fgh", -5)).toBe("abc");
});

test("works with wrapping letters (z -> a)", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("works with wrapping letters (a -> z)", () => {
  expect(caesarCipher("abc", -3)).toBe("xyz");
});

test("works with punctuation", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("khoor, zruog!");
});

const Calculator = require("./calculator");
const calc = new Calculator();

test("adds two numbers", () => {
  expect(calc.add(1, 2)).toBe(3);
});

test("adds negative numbers", () => {
  expect(calc.add(-2, 5)).toBe(3);
});

test("subtracts two numbers", () => {
  expect(calc.subtract(5, 2)).toBe(3);
});

test("subtracts negative numbers", () => {
  expect(calc.subtract(-2, 5)).toBe(-7);
});

test("multiplies two numbers", () => {
  expect(calc.multiply(5, 2)).toBe(10);
});

test("multiplies negative numbers", () => {
  expect(calc.multiply(-2, 5)).toBe(-10);
});

test("divides two numbers", () => {
  expect(calc.divide(4, 2)).toBe(2);
});

test("divides negative numbers", () => {
  expect(calc.divide(-10, 5)).toBe(-2);
});

test("can divide into fractions", () => {
  expect(calc.divide(5, 2)).toBe(2.5);
});

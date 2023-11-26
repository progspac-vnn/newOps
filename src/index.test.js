// import files
var add = require('./calculator/add')
var subtract = require('./calculator/subtract')
var multiply = require('./calculator/multiply')
var divide = require('./calculator/divide')


// Test Case 1 (Addition)
test("Should add two numbers", () => {
  expect(add(25, 10)).toBe(35);
});

// Test Case 2 (Subtraction)
test("Should subtract two numbers", () => {
  expect(subtract(2, 1)).toBe(1);
});

// Test Case 3 (Multiplication)
test("Should multiply two numbers", () => {
  expect(multiply(4, 5)).toBe(20);
});

// Test Case 4 (Division)
test("Should divide two numbers", () => {
  expect(divide(12, 3)).toBe(4);
});
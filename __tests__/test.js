let order = require("../diner.js");

//General tests
test("Test if meal has ids", () => {
  expect(order.processOrder("breakfast")).toBe("Invalid input");
});

test("Test if meal type is vaild", () => {
  expect(order.processOrder("Lupper 1,2,3")).toBe("Invalid meal type");
});

//Breakfast specific tests

test("Test if multiple mains are ordered for breakfast", () => {
  expect(order.processOrder("Breakfast 1,1")).toBe(
    "Unable to process. Eggs can not be ordered more than once"
  );
});

test("Test multiple coffees for breakfast", () => {
  multipleCoffees = {
    1: 1,
    2: 1,
    3: 2,
  };
  expect(order.breakfastOrder(multipleCoffees)).toBe("Eggs Toast Coffee(2)");
});

test("Test water for breakfast if no drink is ordered", () => {
  breakfast = {
    1: 1,
    2: 1,
  };
  expect(order.breakfastOrder(breakfast)).toBe("Eggs Toast Water");
});

//Lunch specific tests
test("Test if multiple mains are ordered for lunch", () => {
  expect(order.processOrder("Lunch 1,1")).toBe(
    "Unable to process. Sandwich can not be ordered more than once"
  );
});

test("Test multiple sides for lunch", () => {
  multipleSides = {
    1: 1,
    2: 2,
    3: 1,
  };
  expect(order.lunchOrder(multipleSides)).toBe("Sandwich Chips(2) Soda");
});

test("Test water for lunch if no drink is ordered", () => {
  lunch = {
    1: 1,
    2: 1,
  };
  expect(order.lunchOrder(lunch)).toBe("Sandwich Chips Water");
});

//Dinner specific tests
test("Test if multiple mains are ordered for dinner", () => {
  expect(order.processOrder("Dinner 1,1")).toBe(
    "Unable to process. Steak can not be ordered more than once"
  );
});

test("Test water for dinner if no drink is ordered", () => {
  dinner = {
    1: 1,
    2: 1,
    4: 1,
  };
  expect(order.dinnerOrder(dinner)).toBe("Steak Potatoes Water Cake");
});

test("Test dessert was ordered for dinner", () => {
  dinner = {
    1: 1,
    2: 1,
    3: 1,
  };
  expect(order.dinnerOrder(dinner)).toBe(
    "Unable to process. Dessert is missing"
  );
});

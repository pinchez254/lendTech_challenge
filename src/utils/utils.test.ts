import { isNumber, isEven } from "./index";

//test isNumber
test("isNumber", () => {
  expect(isNumber(1)).toBe(true);
  expect(isNumber(1.1)).toBe(true);
  expect(isNumber("1")).toBe(false);
  expect(isNumber("1.1")).toBe(false);
  expect(isNumber(true)).toBe(false);
  expect(isNumber(false)).toBe(false);
  expect(isNumber([])).toBe(false);
  expect(isNumber({})).toBe(false);
  expect(isNumber(undefined)).toBe(false);
  expect(isNumber(null)).toBe(false);
});

//test isEven
test("isEven", () => {
  expect(isEven(2)).toBe(true);
  expect(isEven(3)).toBe(false);
  expect(isEven(1)).toBe(false);
  expect(isEven(0)).toBe(true);
  expect(isEven(-1)).toBe(false);
  expect(isEven(-2)).toBe(true);
}, 10000);

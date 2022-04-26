const { expect } = require("@jest/globals");
const fractions = require("./Fractions");

describe("Multiply Fractions.", () => {
  test("Multiply two postive improper fractions.", () => {
    expect(fractions.multiplyFractions("5/2", "5/3")).toBe("25/6");
  });

  test("Multiply Zero Fraction with a Negative Improper Fraction.", () => {
    expect(fractions.multiplyFractions("0/0", "-5/2")).toBe("0/0");
  });

  test("Multiply Negative Fraction with a Positive Fraction.", () => {
    expect(fractions.multiplyFractions("-1/2", "3/4")).toBe("-3/8");
  });

  test("Multiply Postive Fraction with a Negative Fraction.", () => {
    expect(fractions.multiplyFractions("1/2", "-3/4")).toBe("-3/8");
  });
});

describe("Parse Fraction.", () => {
  test("Parse positive fraction.", () => {
    expect(fractions.parseFraction("3/8")).toStrictEqual([3, 8]);
  });

  test("Parse Zero fraction.", () => {
    expect(fractions.parseFraction("0/0")).toStrictEqual([0, 0]);
  });

  test("Parse negative fraction.", () => {
    expect(fractions.parseFraction("-1/2")).toStrictEqual([-1, 2]);
  });

  test("Parse negative improper fraction.", () => {
    expect(fractions.parseFraction("-10/2")).toStrictEqual([-10, 2]);
  });

  test("Parse whole number.", () => {
    expect(fractions.parseFraction("2")).toStrictEqual([2]);
  });

  test("Parse negative whole number.", () => {
    expect(fractions.parseFraction("-2")).toStrictEqual([-2]);
  });
});

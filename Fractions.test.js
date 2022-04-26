const { expect } = require("@jest/globals");
const fractions = require("./Fractions");

describe("Multiply Fractions.", () => {
  test("Multiply two postive improper fractions.", () => {
    expect(fractions.multiplyFractions("5/2", "5/3")).toBe("25/6");
  });

  test("Multiply Zero Fraction with a Negative Improper Fraction.", () => {
    expect(fractions.multiplyFractions("0/1", "-5/2")).toBe("0/2");
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

  test("Parse mixed fractions.", () => {
    expect(fractions.parseFraction("2_3/4")).toStrictEqual([2, 3, 4]);
  });

  test("Parse negative mixed fractions.", () => {
    expect(fractions.parseFraction("-2_3/4")).toStrictEqual([-2, 3, 4]);
  });
});

describe("Divide Fractions.", () => {
  test("Divide two postive improper fractions.", () => {
    expect(fractions.divideFractions("5/2", "5/3")).toBe("15/10");
  });

  test("Divide Zero Fraction with a Negative Improper Fraction.", () => {
    expect(fractions.divideFractions("0/1", "-5/2")).toBe("0/5");
  });

  test("Divide Negative Fraction with a Positive Fraction.", () => {
    expect(fractions.divideFractions("-1/2", "3/4")).toBe("-4/6");
  });
});

describe("Get Reciprocal of Fraction", () => {
  test("Reciprocal positive fraction.", () => {
    expect(fractions.getReciprocalFractions("3/8")).toBe("8/3");
  });

  test("Reciprocal negative fraction.", () => {
    expect(fractions.getReciprocalFractions("-1/2")).toBe("-2/1");
  });
});

describe("Add Fractions.", () => {
  test("Add two postive fractions.", () => {
    expect(fractions.addFractions("2/3", "2/3")).toBe("12/9");
  });

  test("Add Improper Fraction and Fraction.", () => {
    expect(fractions.addFractions("5/2", "3/4")).toBe("26/8");
  });

  test("Add Zero Fraction with a Positive Fraction.", () => {
    expect(fractions.addFractions("0/1", "3/4")).toBe("3/4");
  });

  test("Add Negative Fraction with a Positive Fraction.", () => {
    expect(fractions.addFractions("-1/2", "3/4")).toBe("2/8");
  });

  test("Add Postive Fraction with a Negative Fraction.", () => {
    expect(fractions.addFractions("1/2", "-3/4")).toBe("-2/8");
  });
});

describe("subtract Fractions.", () => {
  test("Subtract two postive fractions w/first fraction smaller.", () => {
    expect(fractions.subtractFractions("1/2", "2/3")).toBe("-1/6");
  });

  test("Subtract two positive fractions.", () => {
    expect(fractions.subtractFractions("2/3", "1/2")).toBe("1/6");
  });

  test("Subtract Improper fraction with Positive Fraction.", () => {
    expect(fractions.subtractFractions("5/2", "3/4")).toBe("14/8");
  });

  test("Subtract Zero Fraction w/ Positive Fraction.", () => {
    expect(fractions.subtractFractions("0/1", "3/4")).toBe("-3/4");
  });

  test("Subtract Negative Fraction with a Postive Fraction.", () => {
    expect(fractions.subtractFractions("-1/2", "3/4")).toBe("-10/8");
  });

  test("Subtract Postive Fraction with a Negative Fraction.", () => {
    expect(fractions.subtractFractions("1/2", "-3/4")).toBe("10/8");
  });
});

describe("Convert mixed fractions to improper fractions.", () => {
  test("Mixed fraction to Improper fraction.", () => {
    expect(fractions.convertToImproperFraction("3_3/4")).toBe("15/4");
  });

  test("Negative mixed fraction to Improper fraction.", () => {
    expect(fractions.convertToImproperFraction("-3_3/4")).toBe("-15/4");
  });

  test("Returns fraction if fraction.", () => {
    expect(fractions.convertToImproperFraction("3/4")).toBe("3/4");
  });

  test("Whole number to improper fraction.", () => {
    expect(fractions.convertToImproperFraction("3")).toBe("3/1");
  });

  test("Zero to fraction.", () => {
    expect(fractions.convertToImproperFraction("0")).toBe("0/1");
  });

  test("Negative fraction to fraction.", () => {
    expect(fractions.convertToImproperFraction("-3/4")).toBe("-3/4");
  });
});

describe("Find the greatest common denominator.", () => {
  test("Greatest common denominator of an improper fraction.", () => {
    expect(fractions.findGcd(8,4)).toBe(4);
  });
  test("Greatest common denominator of a negative improper fraction.", () => {
    expect(fractions.findGcd(-8,4)).toBe(4);
  });
  test("Greatest common denominator of a simplified fraction.", () => {
    expect(fractions.findGcd(15,4)).toBe(1);
  });
  test("Greatest common denominator of a fraction.", () => {
    expect(fractions.findGcd(4,16)).toBe(4);
  });
});

describe("Simplify fractions.", () => {
  test("Simplify a simplified fraction", () => {
    expect(fractions.simplifyFraction("15/4")).toBe("15/4");
  });
  test("Simplify improper fraction.", () => {
    expect(fractions.simplifyFraction("3/1")).toBe("3");
  });
  test("Simplifiy improper fraction.", () => {
    expect(fractions.simplifyFraction("12/4")).toBe("3");
  });
  test("Simplify negative improper fraction.", () => {
    expect(fractions.simplifyFraction("-12/4")).toBe("-3");
  });
  test("Simplify fraction.", () => {
    expect(fractions.simplifyFraction("4/16")).toBe("1/4");
  });
  test("Simplify negative fraction.", () => {
    expect(fractions.simplifyFraction("-4/16")).toBe("-1/4");
  });
});
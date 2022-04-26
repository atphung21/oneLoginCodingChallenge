// As the next step, we ask that you tackle the below coding problem.

// Coding Challenge:

// Write a command-line program in the language of your choice that will take operations on fractions as an input and produce a fractional result.
// Legal operators shall be *, /, +, - (multiply, divide, add, subtract)
// Operands and operators shall be separated by one or more spaces
// Mixed numbers will be represented by whole_numerator/denominator. e.g. "3_1/4"
// Improper fractions and whole numbers are also allowed as operands

// Example run:

// ? 1/2 * 3_3/4 = 1_7/8

// ?2_3/8 + 9/8 = 3_1/2

// The problem should take around 2 hours to complete.  For the problem, we recommend that you include test cases and unit tests.

// Cases to think about
// Improper Fractions (Postive & Negative), Zero, Whole Numbers(positive & Negative), Whole numbers with denominator(Postive & Negative)

//Unit test cases
// Test cases
// Null arguments
// Whole Numbers
// Improper Fractions
// Mixed Numbers
// each function should have its own unit tests
// Happy Path (Normal cases, improper), edge case (whole numbers, negative numbers, mixed Numbers) each function

// Modularized Functions
//  +,
// -,
// '/',
// * - done
// Common Denominator
// Improper Fractions (easiest to calculate) -
// Parse strings - dont
// Convert Improper Fractions into Mixed numbers and simplify
// Convert Mixed numbers into improper fractions -

// Arguments
// Improper Fractions

//Edge Cases
// Simplification (last)
// Return as improper fraction
// Return as whole number
// Error handling
// return 0 when numerator is 0
// Throw error for invalid inputs
// clean up function 9/1 = 9;
// function to parse operands (split by space)
// negative numbers when subtracting

function multiplyFractions(fraction1, fraction2) {
  const parsedFraction1 = parseFraction(fraction1);
  let numerator1 = parsedFraction1[0];
  let denominator1 = parsedFraction1[1];

  const parsedFraction2 = parseFraction(fraction2);
  let numerator2 = parsedFraction2[0];
  let denominator2 = parsedFraction2[1];

  let multiplyNumerator = numerator1 * numerator2;
  let multiplyDenominator = denominator1 * denominator2;

  return `${multiplyNumerator}/${multiplyDenominator}`;
}

function divideFractions(fraction1, fraction2) {
  let reciprocalFraction = getReciprocalFractions(fraction2);
  return multiplyFractions(fraction1, reciprocalFraction);
}

function addFractions(fraction1, fraction2) {
  let parsedFraction1 = parseFraction(fraction1);
  let parsedFraction2 = parseFraction(fraction2);

  let fraction1Denominator = `${parsedFraction1[1]}/${parsedFraction1[1]}`;
  let fraction2Denominator = `${parsedFraction2[1]}/${parsedFraction2[1]}`;

  let convertedFraction1 = multiplyFractions(fraction1Denominator, fraction2);
  let convertedFraction2 = multiplyFractions(fraction2Denominator, fraction1);

  let addedFractions =
    parseFraction(convertedFraction1)[0] + parseFraction(convertedFraction2)[0];

  return `${addedFractions}/${parseFraction(convertedFraction2)[1]}`;
}

function subtractFractions(fraction1, fraction2) {
  if (fraction2.startsWith("-")) {
    let positiveFraction = fraction2.slice(1);
    return addFractions(fraction1, positiveFraction);
  }
  let negativeFraction = `-${fraction2}`;
  return addFractions(fraction1, negativeFraction);
}

function parseFraction(fraction) {
  // Returns an array of integers (only whole numbers - no decimals)
  let split = fraction.split(/[_/]+/);
  let parseInteger = split.map((string) => parseInt(string));
  return parseInteger;
}

function getReciprocalFractions(fraction) {
  let parsedFraction = parseFraction(fraction);
  if (parsedFraction[0] < 0) {
    let reciprocalNegativeFraction = `-${parsedFraction[1]}/${
      parsedFraction[0] * -1
    }`;
    return reciprocalNegativeFraction;
  }
  let reciprocalFraction = `${parsedFraction[1]}/${parsedFraction[0]}`;
  return reciprocalFraction;
}

function convertToImproperFraction(fraction) {
  if (fraction.includes("_")) {
    let mixedFraction = parseFraction(fraction);
    if (mixedFraction[0] < 0) {
      return `-${
        Math.abs(mixedFraction[0]) * mixedFraction[2] + mixedFraction[1]
      }/${mixedFraction[2]}`;
    }
    return `${mixedFraction[0] * mixedFraction[2] + mixedFraction[1]}/${
      mixedFraction[2]
    }`;
  }
  if (fraction.includes("/")) {
    return fraction;
  }
  return `${fraction}/1`;
}

module.exports = {
  multiplyFractions,
  parseFraction,
  divideFractions,
  getReciprocalFractions,
  addFractions,
  subtractFractions,
  convertToImproperFraction,
};

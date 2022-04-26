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

function parseFraction(fraction) {
  // Returns an array of two integers (only whole numbers - no decimals)
  let split = fraction.split("/");
  let parseInteger = split.map((string) => parseInt(string));
  return parseInteger;
}

function getReciprocalFractions(fraction) {
  let parsedFraction = parseFraction(fraction);
  let reciprocalFraction = `${parsedFraction[1]}/${parsedFraction[0]}`;
  return reciprocalFraction;
}

module.exports = { multiplyFractions, parseFraction, divideFractions, getReciprocalFractions };
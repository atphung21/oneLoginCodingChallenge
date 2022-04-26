function fractionCalculator(equation) {
  //Takes a string as an argument I.E. "1/2 * 3_3/4"
  let split =
    typeof equation !== "undefined"
      ? equation
          .split(" ")
          .filter((string) => string !== "")
          .map((element) => {
            if (
              element === "*" ||
              element === "/" ||
              element === "+" ||
              element === "-"
            ) {
              return element;
            }
            return convertToImproperFraction(element);
          })
      : new Error(
          "Must include arguments of two operands and an operator. I.E. 1/2 * 3_3/4"
        );

  if (split.length !== 3) {
    throw new Error("Arugments must include two operands and an operator.");
  }

  let fraction1 = split[0];
  let fraction2 = split[2];
  let operator =
    split[1] === "*" ||
    split[1] === "/" ||
    split[1] === "+" ||
    split[1] === "+" ||
    split[1] === "-"
      ? split[1]
      : new Error("Invalid operator.");
  let result;

  if (operator === "*") {
    result = multiplyFractions(fraction1, fraction2);
  }
  if (operator === "/") {
    result = divideFractions(fraction1, fraction2);
  }
  if (operator === "+") {
    result = addFractions(fraction1, fraction2);
  }
  if (operator === "-") {
    result = subtractFractions(fraction1, fraction2);
  }
  if (result) {
    let simplifiedResult = simplifyFraction(result);
    let mixedNumberResult = convertToMixedNumber(simplifiedResult);
    return mixedNumberResult;
  } else throw new Error("Invalid argument.");
}

function multiplyFractions(fraction1, fraction2) {
  //Takes fractions as strings for each argument I.E "1/2" || "10/4"
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
  //Takes fractions as a string for arugment
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

function findGcd(numerator, denominator) {
  if (denominator === 0) {
    return numerator;
  }
  return findGcd(denominator, numerator % denominator);
}

function simplifyFraction(fraction) {
  let parsedFraction = parseFraction(fraction);
  let numerator = parsedFraction[0];
  let denominator = parsedFraction[1];

  let gcd = findGcd(numerator, denominator);

  numerator = numerator / gcd;
  denominator = denominator / gcd;

  if (numerator === 0) {
    return "0";
  }
  if (denominator === 1) {
    return `${numerator}`;
  }
  if (denominator < 0) {
    return `-${numerator}/${denominator * -1}`;
  }
  return `${numerator}/${denominator}`;
}

function convertToMixedNumber(simplifiedFraction) {
  let parsedFraction = parseFraction(simplifiedFraction);
  let numerator = parsedFraction[0];
  let denominator = parsedFraction[1];

  if (!denominator) {
    return `${numerator}`;
  }
  if (numerator < 0 && Math.abs(numerator) > denominator) {
    let absoluteNumerator = Math.abs(numerator);
    let integer = Math.floor(absoluteNumerator / denominator);
    let newNumerator = absoluteNumerator - integer * denominator;
    return `-${integer}_${newNumerator}/${denominator}`;
  }
  if (numerator < denominator && Math.abs(numerator) < denominator) {
    return `${numerator}/${denominator}`;
  }
  if (numerator >= denominator) {
    let integer = Math.floor(numerator / denominator);
    let newNumerator = numerator - integer * denominator;
    if (newNumerator === 0) {
      return `${integer}`;
    }
    return `${integer}_${newNumerator}/${denominator}`;
  }
}

module.exports = {
  multiplyFractions,
  parseFraction,
  divideFractions,
  getReciprocalFractions,
  addFractions,
  subtractFractions,
  convertToImproperFraction,
  findGcd,
  simplifyFraction,
  convertToMixedNumber,
  fractionCalculator,
};

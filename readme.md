## Coding Challenge:

Write a command-line program in the language of your choice that will take operations on fractions as an input and produce a fractional result.
Legal operators shall be *, /, +, - (multiply, divide, add, subtract)
Operands and operators shall be separated by one or more spaces
Mixed numbers will be represented by whole_numerator/denominator. e.g. "3_1/4"
Improper fractions and whole numbers are also allowed as operands

Example run:

? 1/2 * 3_3/4 = 1_7/8

?2_3/8 + 9/8 = 3_1/2

## Assumptions

1. Argument is a string of 'operand, operator, and operand' in this order seperated by one or more spaces.
2. Operands could be whole numbers, mixed numbers, or fractions.
3. Return value is a mixed number or simplified fraction.

## How to setup
1. git clone https://github.com/atphung21/oneLoginCodingChallenge.git
2. cd oneLoginCodingChallenge
3. npm install
4. npm test -> to see a test results

# How to run on command line
1. Npm install (if haven't done so)
2. npm run calculate 'argument' I.E. npm run calculate "1/2 * 3_3/4"

## Running tests
* To run the tests run `npm t` on the project root.
* For code coverage run `npm run test:cov` , coverage files will be in the `coverage` folder.

<img width="563" alt="testCoverage" src="https://user-images.githubusercontent.com/63481565/165283895-98ffd3c4-3197-4ec9-96af-f5216fb1f911.png">


## Libraries/Tools used
* Uses Jest for testing.
* run-func for command line.

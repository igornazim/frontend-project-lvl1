import { engine, getRandomIntInclusive } from '../index.js';

const rules = 'What is the result of the expression?';
const operators = ['+', '-', '*'];
const calculation = (operator, firstNumber, secondNumber) => {
  if (operator === '+') {
    return firstNumber + secondNumber;
  }
  if (operator === '-') {
    return firstNumber - secondNumber;
  } return firstNumber * secondNumber;
};

const calcGame = () => {
  const firstNumber = getRandomIntInclusive(1, 100);
  const secondNumber = getRandomIntInclusive(1, 100);
  const operator = operators[getRandomIntInclusive(0, 2)];
  const value = `${firstNumber} ${operator} ${secondNumber}`;
  const expectedAnswer = String(calculation(operator, firstNumber, secondNumber));
  return [expectedAnswer, value];
};

const brainCalc = () => engine(rules, calcGame);
export default brainCalc;

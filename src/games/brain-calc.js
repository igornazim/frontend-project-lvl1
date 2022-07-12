import engine from '../index.js';
import getRandomIntInclusive from '../utils.js';

const rules = 'What is the result of the expression?';
const operators = ['+', '-', '*'];
const calculation = (operator, firstNumber, secondNumber) => {
  switch (operator) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    default: return firstNumber * secondNumber;
  }
};

const calcGameRound = () => {
  const firstNumber = getRandomIntInclusive(1, 100);
  const secondNumber = getRandomIntInclusive(1, 100);
  const operator = operators[getRandomIntInclusive(0, operators.length - 1)];
  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const expectedAnswer = String(calculation(operator, firstNumber, secondNumber));
  return [expectedAnswer, question];
};

const runBrainCalc = () => engine(rules, calcGameRound);
export default runBrainCalc;

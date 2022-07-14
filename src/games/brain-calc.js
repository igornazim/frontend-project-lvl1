import playGame from '../index.js';
import getRandom from '../utils.js';

const gameRule = 'What is the result of the expression?';
const operators = ['+', '-', '*'];
const calculate = (operator, firstNumber, secondNumber) => {
  switch (operator) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      throw new Error(`Unknown order state: '${operator}'!`);
  }
};

const generateRound = () => {
  const firstNumber = getRandom();
  const secondNumber = getRandom();
  const operator = operators[getRandom(0, operators.length - 1)];
  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const expectedAnswer = String(calculate(operator, firstNumber, secondNumber));
  return [expectedAnswer, question];
};

const runBrainCalc = () => playGame(gameRule, generateRound);
export default runBrainCalc;

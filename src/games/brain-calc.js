import readlineSync from 'readline-sync';
import { Random } from 'random-js';
import engine from '../index.js';

const summ = (number1, number2) => number1 + number2;
const subtr = (number1, number2) => number1 - number2;
const multiply = (number1, number2) => number1 * number2;
const rules = 'What is the result of the expression?';
const simbols = ['+', '-', '*'];

const calculation = () => {
  const random = new Random();
  const value1 = random.integer(1, 100);
  const value2 = random.integer(1, 100);
  const simbol = random.pick(simbols);
  console.log(`Question: ${value1} ${simbol} ${value2}`);
  const check = (operator) => {
    if (operator === '+') {
      return summ(value1, value2);
    }
    if (operator === '-') {
      return subtr(value1, value2);
    } return multiply(value1, value2);
  };
  const expectedAnswer = String(check(simbol));
  const userAnswer = readlineSync.question('Your answer: ');
  return [expectedAnswer, userAnswer];
};

const calcGame = () => engine(rules, calculation);
export default calcGame;

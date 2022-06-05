import readlineSync from 'readline-sync';
import { Random } from 'random-js';

const summ = (number1, number2) => number1 + number2;
const subtr = (number1, number2) => number1 - number2;
const multiply = (number1, number2) => number1 * number2;
const simbols = ['+', '-', '*'];
const rounds = 3;

const calcGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What is the result of the expression?');
  for (let i = 0; i < rounds; i += 1) {
    const random = new Random();
    const value1 = random.integer(1, 100);
    const value2 = random.integer(1, 100);
    const simbol = random.pick(simbols);
    console.log(`Question: ${value1}${simbol}${value2}`);
    const check = (operator) => {
      if (operator === '+') {
        return summ(value1, value2);
      }
      if (operator === '-') {
        return subtr(value1, value2);
      } return multiply(value1, value2);
    };
    const expectedAnswer = check(simbol);
    const userAnswer = readlineSync.question('Your answer: ');
    if (Number(userAnswer) !== expectedAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${expectedAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}`);
};

export default calcGame;

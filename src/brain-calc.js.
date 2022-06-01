import readlineSync from 'readline-sync';
import { Random } from 'random-js';

const summ = (number1, number2) => number1 + number2;
const subtraction = (number1, number2) => number1 - number2;
const multiplication = (number1, number2) => number1 * number2;
const rounds = 3;

const calcGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < rounds; i += 1) {
    const random = new Random();
    const value1 = random.integer(1, 100);
    const value2 = random.integer(1, 100);
    console.log(`${value1} + ${value2}`);
    const expectedAnswer = summ(value1, value2);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== expectedAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${expectedAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}`);
};

export default calcGame;

import readlineSync from 'readline-sync';
import { Random } from 'random-js';

const isEven = (number) => number % 2 === 0;
const rounds = 3;

const isEvenGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < rounds; i += 1) {
    const random = new Random();
    const value = random.integer(1, 100);
    console.log(`Question: ${value}`);
    const expectedAnswer = isEven(value) ? 'yes' : 'no';
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== expectedAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${expectedAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default isEvenGame;

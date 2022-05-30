import readlineSync from 'readline-sync';
import { Random } from "random-js";

const random = new Random();
const value = random.integer(1, 100);
const isEven = number => number % 2 === 0;
const rounds = 3;

const isEvenGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const getAnswer = () => {
    const expectedAnswer = isEven(value) ? 'yes' : 'no';
    const userAnswer = readlineSync.question(value);
    if (userAnswer === expectedAnswer) {
      console.log(`Your answer: ${userAnswer}`);
      console.log('Correct!');
      i += 1;
    } else console.log('Wrong answer!');
    console.log(`'yes' is wrong answer ;(. Correct answer was 'no'. Let's try again, ${userName}!`);
  };
  let i = 0;
  while (i < rounds) {
   getAnswer();
  }
  console.log(`Congratulations, ${userName}`);
};

export default isEvenGame;

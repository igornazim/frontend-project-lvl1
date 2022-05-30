import readlineSync from 'readline-sync';
import { Random } from "random-js";
const random = new Random();
const value = random.integer(1, 100);
const isEven = number => number % 2 === 0;

const isEvenGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const expectedAnswer = isEven(value) ? 'yes' : 'no';
  const userUnswer = readlineSync.question(value);
  if (userUnswer === expectedAnswer) {
    console.log('Correct!')
  }
  else console.log("Wrong answer!")
};

export default isEvenGame;

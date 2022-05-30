import readlineSync from 'readline-sync';
import { Random } from "random-js";
const random = new Random();
const value = random.integer(1, 100);
const inctruction = 'Answer "yes" if the number is even, otherwise answer 
"no".';
const isEven = (value % 2 === 0) ? 'yes' : 'no';

const isEvenGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(inctruction);
  const userUnswer = readlineSync.question(value);
  if (userUnswer === isEven(value)) {
    console.log('Correct!')
    else console.log("Wrong answer!")
  }
};

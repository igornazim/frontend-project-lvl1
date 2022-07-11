import readlineSync from 'readline-sync';
import { Random } from 'random-js';
import engine from '../index.js';

const isEven = (number) => number % 2 === 0;
const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEvenGame = () => {
  const random = new Random();
  const value = random.integer(1, 100);
  console.log(`Question: ${value}`);
  const expectedAnswer = isEven(value) ? 'yes' : 'no';
  const userAnswer = readlineSync.question('Your answer: ');
  return [expectedAnswer, userAnswer];
};
const evenGame = () => engine(rules, isEvenGame);
export default evenGame;

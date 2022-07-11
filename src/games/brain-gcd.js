import readlineSync from 'readline-sync';
import { Random } from 'random-js';
import engine from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';
const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

const gcdInnerFoo = () => {
  const random = new Random();
  const value1 = random.integer(1, 100);
  const value2 = random.integer(1, 100);
  console.log(`Question: ${value1} ${value2}`);
  const expectedAnswer = String(gcd(value1, value2));
  const userAnswer = readlineSync.question('Your answer: ');
  return [expectedAnswer, userAnswer];
};

const gcdGame = () => engine(rules, gcdInnerFoo);
export default gcdGame;

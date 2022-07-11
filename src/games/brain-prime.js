import readlineSync from 'readline-sync';
import { Random } from 'random-js';
import engine from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const primeInnerFoo = () => {
  const random = new Random();
  const value = random.integer(1, 100);
  console.log(`Question: ${value}`);
  const expectedAnswer = isPrime(value) ? 'yes' : 'no';
  const userAnswer = readlineSync.question('Your answer: ');
  return [expectedAnswer, userAnswer];
};

const primeGame = () => engine(rules, primeInnerFoo);
export default primeGame;

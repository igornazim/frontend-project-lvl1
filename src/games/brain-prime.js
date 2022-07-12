import { engine, getRandomIntInclusive } from '../index.js';

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

const primeGame = () => {
  const value = getRandomIntInclusive(1, 100);
  const expectedAnswer = isPrime(value) ? 'yes' : 'no';
  return [expectedAnswer, value];
};

const brainPrime = () => engine(rules, primeGame);
export default brainPrime;

import engine from '../index.js';
import getRandomIntInclusive from '../utils.js';

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

const primeGameRound = () => {
  const question = getRandomIntInclusive(1, 100);
  const expectedAnswer = isPrime(question) ? 'yes' : 'no';
  return [expectedAnswer, question];
};

const runBrainPrime = () => engine(rules, primeGameRound);
export default runBrainPrime;

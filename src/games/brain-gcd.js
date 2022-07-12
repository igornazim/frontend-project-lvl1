import engine from '../index.js';
import getRandomIntInclusive from '../utils.js';

const rules = 'Find the greatest common divisor of given numbers.';
const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

const gcdGameRound = () => {
  const firstNumber = getRandomIntInclusive(1, 100);
  const secondNumber = getRandomIntInclusive(1, 100);
  const question = `${firstNumber} ${secondNumber}`;
  const expectedAnswer = String(gcd(firstNumber, secondNumber));
  return [expectedAnswer, question];
};

const runBrainGcd = () => engine(rules, gcdGameRound);
export default runBrainGcd;

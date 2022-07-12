import { engine, getRandomIntInclusive } from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';
const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

const gcdGame = () => {
  const value1 = getRandomIntInclusive(1, 100);
  const value2 = getRandomIntInclusive(1, 100);
  const value = `${value1} ${value2}`;
  const expectedAnswer = String(gcd(value1, value2));
  return [expectedAnswer, value];
};

const brainGcd = () => engine(rules, gcdGame);
export default brainGcd;

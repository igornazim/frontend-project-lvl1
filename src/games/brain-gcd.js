import playGame from '../index.js';
import getRandom from '../utils.js';

const gameRule = 'Find the greatest common divisor of given numbers.';
const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

const generateRound = () => {
  const firstNumber = getRandom();
  const secondNumber = getRandom();
  const question = `${firstNumber} ${secondNumber}`;
  const expectedAnswer = String(gcd(firstNumber, secondNumber));
  return [expectedAnswer, question];
};

const runBrainGcd = () => playGame(gameRule, generateRound);
export default runBrainGcd;

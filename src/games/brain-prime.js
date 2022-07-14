import playGame from '../index.js';
import getRandom from '../utils.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
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

const generateRound = () => {
  const question = getRandom();
  const expectedAnswer = isPrime(question) ? 'yes' : 'no';
  return [expectedAnswer, question];
};

const runBrainPrime = () => playGame(gameRule, generateRound);
export default runBrainPrime;

import engine from '../index.js';
import getRandomIntInclusive from '../utils.js';

const isEven = (number) => number % 2 === 0;
const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateRound = () => {
  const value = getRandomIntInclusive(1, 100);
  const expectedAnswer = isEven(value) ? 'yes' : 'no';
  return [expectedAnswer, value];
};
const runBrainEven = () => engine(rules, generateRound);
export default runBrainEven;

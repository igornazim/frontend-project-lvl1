import { engine, getRandomIntInclusive } from '../index.js';

const isEven = (number) => number % 2 === 0;
const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEvenGame = () => {
  const value = getRandomIntInclusive(1, 100);
  const expectedAnswer = isEven(value) ? 'yes' : 'no';
  return [expectedAnswer, value];
};
const brainEven = () => engine(rules, isEvenGame);
export default brainEven;

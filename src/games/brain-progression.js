import { engine, getRandomIntInclusive } from '../index.js';

const rules = 'What number is missing in the progression?';
const makeProgression = (startNumber, step, changeIndex) => {
  const progressionArray = [];
  progressionArray.push(startNumber);
  let stepT = startNumber;
  for (let j = 0; j < 9; j += 1) {
    stepT += step;
    progressionArray.push(stepT);
  }
  const replaceNumber = progressionArray[changeIndex];
  const value = progressionArray.join(' ')
    .replace(replaceNumber, '..');
  return [value, replaceNumber];
};

const progressionGame = () => {
  const progressionStart = getRandomIntInclusive(1, 100);
  const progressionStep = getRandomIntInclusive(1, 5);
  const replaceIndex = getRandomIntInclusive(2, 9);
  const [value, replaceNumber] = makeProgression(progressionStart, progressionStep, replaceIndex);
  const expectedAnswer = String(replaceNumber);
  return [expectedAnswer, value];
};

const brainProgression = () => engine(rules, progressionGame);
export default brainProgression;

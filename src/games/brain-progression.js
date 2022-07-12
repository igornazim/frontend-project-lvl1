import engine from '../index.js';
import getRandomIntInclusive from '../utils.js';

const rules = 'What number is missing in the progression?';
const makeProgression = (startNumber, step, changeIndex) => {
  const progressionArray = [];
  progressionArray.push(startNumber);
  let progressionStep = startNumber;
  for (let j = 0; j < 9; j += 1) {
    progressionStep += step;
    progressionArray.push(progressionStep);
  }
  const replaceNumber = progressionArray[changeIndex];
  const question = progressionArray.join(' ')
    .replace(replaceNumber, '..');
  return question;
};

const progressionGameRound = () => {
  const progressionStart = getRandomIntInclusive(1, 100);
  const progressionStep = getRandomIntInclusive(1, 5);
  const replaceIndex = getRandomIntInclusive(2, 9);
  const question = makeProgression(progressionStart, progressionStep, replaceIndex);
  const replaceNumber = Number(question.split(' ')[replaceIndex - 1]) + progressionStep;
  const expectedAnswer = String(replaceNumber);
  return [expectedAnswer, question];
};

const runBrainProgression = () => engine(rules, progressionGameRound);
export default runBrainProgression;

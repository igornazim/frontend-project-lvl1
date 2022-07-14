import playGame from '../index.js';
import getRandom from '../utils.js';

const gameRule = 'What number is missing in the progression?';
const makeProgression = (startNumber, step, changeIndex) => {
  const progressionLength = 10;
  let question = '';
  for (let i = 0; i < progressionLength; i += 1) {
    question = (i === changeIndex) ? `${question} ..` : `${question} ${startNumber + (i * step)}`;
  }
  return question;
};

const generateRound = () => {
  const progressionStart = getRandom();
  const progressionStep = getRandom(2, 5);
  const replaceIndex = getRandom(1, 9);
  const question = makeProgression(progressionStart, progressionStep, replaceIndex);
  const expectedAnswer = String(progressionStart + (progressionStep * replaceIndex));
  return [expectedAnswer, question];
};

const runBrainProgression = () => playGame(gameRule, generateRound);
export default runBrainProgression;

import playGame from '../index.js';
import getRandom from '../utils.js';

const gameRule = 'What number is missing in the progression?';
const makeProgression = (startNumber, step, changeIndex) => {
  let progression = '';
  for (let i = 0; i < 9; i += 1) {
    progression = (i === changeIndex) ? `${progression} ..` : `${progression} ${startNumber + (i * step)}`;
  }
  return progression;
};

const generateRound = () => {
  const progressionStart = getRandom(1, 100);
  const progressionStep = getRandom(1, 5);
  const replaceIndex = getRandom(2, 9);
  const question = makeProgression(progressionStart, progressionStep, replaceIndex);
  const expectedAnswer = String(progressionStart + (progressionStep * replaceIndex));
  return [expectedAnswer, question];
};

const runBrainProgression = () => playGame(gameRule, generateRound);
export default runBrainProgression;

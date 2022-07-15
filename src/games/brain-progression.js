import playGame from '../index.js';
import getRandom from '../utils.js';

const gameRule = 'What number is missing in the progression?';
const makeProgression = (startNumber, step, changeIndex) => {
  const progressionLength = 10;
  let progression = '';
  for (let i = 0; i < progressionLength; i += 1) {
    progression = (i === changeIndex) ? `${progression} ..` : `${progression} ${startNumber + (i * step)}`;
  }
  return progression.trim();
};

const generateRound = () => {
  const progressionStart = getRandom();
  const progressionStep = getRandom(1, 10);
  const replaceIndex = getRandom(1, 9);
  const question = makeProgression(progressionStart, progressionStep, replaceIndex);
  const expectedAnswer = String(progressionStart + (progressionStep * replaceIndex));
  return [expectedAnswer, question];
};

const runBrainProgression = () => playGame(gameRule, generateRound);
export default runBrainProgression;

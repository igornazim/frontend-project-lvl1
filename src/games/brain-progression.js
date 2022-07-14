import playGame from '../index.js';
import getRandom from '../utils.js';

const gameRule = 'What number is missing in the progression?';
const makeProgression = (startNumber, step, changeIndex) => {
  const progressionLength = 10;
  let progression = '';
  for (let i = 0; i < progressionLength; i += 1) {
    if (i === changeIndex) {
      progression = `${progression} ..`;
    } else {
      progression = `${progression} ${startNumber + step * i}`;
    }
  }
  return progression;
};

const generateRound = () => {
  const progressionStart = getRandom(1, 100);
  const progressionStep = getRandom(1, 10);
  const replaceIndex = getRandom(1, 9);
  const question = makeProgression(progressionStart, progressionStep, replaceIndex);
  const expectedAnswer = String(progressionStart + (progressionStep * replaceIndex));
  return [expectedAnswer, question];
};

const runBrainProgression = () => playGame(gameRule, generateRound);
export default runBrainProgression;

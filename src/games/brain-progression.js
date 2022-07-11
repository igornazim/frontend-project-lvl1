import readlineSync from 'readline-sync';
import { Random } from 'random-js';
import engine from '../index.js';

const rules = 'What number is missing in the progression?';

const progressionInnerFoo = () => {
  const random = new Random();
  const progressionStart = random.integer(1, 100);
  const progressionStep = random.integer(1, 5);
  const progressionReplaceIndex = random.integer(2, 9);
  let replaceNumber = 0;
  const progressionMaker = (startNumber) => {
    const progressionArray = [];
    progressionArray.push(startNumber);
    let step = progressionStart;
    for (let j = 0; j < 9; j += 1) {
      step += progressionStep;
      progressionArray.push(step);
    }
    replaceNumber = progressionArray[progressionReplaceIndex];
    const progressionString = progressionArray.join(' ');
    return progressionString.replace(replaceNumber, '..');
  };
  const resultProgression = progressionMaker(progressionStart);
  const expectedAnswer = String(replaceNumber);
  console.log(`Question: ${resultProgression}`);
  const userAnswer = readlineSync.question('Your answer: ');
  return [expectedAnswer, userAnswer];
};

const progressionGame = () => engine(rules, progressionInnerFoo);
export default progressionGame;

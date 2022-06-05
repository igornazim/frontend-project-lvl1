import readlineSync from 'readline-sync';
import { Random } from 'random-js';

const rounds = 3;

const progressionGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What number is missing in the progression?');
  for (let i = 0; i < rounds; i += 1) {
    const random = new Random();
    const progressionStart = random.integer(1, 100);
    const progressionStep = random.integer(1, 5);
    const progressionReplaceIndex = random.integer(2, 9);
    let replaceNumber = 0;
    const progressionMaker = (startNumber) => {
      const progressionArray = [];
      progressionArray.push(startNumber);
      let kek = progressionStart;
      for (let j = 0; j < 9; j += 1) {
        kek += progressionStep;
        progressionArray.push(kek);
      }
      replaceNumber = progressionArray[progressionReplaceIndex];
      const progressionString = progressionArray.join(' ');
      return progressionString.replace(replaceNumber, '..');
    };
    const resultProgression = progressionMaker(progressionStart);
    const expectedAnswer = String(replaceNumber);
    console.log(`Question: ${resultProgression}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== expectedAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${expectedAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}`);
};

export default progressionGame;

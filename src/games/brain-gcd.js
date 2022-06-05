import readlineSync from 'readline-sync';
import { Random } from 'random-js';

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

const rounds = 3;

const gcdGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < rounds; i += 1) {
    const random = new Random();
    const value1 = random.integer(1, 100);
    const value2 = random.integer(1, 100);
    console.log(`Question: ${value1} ${value2}`);
    const expectedAnswer = gcd(value1, value2);
    const userAnswer = readlineSync.question('Your answer: ');
    if (Number(userAnswer) !== expectedAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${expectedAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}`);
};

export default gcdGame;

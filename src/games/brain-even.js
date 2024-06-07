import { runGame, getRandomNumOne } from '../index.js';

const isEven = (num) => num % 2 === 0;

const getRound = () => {
  const randomNum = getRandomNumOne();
  const evenAnswer = isEven(randomNum) ? 'yes' : 'no';
  const question = `${randomNum}`;
  return [question, evenAnswer];
};

const evenGame = () => {
  const options = 'Answer "yes" if the number is even, otherwise answer "no".';
  runGame(options, getRound);
};

export default evenGame;

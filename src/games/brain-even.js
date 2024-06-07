import { runGame, getRandomNumOne } from '../index.js';

const getRound = () => {
  const randomNum = getRandomNumOne();
  const evenNum = randomNum % 2 === 0;
  const evenAnswer = evenNum ? 'yes' : 'no';
  const question = `${randomNum}`;
  return [question, evenAnswer];
};

const evenGame = () => {
  const opsions = 'Answer "yes" if the number is even, otherwise answer "no".';
  runGame(opsions, getRound);
};

export default evenGame;
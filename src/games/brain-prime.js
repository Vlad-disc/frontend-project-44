import { runGame, getRandomNumOne } from '../index.js';

const getRound = () => {
  const randomNum = getRandomNumOne();
  const isPrime = () => {
    if (randomNum < 2) {
      return 'no';
    }
    const sqrtNum = Math.floor(Math.sqrt(randomNum));
    for (let i = 2; i <= sqrtNum; i += 1) {
      if (randomNum % i === 0) {
        return 'no';
      }
    }
    return 'yes';
  };
  const primeAnswer = isPrime();
  const question = `${randomNum}`;
  return [question, primeAnswer];
};

const primeGame = () => {
  const opsions = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  runGame(opsions, getRound);
};

export default primeGame;

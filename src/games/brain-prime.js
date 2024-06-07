import { runGame, getRandomNumOne } from '../index.js';

const isPrime = (num) => {
  if (num < 2) {
    return 'no';
  }
  const sqrtNum = Math.floor(Math.sqrt(num));
  for (let i = 2; i <= sqrtNum; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const getRound = () => {
  const randomNum = getRandomNumOne();
  const primeAnswer = isPrime(randomNum);
  const question = `${randomNum}`;
  return [question, primeAnswer];
};

const primeGame = () => {
  const options = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  runGame(options, getRound);
};

export default primeGame;

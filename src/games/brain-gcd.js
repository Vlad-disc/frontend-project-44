import { runGame, getRandomNumOne, getRandomNumTwo } from '../index.js';

const getRound = () => {
  let numOne = getRandomNumOne();
  let numTwo = getRandomNumTwo();
  const getAnswer = (numOne, numTwo) => {
    while (numOne !== numTwo) {
      if (numOne > numTwo) {
        numOne -= numTwo;
      } else {
        numTwo -= numOne;
      }
    }
    return numOne;
  };
  const gcdAnswer = getAnswer(numOne, numTwo);
  const question = `${numOne} ${numTwo}`;
  return [question, gcdAnswer];
};

const gcdGame = () => {
  const opsions = 'Find the greatest common divisor of given numbers.';
  runGame(opsions, getRound);
};

export default gcdGame;
import { runGame, getRandomNumOne, getRandomNumTwo } from '../index.js';

const getRound = () => {
  const numOne = getRandomNumOne();
  const numTwo = getRandomNumTwo();
  const getAnswer = (firstNum, secondNum) => {
    let a = firstNum;
    let b = secondNum;
    while (a !== b) {
      if (a > b) {
        a -= b;
      } else {
        b -= a;
      }
    }
    return a;
  };
  const gcdAnswer = getAnswer(numOne, numTwo);
  const question = `${numOne} ${numTwo}`;
  return [question, gcdAnswer];
};

const gcdGame = () => {
  const options = 'Find the greatest common divisor of given numbers.';
  runGame(options, getRound);
};

export default gcdGame;
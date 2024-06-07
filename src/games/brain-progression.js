import { runGame, getRandomNumOne, getRandomNumTwo } from '../index.js';

const getRound = () => {
  const randomNumArray = getRandomNumOne();
  const stepsArray = getRandomNumTwo();
  const lengthArray = 10;
  const progressionArray = [];
  for (let i = 0; i < stepsArray * lengthArray; i += stepsArray) {
    progressionArray.push(randomNumArray + i);
  }
  const randomNum = Math.floor(Math.random() * progressionArray.length);
  const correctAnswer = progressionArray[randomNum];
  progressionArray[randomNum] = '..';
  const question = progressionArray.join(' ');
  return [question, correctAnswer];
};

const progressionGame = () => {
  const options = 'What number is missing in the progression?';
  runGame(options, getRound);
};

export default progressionGame;

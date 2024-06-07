import { runGame, getRandomNumOne, getRandomNumTwo } from '../index.js';

const getProgression = (num, step, length) => {
  const progressionArray = [];
  for (let i = 0; i < step * length; i += step) {
    progressionArray.push(num + i);
  }
  return progressionArray;
}

const getRound = () => {
  const numArray = getRandomNumOne();
  const stepsArray = getRandomNumTwo();
  const lengthArray = 10;
  const randomNum = Math.floor(Math.random() * getProgression.length);
  const progression = getProgression(numArray, stepsArray, lengthArray);
  const correctAnswer = progression[randomNum];
  progression[randomNum] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

const progressionGame = () => {
  const options = 'What number is missing in the progression?';
  runGame(options, getRound);
};

export default progressionGame;

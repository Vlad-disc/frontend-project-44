import {
  runGame, getRandomNumOne, getRandomNumTwo, getMathSymbols,
} from '../index.js';

const calculationSymbol = (symbol, num1, num2) => {
  if (symbol === '+') {
    return num1 + num2;
  } if (symbol === '-') {
    return num1 - num2;
  } if (symbol === '*') {
    return num1 * num2;
  }
  return null;
};

const getRound = () => {
  const numOne = getRandomNumOne();
  const numTwo = getRandomNumTwo();
  const mathSymbols = getMathSymbols();
  const calcAnswer = calculationSymbol(mathSymbols, numOne, numTwo);
  const question = `${numOne} ${mathSymbols} ${numTwo}`;
  return [question, calcAnswer];
};

const calcGame = () => {
  const options = 'What is the result of the expression?';
  runGame(options, getRound);
};

export default calcGame;

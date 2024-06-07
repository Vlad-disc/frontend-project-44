import { runGame, getRandomNumOne, getRandomNumTwo, getMathSymbols } from '../index.js';

const getRound = () => {
  const  numOne = getRandomNumOne();
  const numTwo = getRandomNumTwo();
  const mathSymbols = getMathSymbols();
  const calculationSymbol = () => {
    if (mathSymbols === '+') {
      return numOne + numTwo;
    } if (mathSymbols === '-') {
      return numOne - numTwo;
    } if (mathSymbols === '*') {
      return numOne * numTwo;
    }
  };
  const calcAnswer = calculationSymbol();
  const question = `${numOne} ${mathSymbols} ${numTwo}`;
  return [question, calcAnswer];
};

const calcGame = () => {
  const opsions = 'What is the result of the expression?';
  runGame(opsions, getRound);
};

export default calcGame;
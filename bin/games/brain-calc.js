import readlineSync from 'readline-sync';
import {
  greetingsUser, getRandomNumOne, getRandomNumTwo, getMathSymbols,
} from '../../src/index.js';

const userName = greetingsUser();
let answerPoint = 0;
let functionRep = 0;

console.log('What is the result of the expression?');

const calcQuestion = () => {
  if (functionRep < 3) {
    const randomNumOne = getRandomNumOne();
    const randomNumTwo = getRandomNumTwo();
    const randomMathSymbol = getMathSymbols();

    const calculationSymbol = () => {
      if (randomMathSymbol === '+') {
        return randomNumOne + randomNumTwo;
      } if (randomMathSymbol === '-') {
        return randomNumOne - randomNumTwo;
      } if (randomMathSymbol === '*') {
        return randomNumOne * randomNumTwo;
      }
    };

    const calcAnswer = calculationSymbol();

    console.log(`Question: ${randomNumOne} ${randomMathSymbol} ${randomNumTwo}`);

    const answerUser = readlineSync.question('Your answer: ');

    if (Number(answerUser) === calcAnswer) {
      console.log('Correct!');
      answerPoint += 1;
    } else if (Number(answerUser) !== calcAnswer) {
      return console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${calcAnswer}'. Let's try again, ${userName}!`);
    }

    if (answerPoint === 3) {
      console.log(`Congratulations, ${userName}!`);
    } else {
      functionRep += 1;
      calcQuestion();
    }
  }
};

calcQuestion();

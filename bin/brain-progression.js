#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { greetingsUser, getRandomNumOne, getRandomNumTwo } from '../src/index.js';

const userName = greetingsUser();
let answerPoint = 0;
let functionRep = 0;

console.log('What number is missing in the progression?');

const progressionQuestion = () => {
  if (functionRep < 3) {
    
    const randomNumArray = getRandomNumOne();
    const stepsArray = getRandomNumTwo();

    const progressionArray = [];
    const lengthArray = 10;

    for (let i = 0; i < stepsArray * lengthArray; i += stepsArray) {
        progressionArray.push(randomNumArray + i);
    }

    const randomNum = Math.floor(Math.random() * progressionArray.length);
    const correctAnswer = progressionArray[randomNum];
    
    progressionArray[randomNum] = '..'

    const resultArray = progressionArray.join(' ');


    console.log(`Question: ${resultArray}`);

    const answerUser = readlineSync.question('Your answer: ');

    if (Number(answerUser) === correctAnswer) {
      console.log('Correct!');
      answerPoint += 1;
    } else if (Number(answerUser) !== correctAnswer) {
      return console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${userName}!`);
    }

    if (answerPoint === 3) {
      console.log(`Congratulations, ${userName}!`);
    } else {
      functionRep += 1;
      progressionQuestion();
    }
  }
};

progressionQuestion();

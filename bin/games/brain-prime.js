#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { greetingsUser, getRandomNumOne } from '../../src/index.js';

const userName = greetingsUser();
let answerPoint = 0;
let functionRep = 0;

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const primeQuestion = () => {
  if (functionRep < 3) {
    const randomNum = getRandomNumOne();

    const isPrime = () => {
        if (randomNum < 2) {
            return 'no'
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

    console.log(`Question: ${randomNum}`);

    const answerUser = readlineSync.question('Your answer: ');
    if (answerUser === primeAnswer) {
        console.log('Correct!');
        answerPoint += 1;
    } else if (answerUser !== 'yes' || answerUser !== 'no') {
        return console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${primeAnswer}'. Let's try again, ${userName}!`);
    }

    if (answerPoint === 3) {
      console.log(`Congratulations, ${userName}!`);
    } else {
      functionRep += 1;
      primeQuestion();
    }
  }
};

primeQuestion();

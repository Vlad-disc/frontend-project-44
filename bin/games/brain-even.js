import readlineSync from 'readline-sync';
import { greetingsUser, getRandomNumOne } from '../../src/index.js'

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const userName = greetingsUser();
let answerPoint = 0;
let functionRep = 0;

const evenQuestion = () => {
    if (functionRep < 3) {
        
        const randomNum = getRandomNumOne();
        const evenNum = randomNum % 2 === 0;
        const evenAnswer = evenNum ? 'yes' : 'no';

        console.log(`Question: ${randomNum}`);

        const answerUser = readlineSync.question('Your answer: ');
        if (answerUser === evenAnswer) {
            answerPoint += 1;
        } else if (answerUser !== 'yes' || answerUser !== 'no') {
            return console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${evenAnswer}'. Let's try again, ${userName}!`); 
        }

        if (answerPoint === 3) {
            console.log(`Congratulations, ${userName}!`);
        } else {
            functionRep += 1;
            evenQuestion();
        }
    } 
};

evenQuestion();
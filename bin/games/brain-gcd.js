import readlineSync from 'readline-sync';
import { greetingsUser, getRandomNumOne, getRandomNumTwo } from '../../src/index.js'

console.log('Find the greatest common divisor of given numbers.');


const userName = greetingsUser();
let answerPoint = 0;
let functionRep = 0;

const gcdQuestion = () => {
    if (functionRep < 3) {

        let numOne = getRandomNumOne();
        let numTwo = getRandomNumTwo();

        const gcdAnswer = (numOne, numTwo) => {
            while (numOne != numTwo) {
                if (numOne > numTwo) {
                    numOne = numOne - numTwo;
                } else {
                    numTwo = numTwo - numOne;
                }
            }
            return numOne;
        }

        const gcdCorrectAnswer = gcdAnswer(numOne, numTwo);


        console.log(`Question: ${numOne} ${numTwo}`);

        const answerUser = readlineSync.question('Your answer: ');

        if (Number(answerUser) === gcdCorrectAnswer) {
            console.log('Correct!');
            answerPoint += 1;
        } else if (Number(answerUser) !== gcdCorrectAnswer) {
            return console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${gcdCorrectAnswer}'. Let's try again, ${userName}!`); 
        }


        if (answerPoint === 3) {
            console.log(`Congratulations, ${userName}!`);
        } else {
            functionRep += 1;
            gcdQuestion();
        }
    } 
};

gcdQuestion();
import readlineSync from 'readline-sync';
import { greetingsUser, getRandomNumOne, getRandomNumTwo, getMathSymbols } from '../../src/index.js'

console.log('What is the result of the expression?');


const userName = greetingsUser();
let answerPoint = 0;
let functionRep = 0;

const calcQuestion = () => {
    if (functionRep < 3) {

        const calculationSymbol = () => {
            if (randomMathSymbol === '+') {
                return randomNumOne + randomNumTwo;
            } else if (randomMathSymbol === '-') {
                return randomNumOne - randomNumTwo;
            } else if (randomMathSymbol === '*') {
                return randomNumOne * randomNumTwo;
            }
        };

        const randomNumOne = getRandomNumOne();
        const randomNumTwo = getRandomNumTwo();
        const randomMathSymbol = getMathSymbols();
        const currectAnswer = calculationSymbol();


        console.log(`Question: ${randomNumOne} ${randomMathSymbol} ${randomNumTwo}`);

        const answerUser = readlineSync.question('Your answer: ');

        if (Number(answerUser) === currectAnswer) {
            console.log('Correct!');
            answerPoint += 1;
        } else if (Number(answerUser) !== currectAnswer) {
            return console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${currectAnswer}'. Let's try again, ${userName}!`); 
        }


        if (answerPoint === 3) {
            console.log(`Congratulations, ${userName}!`);
        } else {
            calcQuestion();
        }
    } 
};

calcQuestion();
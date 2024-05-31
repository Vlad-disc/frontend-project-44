import readlineSync from 'readline-sync';
import { greetingsUser } from '../../src/index.js'

console.log('Answer "yes" if the number is even, otherwise answer "no".');

// функция по нахождения четного числа
const maxNum = 20;
const userName = greetingsUser();
let answerPoint = 0;
let functionRep = 0;

const evenQuestion = () => {
    if (functionRep < 3) {
        
        //функция по нахождению случайного числа
        const getRandomNum = (maxNum) => Math.floor(Math.random() * (maxNum + 1));
        const randomNum = getRandomNum(maxNum);

        console.log(`Question: ${randomNum}`);
        const evenNumb = randomNum % 2 === 0;
        const notEvenNumb = randomNum % 2 !== 0;

        const answer = readlineSync.question('Your answer: ');
        if (answer === 'yes' && evenNumb) {
            console.log('Correct!');
            answerPoint += 1;
        } else if (answer === 'no' && notEvenNumb) {
            console.log('Correct!');
            answerPoint += 1;
        } else if (answer !== 'yes' || answer !== 'no') {
            return console.log(`'yes' is wrong answer ;(. Correct answer was 'no'. Let's try again, ${userName}!`); 
        }

        if (answerPoint === 3) {
            console.log(`Congratulations, ${userName}!`);
        } else {
            evenQuestion();
        }
    } 
};

evenQuestion();
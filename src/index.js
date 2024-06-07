import readlineSync from 'readline-sync';

const greetingsUser = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello ${name}!`);
  return name;
};

const runGame = (opsions, getRound) => {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello ${userName}!`);
    console.log(opsions);
    const answerPoint = 3;
    for (let i = 0; i < answerPoint; i += 1) {
        const [question, answerCalc] = getRound();
        console.log(`Question: ${question}`);
        const userAnswer = readlineSync.question('Your answer: ');
        if (userAnswer !== String(answerCalc)) {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answerCalc}.`);
            console.log(`Let's try again, ${userName}!`);
            return;
        }
        console.log('Correct!');
    }
  console.log(`Congratulations, ${userName}!`);
};


const maxNumOne = 20;
const maxNumTwo = 15;
const mathSymbols = ['+', '-', '*'];
const getRandomNumOne = () => Math.floor(Math.random() * maxNumOne) + 1;
const getRandomNumTwo = () => Math.floor(Math.random() * maxNumTwo) + 1;
const getMathSymbols = () => mathSymbols[(Math.floor(Math.random() * mathSymbols.length))];

export { greetingsUser, getRandomNumOne, getRandomNumTwo, getMathSymbols, runGame };
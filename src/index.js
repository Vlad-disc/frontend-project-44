import readlineSync from 'readline-sync';

//функция приветствия
const greetingsUser = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello ${name}!`);
    return name;
}

const maxNumOne = 15;
const maxNumTwo = 10;
const mathSymbols = ['+', '-', '*'];

const getRandomNumOne = () => Math.floor(Math.random() * (maxNumOne + 1));
const getRandomNumTwo = () => Math.floor(Math.random() * (maxNumTwo + 1));
const getMathSymbols = () => mathSymbols[(Math.floor(Math.random() * mathSymbols.length))];

export { greetingsUser, getRandomNumOne, getRandomNumTwo, getMathSymbols };
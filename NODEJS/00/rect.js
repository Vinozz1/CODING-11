const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let width;
let length;

rl.question('Enter the length of the rectangle: ', answerLength => {
    length = parseFloat(answerLength);
    rl.question('Enter the width of the rectngle: ', answerWidth => {
        width = parseFloat(answerWidth);
        const area = length * width;
        const perimater = 2 * (length + width);
        console.log(`The area of the rectangle is ${area}`);
        console.log(`The perimater of the rectangle is ${perimater}`);
        const val = Math.sqrt(4);
        console.log(val)
        rl.close();
    });
});
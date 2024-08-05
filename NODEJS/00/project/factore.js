const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let a;
let b;
let c;

rl.question('Enter the value of a: ', answerA => {
    a = parseFloat(answerA);
    rl.question('Enter value of b: ', answerB => {
        b = parseFloat(answerB);
        rl.question('Enter value of c: ', answerC => {
            c = parseFloat(answerC);
            const rootA = ( -b - Math.sqrt(b*b - 4 * a * c)) / 2;
            const rootB = ( -b + Math.sqrt(b*b - 4 * a * c)) / 2;        
            if ( a == 1 ){
                console.log(`The value of the root x^2${b}x${c} = ${rootA} n ${rootB }`);
            } else {
                console.log(`The value of the root ${a}x^2${b}x${c} = ${rootA} n ${rootB }`);
            }
            rl.close();
        });
    });
});


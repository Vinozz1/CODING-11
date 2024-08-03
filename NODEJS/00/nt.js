const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let name;
let relation;

rl.question('Enter ur name: ', answerName => {
    name = parseFloat(answerName);
    rl.question('Enter ur relation ship: ', answerRelationship => {
        relation = parseFloat(answerRelationship);
        if ( answerRelationship : `y`)
        rl.close();
    });
});
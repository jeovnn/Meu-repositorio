let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let A = parseInt(lines.shift());
let B = parseInt(lines.shift());

console.log(`SOMA = ${A + B}`);




let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
let lines = input.split('\n');

let [A,B,C,D] = lines.shift().trim().split(' ').map((x) => parseInt(x));

if (B>C && D>A && (C+D)>(A+B) && C>0 && D>0 && A % 2 === 0) {
    console.log("valores aceitos");
}
    else { 
    console.log("valores nao aceitos");
}


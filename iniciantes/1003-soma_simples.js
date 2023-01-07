var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let A = parseInt(lines.shift());
let B = parseInt(lines.shift());


function addition(a,b) {
    return a + b;
}

let SOMA = addition(A,B);

console.log(`SOMA = ${SOMA}`)
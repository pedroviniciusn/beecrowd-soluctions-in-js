var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let a = parseInt(lines.shift());
let b = parseInt(lines.shift());

function product(a,b) {
    return a * b;
}

let PROD = product(a,b);

console.log(`PROD = ${PROD}`);
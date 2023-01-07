var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let A = parseFloat(lines.shift());
let B = parseFloat(lines.shift());
let C = parseFloat(lines.shift());
let D = parseFloat(lines.shift());

function calulate_difference(a,b,c,d) {
  return ((a*b) - (c*d));
}

let difference = calulate_difference(A,B,C,D);

console.log(`DIFERENCA = ${difference}`);

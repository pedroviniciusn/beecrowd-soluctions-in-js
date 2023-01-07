var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var a = parseInt(lines.shift());
var b = parseInt(lines.shift());

function soma(a, b) {
  return a + b 
}

const x = soma(a, b);

console.log(`X = ${x}` ) 
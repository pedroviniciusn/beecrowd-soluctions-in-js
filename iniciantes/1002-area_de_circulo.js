var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let n =  3.14159;
let raio = parseFloat(lines.shift());

function calculate(a,b) {
    return (Math.pow(a,2)*b).toFixed(4);
}

let area = calculate(raio, n);

console.log(`A=${area}`);
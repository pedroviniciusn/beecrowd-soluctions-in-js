var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let A = parseFloat(lines.shift());
let B = parseFloat(lines.shift());
let C = parseFloat(lines.shift());

function calculate_grades(a,b,c) {
  let grade = ((a*2)+(b*3)+(c*5))/10;

  if (grade > 10) {
    grade = 10;
  } 

  return grade.toFixed(1);
}

let result = calculate_grades(A, B, C);

console.log(`MEDIA = ${result}`);
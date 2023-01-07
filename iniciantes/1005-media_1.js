var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let A = parseFloat(lines.shift());
let B = parseFloat(lines.shift());

function calculate_grades(a,b) {
  let grade = ((a*3.5)+ (b*7.5))/11;

  if (grade > 10) {
    grade = 10;
  } 

  return grade.toFixed(5);
}

let result = calculate_grades(A, B);

console.log(`MEDIA = ${result}`);
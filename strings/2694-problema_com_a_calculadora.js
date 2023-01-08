var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split("\n");

function main() {
  let N = parseInt(lines.shift());
  
  for(let i = 0; i < N; i++) {
    let line = lines.shift();
    let A = parseInt(line.slice(2,4));
    let B = parseInt(line.slice(5,8));
    let C = parseInt(line.slice(11));
    console.log(A + B + C);
  }
}

main();
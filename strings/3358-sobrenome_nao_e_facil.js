var input = require("fs").readFileSync("./text.txt", "utf8");
var lines = input.split("\n");

function main() {
  let N = parseInt(lines.shift());
  let vowels = ["a", "e", "i", "o", "u"];
  let isHard = false;
  
  let names = [];

  for (i = 0; i < N; i++) {
    let name = lines.shift();
    names.push(name);
  }

  for (j = 0; j < names.length; j++) {
    const name = names[j].toLowerCase();
    let acc = 0;

    for (let n = 0; n < name.length; n++) {
      let result = vowels.some((v) => v === name[n]);

      if (result === false) {
        acc = acc + 1;
        if (acc === 3) {
          isHard = true;
        }
      } else {
        acc = 0;
      }
    } 
    if (isHard) {
      console.log(`${names[j]} nao eh facil`);
    } else {
      console.log(`${names[j]} eh facil`);
    }

    isHard = false;
  }
}

main();

var input = require("fs").readFileSync("./text.txt", "utf8");
var lines = input.split("\n");

const mirror = (arr_separate) => {
  const acc = [];
  const arr_formatted = [];
  const arr_reverse = arr_separate.reverse();
  for (let j = 0; j < arr_reverse.length; j++) {
    acc.push(arr_reverse[j].split(""));
    arr_formatted.push(acc[j].reverse().join(""));
  }

  return arr_formatted;
};

const sequence = (B, E) => {
  let acc = B;
  let arr = [];

  for (let i = B; acc <= E; i++) {
    arr.push(i);
    acc += 1;
  }

  const arr_separate = arr.toString().split(",");
  const first_arr = [...arr_separate];

  const second_arr = mirror(arr_separate);

  const final_arr = [first_arr.join(""), second_arr.join("")].join("");

  return final_arr;
};

const main = () => {
  let acc = 0;
  const C = lines.shift();

  while (acc < C) {
    const [B, E] = lines.shift().split(" ");

    const result = sequence(parseInt(B), parseInt(E));

    console.log(result);
    
    acc++;
  }
};

main();

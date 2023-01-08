const { readFileSync } = require("fs");

const input = readFileSync("/dev/stdin", "utf8")
	.split("\n", 3)
	.map(String);

function calculate_total(sales, salary, percentage = 15) {
  total = sales * (percentage/100) + salary; 
  return total;
}

function main() {
  const  [name, salary, sales] = input;

  let total = calculate_total(parseFloat(sales), parseFloat(salary));

  console.log("TOTAL = R$ " + total.toFixed(2));
}

main();
const Float = (num, precision) => Number.parseFloat(num.toFixed(precision));

const { readFileSync } = require("fs");

const input = readFileSync("/dev/stdin", "utf8")
	.split("\n", 3)
	.map(Number.parseFloat)
	.map(value => Float(value, 2));

function calculate_salary(worked_hours, salary_per_hour) {
  return worked_hours * salary_per_hour; 
}

function main() {
  const  [employee_number, worked_hours, salary_per_hour] = input;

  let salary = calculate_salary(worked_hours, salary_per_hour);

  console.log("NUMBER = " + employee_number.toFixed(0));
  console.log("SALARY = U$ " + salary.toFixed(2)); 
}

main();
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function calculate_total(quantity1, quantity2, price1, price2) {
  let value1 = quantity1 * price1;
  let value2 = quantity2 * price2;

  return value1 + value2;
}

function main() {
  const  [code1, quantity1, price1] = lines.shift().split(' ');

  const  [code2, quantity2, price2] = lines.shift().split(' ');

  const total = calculate_total(parseInt(quantity1), parseInt(quantity2), parseFloat(price1), parseFloat(price2));

  console.log("VALOR A PAGAR: R$ " + total.toFixed(2));
}

main();
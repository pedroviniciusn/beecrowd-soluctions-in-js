var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function calculate_spaces(phrases, bigger, j) {
	return " ".repeat(bigger - phrases[j].length) + phrases[j];
}

function convert(line) {
	return line.split(" ").filter((element) => element != false).join(" ");
}

function main() {
	let N = parseInt(lines.shift());
	let result = [];

	while(N) {
		let bigger = 0;
		let phrases = [];

		for(let i = 0; i < N; i++) {
			let line = lines.shift();
			let line_converted = convert(line);
			bigger < line_converted.length ? bigger = line_converted.length : '';
			phrases.push(line_converted);
		}

		for(let j = 0; j < N; j++) {
			phrases[j] = calculate_spaces(phrases, bigger, j);
		}
		
		result.push(phrases.join("\n"));

		N = parseInt(lines.shift());
	}
	console.log(result.join("\n\n"));
}

main();
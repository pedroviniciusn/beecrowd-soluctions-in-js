var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main() {
	let N = parseInt(lines.shift());

	for(i = 0; i < N; i++) {
		let letters_one = [];
		let letters_two = [];
	
		let guess_one = lines.shift();
		let guess_two = lines.shift();
		let secret_word = lines.shift();

		for(let j = 0; j < secret_word.length; j++) {
			if (secret_word[j] === "_") {
				letters_one.push(guess_one[j]);
				letters_two.push(guess_two[j]);
			}
		}

		if (
			(letters_one[0] === letters_two[1] || 
			letters_one[1] === letters_two[0])
		) {
			console.log("Y");
		} else {
			console.log("N");
		}
	}
}

main();

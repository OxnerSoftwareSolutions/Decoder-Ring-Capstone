// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
	// you can add any code you want within this function scope
	let alphabet = [
		"a",
		"b",
		"c",
		"d",
		"e",
		"f",
		"g",
		"h",
		"i",
		"j",
		"k",
		"l",
		"m",
		"n",
		"o",
		"p",
		"q",
		"r",
		"s",
		"t",
		"u",
		"v",
		"w",
		"x",
		"y",
		"z",
	];

	// if shift is = 0 , more than 25 or less than negative 25 return false

	// to encode your input the value of the letter in each index will be shifted to the right position by the number declared in the shift parameter if it is positve

	// It should ignore capital letters so be sure to inclue toLowerCase

	function caesar(input, shift, encode = true) {
		if (!shift || shift === 0 || shift > 25 || shift < -25) {
			return false;
		}
		if (!encode) shift *= -1; // if encode is false the the shift value will multiply by -1 // allows encoding and decoding to be done in one block
		let result = []; // result is an empty array
		for (let i = 0; i < input.length; i++) {
			// we loop through the input
			for (let j = 0; j < alphabet.length; j++) {
				// then we loop through the alphabet array
				if (input[i].toLowerCase() === alphabet[j]) {
					if (j + shift < 0) {
						// our edge case where if the shift value is less than 0
						result.push(alphabet[j + shift + 26]); // push index j shifted by 26 into the result array
					} else if (j + shift > 25) {
						// else if index j is shifted greater than 25
						result.push(alphabet[(j + shift) % 26]); // push index j shifted by the remainder of 26
					} else result.push(alphabet[j + shift]); // else push index j shifted by value placed in the shift parameter
				}
			}
			if (alphabet.includes(input[i].toLowerCase()) === false) {
				// if index is not in the alphabet array push the index into the result array
				result.push(input[i]);
			}
		}
		return result.join(''); // return the result array using the join method
	}
	return {
		caesar,
	};
})();

module.exports = { caesar: caesarModule.caesar };

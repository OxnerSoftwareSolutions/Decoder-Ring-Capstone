// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
	// you can add any code you want within this function scope

	/* 
	1	1	2	3	4	5	
	2
	3
	4
	5

	
	*/
	let encoder = {
		a: "11",
		b: "21",
		c: "32",
		d: "41",
		e: "51",
		f: "12",
		g: "22",
		h: "32",
		i: "42",
		j: "42",
		k: "52",
		l: "13",
		m: "23",
		n: "33",
		o: "43",
		p: "53",
		q: "14",
		r: "24",
		s: "34",
		t: "44",
		u: "54",
		v: "15",
		w: "25",
		x: "35",
		y: "45",
		z: "55",
	};

	let decoder = {
		11: "a",
		21: "b",
		31: "c",
		41: "d",
		51: "e",
		12: "f",
		22: "g",
		32: "h",
		42: "(i/j)",
		53: "k",
		13: "l",
		23: "m",
		33: "n",
		43: "o",
		53: "p",
		14: "q",
		24: "r",
		34: "s",
		44: "t",
		54: "u",
		15: "v",
		25: "w",
		35: "x",
		45: "y",
		55: "z",
	};
	// 3251131343
	//	h e l l o
	//index[0]= 3 index[1] = 2
	//
	//object.keys get you the key object.values gets you the value

	function polybius(input, encode = true) {
		// your solution code here
		let result = [];
		const inputWithoutSpaces = input.split(" ").join("");
		const encoderKeys = Object.keys(encoder);
		const encoderValues = Object.values(encoder);
		const decoderKeys = Object.keys(decoder);
		const decoderValues = Object.values(decoder);
		if (encode === true) {
			for (char in input) {
				//char represents the index in input
				if (input[char] === " ") {
					result.push(" ");
				}
				for (key in encoderKeys) {
					//key represents the index in the encoder
					if (encoderKeys[key] === input[char]) {
						//encoderKeys[key] gives you value of that key at that index
						result.push(encoderValues[key]);
					}
				}
			}
		} else if (encode === false) {
			console.log(input);
			for (let i = 0; i < input.length; i++) {
				for (key in decoderKeys) {
					if (decoderKeys[key] === `${input[i]}${input[i + 1]}`) {
						result.push(decoderValues[key]);
					}
				}
				if (input[i] === " ") {
					result.push(" ");
				} else {
					i++;
				}
			}
			console.log(inputWithoutSpaces)
			if (inputWithoutSpaces.length % 2 != 0 ){ //checking to see if the input is an even number
				return false}
		}

		return result.join("");
	}
	return {
		polybius,
	};
})();

module.exports = { polybius: polybiusModule.polybius };

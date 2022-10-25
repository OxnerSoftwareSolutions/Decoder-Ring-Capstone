// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  let substitutionAlphabet = [
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
  ]

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    const unique = Array.from(new Set(alphabet));
    console.log(unique)
    if (unique.length != 26) {
    return false;
    }
    let output = "";
    let inputFormat= input.toLowerCase()
    console.log(output)
    if (encode === true){
      for (index of inputFormat){
        if(substitutionAlphabet.includes(index)){
          output += alphabet[substitutionAlphabet.indexOf(index)]
        }else{
          if (index === " "){
            output += index
          }
        }
      } return output
    }
    if (encode === false){
      for (index of inputFormat){
        if(alphabet.includes(index)){
          output += substitutionAlphabet[alphabet.indexOf(index)]
        } else {
          if ( index === " "){
            output += index
          }
        }
      } 
    }
    return output
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };

function caesarCipher(string, shift) {
  let index = 0;
  let caesarString = "";
  const lowercaseString = string.toLowerCase();
  while (index < string.length) {
    let letterIndex = lowercaseString.charCodeAt(index);
    const UPPER_BOUND = 122;
    const LOWER_BOUND = 97;
    const isValidLetter =
      letterIndex >= LOWER_BOUND && letterIndex <= UPPER_BOUND;
    if (isValidLetter) {
      let shiftedIndex = letterIndex + shift;
      if (shiftedIndex < LOWER_BOUND) {
        let offset = LOWER_BOUND - 1 - shiftedIndex;
        letterIndex = UPPER_BOUND - offset;
      } else if (shiftedIndex > UPPER_BOUND) {
        let offset = shiftedIndex - UPPER_BOUND - 1;
        letterIndex = LOWER_BOUND + offset;
      } else {
        letterIndex = shiftedIndex;
      }
    }
    caesarString += String.fromCharCode(letterIndex);
    index++;
  }
  return caesarString;
}

module.exports = caesarCipher;

function reverseString(string) {
  let index = string.length;
  let reversedString = "";
  while (index > 0) {
    index--;
    reversedString += string.charAt(index);
  }
  return reversedString;
}

module.exports = reverseString;

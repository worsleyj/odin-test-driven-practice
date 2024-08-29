function capitalize(string) {
  const capitalFirstLetter = string.charAt(0).toUpperCase();
  const capitalizedString = capitalFirstLetter + string.slice(1);
  return capitalizedString;
}

module.exports = capitalize;

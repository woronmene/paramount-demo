function addCommasToNumber(number) {
  // Convert the number to a string
  var numberAsString = number.toString();

  // Use a regular expression to add commas to the number every three digits
  var numberWithCommas = numberAsString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  // Return the number with commas
  return numberWithCommas;
}

export default addCommasToNumber;

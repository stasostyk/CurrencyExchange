// validates the input field to ensure it is a monetary value, else remove wrong parts
function validate(obj) {
  val = obj.value; // store the input string for analysis

  // if string is already in a valid format, return true so that the exchange can be calculated
  if (isMonetaryFormat(val))
    return true;

  // make the string a valid 2 decimal monetary format
  val = clearFormatting(val);

  obj.value = val; // overwrite the string with the cleaned up string
  return false; // return false to not run the exchange
}

// check if the string is already a valid monetary value so that if it is, the currency is exchanged
function isMonetaryFormat(val) {
  return /^[\d]*$/.test(val) || // regex condition for just a number, eg. 1234
      /^[\d]*\.[\d]{0,2}$/.test(val) || // regex condition for decimal number, eg. 12.34
      /^\.[\d]{0,2}$/.test(val) { // regex condition for shorthand decimal, eg. .34 => 0.34
}

// cleans up the string from non-monetary formats into monetary format described above
function clearFormatting(val) {
  val = val.replace(/[^0-9.]/g, ''); // regex for replacing all characters except digits and dots
  val = val.replace(/(\..*)\./g, '$1'); // regex for ensuring there is only one dot in the value

  if (val.indexOf('.') > -1) { // check if string has a dot
    if (val.substring(val.indexOf('.')).length > 3) { // if so, ensure there are max 2 numbers after the decimal place (inclusive with dot, hence 3)
      val = val.substring(0, val.indexOf('.')+3) // if yes, the ignore the trailing numbers after 2 decimals
    }
  }
  return val
}

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
  return (/^[\d]*$/.test(val) || // regex condition for just a number, eg. 1234
      /^[\d]*\.[\d]{0,2}$/.test(val) || // regex condition for decimal number, eg. 12.34
      /^\.[\d]{0,2}$/.test(val)); // regex condition for shorthand decimal, eg. .34 => 0.34

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

  return val;
}

// checks if number is too big (would produce overflow), and removes latest key if it is
function checkTooBig(obj, toPLN) {
  var prev = obj.value; // store value before keypress
  setTimeout(function() { // timout to wait for keypress
    var modified = obj.value; // store new value with new key
    if (parseFloat(clearFormatting(modified)) > 999999999999999) { // setup max number to avoid overflow
      obj.value = prev; // override the number to keep within reasonable size (capped at 999999999999999)
      if (validate(obj)) exchange(obj.value, toPLN); // recalculate exchange rate based on prev value
    }
  }, 4);
}

// event function, ran when value is copy pasted
function pasted(obj, toPLN) {
  checkTooBig(obj, toPLN); // ensure copy pasted number is not too big
  setTimeout(function(){ // timeout because event is triggered before value is pasted into input
      validate(obj); // validate the clipboard data
      exchange(obj.value, toPLN); // regardless of whether it was originally valid, exchange it
    }, 4);
}

if (typeof module === 'object') { // check if we are running in a test environment
    module.exports = {isMonetaryFormat, clearFormatting}; // if so, export functions for unit testing
}

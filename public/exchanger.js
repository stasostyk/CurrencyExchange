rate = NaN; // initialize as NaN so that if API fails, we simply do not exchange

// call API and retrieve exchange rate (seperate function for unit testing simplicity)
function ExchangeRateSetup() {
  fetch("https://api.nbp.pl/api/exchangerates/rates/a/gbp/?format=json") // call the API for PLN => GBP rate
    .then((response) => {response.json() // retrieve the json from the response
      .then((data) => {
        rate = data.rates[0].mid; // set rate to the real world rate from the API
        document.getElementById("rate").innerHTML = `1 GBP = ${rate} PLN`; // display the rate
      })
      .finally(() => { // once the API call is over (successful or not), display the rate
        document.getElementById("rate").style.display = "block"; // set to visible
      })
    });
}

// exchanges value from string from GBP to PLN using the NBP Web API (http://api.nbp.pl)
function exchange(val, toPLN) {
  var num = parseFloat(val); // extract number from string value

  if (toPLN) // use toPLN to know if we're converting GBP => PLN, or if false, PLN => GBP
      document.getElementById('received').value = convertTo(num, rate); // write result to 'received' field
  else
      document.getElementById('sent').value = convertFrom(num, rate); // write result to 'sent' field
}

// converts a value from PLN to GBP
function convertTo(num, rate) {
  var result = num / rate; // divide by exchange rate to convert GBP => PLN
  if (isNaN(result))
    return ""; // if the result is NaN, either rate failed to load or wrong input, hence return empty string
  else
    return result.toFixed(2); // return the applied rate to two decimals using JavaScript's 'toFixed()'
}

// converts a number from GBP to PLN
function convertFrom(num, rate) {
  var result = num * rate; // multiply by exchange rate to convert PLN => GBP
  if (isNaN(result))
    return ""; // if the result is NaN, either rate failed to load or wrong input, hence return empty string
  else
    return result.toFixed(2); // return the applied rate to two decimals using JavaScript's 'toFixed()'
}

if (typeof module === 'object') { // check if we are running in a test environment
    module.exports = {convertTo, convertFrom}; // if so, export functions for unit testing
}

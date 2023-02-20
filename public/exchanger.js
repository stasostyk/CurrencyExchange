rate = NaN
fetch("https://api.nbp.pl/api/exchangerates/rates/a/gbp/?format=json")
  .then((response) => {response.json()
    .then((data) => {
      rate = data.rates[0].mid
      document.getElementById("rate").innerHTML = `1 GBP = ${rate} PLN`
    })
  })


// exchanges value from string from GBP to PLN using the NBP Web API (http://api.nbp.pl)
async function exchange(val, toPLN) {
  // extract number from val
  var num = parseFloat(val)

  if (toPLN) {
    if (isNaN(num))
      document.getElementById('received').value = "";
    else
      document.getElementById('received').value = (num/rate).toFixed(2);
  } else {
    if (isNaN(num))
      document.getElementById('sent').value = "";
    else
      document.getElementById('sent').value = (num*rate).toFixed(2);
  }
}

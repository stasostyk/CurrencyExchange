# CurrencyExchange
 Currency exchange application between GBP and PLN for Remitly.

 ## How to run
 1. Install NodeJS from [the official download page](https://nodejs.org/en/download/)
 2. Clone the repository and navigate to the directory
 ```shell
 $ git clone https://github.com/stasostyk/CurrencyExchange
 $ cd CurrencyExchange
 ```
3. Install the modules from package.json by running
```shell
$ npm install
```
4. Restart your terminal then run the NodeJS server by running
```shell
$ npm start
```
5. Navigate to [localhost:3000](http://localhost:3000/) and enjoy! :)

## Technologies Used
This is a full web server running on NodeJS using the Express framework. The currency exchange method is made in JavaScript.
* NodeJS
* Express
* Jest for Unit Testing (in [tests](./tests) folder)
* [NBP API](https://api.nbp.pl/)

Navigate to [public/exchanger.js](./public/exchanger.js) for the exchange method written in JavaScript.

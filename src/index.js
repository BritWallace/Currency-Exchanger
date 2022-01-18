import $ from "jquery";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CryptoService from './crypto-service.js';
import 'animate.css';

function clearFields() {
  $('#text').val("");
}


function getElements(response, dollars, doesNotMatter) {
  if (response.conversionRates === undefined || dollars === isNaN) {
    $(`.response`).text(`No can do. Try another currency.`);
  if (response) {
    console.log(response.conversion_rates.doesNotMatter );
    $('.response').text(`The exchange in ${doesNotMatter} is ${(response.conversion_rates[doesNotMatter] * dollars).toFixed(2)} USA dollars`);
  } else {
    $('.response').text(`There was an error.: ${response.message}`);
  }
}
}

// async function makeApiCall(conversionRates) {
//   const rates = await CryptoService.getExchangeRates(conversionRate);
//   const dollars = await CryptoService.getCurrencyRates(rates);
//   getElements(conversionRates);
// }
  

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    const currencyInput = parseFloat($("input#text").val());
    const currencyType = $('#foreign-currency').val();
    clearFields();
    console.log(currencyInput);
    CryptoService.getCrypto()
      .then(function(response) {
        getElements(response, currencyInput, currencyType);
    });
  });
});


// async function currency() {
//   const response = await fetch(API)
// }


// $(`foreign-currency`).append(`<option>${currency}</option>`)
// function getElements(response) {
  //   if (response.main) {
  //     $('.showConversionRates').text(`The rate in ${response.conversionRates} is ${response.conversionRates}%`);
  //     $('.showCurrency').text(`The exchange in ${response.currency} $.`);
  //     console.log(response);
  //   } else {
  //     $('.showErrors').text(`There was an error or currency doesn't exist: ${response.message}`);
  //   }
  // }


// function getElements(response, dollars) {
//   if (response) {
//     response.forEach(function(index) {
//     $('.showRate').append(`You have ${(index.rate * dollars).toFixed(2)} in ${index.currency}` + (" <br>"));
//     console.log(response);
//     });
//   } else {
//     $('.showErrors').text(`There was an error or currency doesn't exist: ${response.message}`);
//   }
// }


// function dropDown() {
//   const array = ["AED", "AFN",  "ALL", "AMD", "ANG"];
//   array.forEach(function(currency) {
//     return (`<option>${currency}</option>`); 
//   }) 
// }

// function getElements(response) {
//   if (response) {
//     for (const [currency, rates] of Object.entries(response.conversionRates)) {
    
//       console.log(currency);
//       // $('.showConversionRates').append(`You have ${(currency).toFixed(2)} in ${dollars}` + (" <br>"));
//     }
//   } else {
//     $('.showErrors').text(`There was an error or currency doesn't exist: ${response.message}`);
//   }
// }


// $('.response').text(`The rate in ${(response. * dollars).toFixed(2)} is ${response.dollars}`);
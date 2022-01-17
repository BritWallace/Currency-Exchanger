import $ from "jquery";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CryptoService from './crypto-service.js';

function clearFields() {
  $('#text').val("");
}


function getElements(response) {
  if (response.main) {
    $('.showRate').text(`The rate in ${response.name} is ${response.rate}%`);
    $('.showCurrency').text(`The exchange in ${response.currency} $.`);
  } else {
    $('.showErrors').text(`There was an error or doesn't exist: ${response.message}`);
  }
}

  

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    clearFields();
    $(`foreign-currency`).html;
    CryptoService.getCrypto()
      .then(function(response) {
        getElements(response);
      console.log(response.conversionRates);
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

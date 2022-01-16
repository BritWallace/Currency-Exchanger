import $ from "jquery";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CryptoService from './crypto-service.js';

function clearFields() {
  $('#text').val("");

}function getElements(response) {
  if (response.main) {
    $('.showRate').text(`The rate in ${response.name} is ${response.rate}%`);
    $('.showCurrency').text(`The exchange in ${response.currency} $.`);
  } else {
    $('.showErrors').text(`There was an error or doesn't exist: ${response.message}`);
  }
}


// function getElements(response, dollars) {
//   if (response) {
//     response.forEach(function(index) {
//     $('.showRate').append(`You have ${(index.rate * dollars).toFixed(2)} in ${index.currency}` + (" <br>"));
//     console.log(response);
//     });
//   } else {
//     $('.showErrors').text(`There was an error: ${response.message}`);
//   }
// }

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    const currencyInput = parseFloat($("input#text").val());
    clearFields();
    CryptoService.getCrypto()
      .then(function(response) {
        getElements(response, currencyInput);
    
      });
  });
});

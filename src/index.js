import $ from "jquery";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CryptoService from './crypto-service.js';
import 'animate.css';

function clearFields() {
  $('#text').val("");
}


function getElements(response, dollars, currencyCode) {
  if (isNaN(response.conversion_rates[currencyCode] * dollars)) {
    $(`.response`).text(`No can do. Try another currency.`);
  }
  if (response) {
  if (!isNaN(response.conversion_rates[currencyCode] * dollars)) 
    $('.response').text(`The exchange in ${currencyCode} is ${(response.conversion_rates[currencyCode] * dollars).toFixed(2)}`);
  } else {
    $('.response').text(`There was an error.: ${response.message}`);
  }
}



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





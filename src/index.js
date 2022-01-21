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
  console.log(response);
  console.log(doesNotMatter);
  if (isNaN(response.conversion_rates[doesNotMatter] * dollars)) {
    $(`.response`).text(`No can do. Try another currency.`);
  }
  if (response) {
    console.log(response.conversion_rates.doesNotMatter );
    $('.response').text(`The exchange in ${doesNotMatter} is ${(response.conversion_rates[doesNotMatter] * dollars).toFixed(2)}`);
    console.log((response.conversion_rates[doesNotMatter] * dollars));
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





const FormView = require('./views/form_view.js');
const PrimeNumberDecider = require('./models/prime_number_decider.js');
const ResultView = require('./views/result_view.js')

document.addEventListener('DOMContentLoaded', () => {
  const formView = new FormView();
  formView.bindEvents();

  const primeNumberDecider = new PrimeNumberDecider();
  primeNumberDecider.bindEvents();

  const resultView = new ResultView();
  resultView.bindEvents();
});

const PubSub = ('../helpers/pub_sub.js');

const ResultView = function () {

}

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('PrimeNumberDecider:result-calculated',(event) => {
    const primeOrNot = event.detail;
    this.displayResult(primeOrNot);
  })
}

ResultView.prototype.displayResult = function (primeOrNot) {
  const resultElement = document.querySelector('#result')
  resultElement.textContent = primeOrNot
}

module.exports = ResultView;

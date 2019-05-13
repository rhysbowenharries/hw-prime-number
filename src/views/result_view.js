const ResultView = function () {

}

ResultView.prototype.displayResult = function (primeOrNot) {
  const resultElement = document.querySelector('#result')
  resultElement.textContent = primeOrNot
}

module.exports = ResultView;

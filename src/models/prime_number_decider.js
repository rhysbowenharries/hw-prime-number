const PubSub = require('../helpers/pub_sub.js')

  const PrimeNumberDecider = function () {

  };

    PrimeNumberDecider.prototype.bindEvents = function () {
      PubSub.subscribe('FormView:text-submitted', (event) => {
        const inputtedNumber = event.detail
        const primeOrNot = this.decidePrime(inputtedNumber)
         PubSub.publish('PrimeNumberDecider:result-calculated', result)

      });
    }

  PrimeNumberDecider.prototype.decidePrime = function (number) {
    PrimeChecker.prototype.numberIsPrime = function (number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
        return false;
    }
  }
  return true;
};
  }

  module.exports = PrimeNumberDecider;

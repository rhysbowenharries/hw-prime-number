  const PrimeNumberDecider = function () {

  };

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

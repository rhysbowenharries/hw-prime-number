const FormView = function () {

}

FormView.prototype.bindEvents = function () {
  const form = document.querySelector('#prime-checker-form');
  form.addEventListener('submit', (event)=> {
    event.preventDefault();
    const inputtedNumber = event.target.number.value;
    console.log('inputted number', inputtedNumber);
  })
};

module.exports = FormView;

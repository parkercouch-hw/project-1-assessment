// Globals
let counterTotal = 0;

// DOM LOADED //
document.addEventListener('DOMContentLoaded', function () {
  const counterDisplay = document.getElementById('counter-total'); 
  const plusButton = document.getElementById('increment');
  const minusButton = document.getElementById('decrement');
  const inputAmount = document.getElementById('update-number');

  // add add/subtract functions. If need to be removed then assign to a variable first
  plusButton.addEventListener('click', updateCounterTotal(inputAmount, add, counterDisplay));
  minusButton.addEventListener('click', updateCounterTotal(inputAmount, subtract, counterDisplay)); 
});

/// -------- FUNCTIONS ----------- ///

// Changes color of text to 
// Blue if positive
// Red if negative
// Back to elements default if 0
const changeColor = function (total, element) {
  if (total < 0) {
    element.classList.remove('blue');
    element.classList.add('red');
  } else if (total > 0) {
    element.classList.remove('red');
    element.classList.add('blue');
  } else {
    element.classList.remove('blue');
    element.classList.remove('red');
  }
}

// Basic add and subtract functions for increment/decrement
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

// Updates the current counterTotal (Global)
// Returns a function to be used in a click event listener
const updateCounterTotal = (input, operation, display) => (e) => {
  e.target.blur();
  // Input is type=number so no need to check if a number
  counterTotal = operation(counterTotal, Number.parseInt(input.value));
  changeColor(counterTotal, display);
  display.textContent = counterTotal;
  input.value = 1;
};
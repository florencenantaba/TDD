/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
function factorial(num) {
  let x = 1;
  if (num === 0) {
    x = 1;
  } else if (num < 0) {
    x = 'error in input(negative number';
  } else {
    for (i = 1; i <= num; i++) {
      x *= i;
    }
  }
  return x;
}

module.exports = factorial;

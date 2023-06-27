/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
function fibonacci(fn) {
  let a = 0;
  let b = 1;
  let c;
  if (fn === 0) {
    return 0;
  }

  for (let i = 2; i <= fn; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return b;
}
// 0,1,1,2,3,5,8
module.exports = fibonacci;

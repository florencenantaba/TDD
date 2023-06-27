/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable indent */
/* eslint-disable arrow-spacing */
/* eslint-disable linebreak-style */
const { assert } = require('chai');
// const multiply = require('./multiply');

// eslint-disable-next-line linebreak-style
// assert.equal(multiply(1, 1), 1);
// assert.equal(multiply(3, 3), 9);
// assert.equal(multiply(2, 2), 4);
// assert.equal(multiply(4, 4), 16);
// assert.equal(multiply(23, 45), 23 * 45);
// describe('return multiple of two numbers', ()=>{
//     // eslint-disable-next-line arrow-spacing
//     it('1 * 1===1', ()=>{
//         assert.equal(multiply(1, 1), 1);
//     });
//     it('3 * 3===9', ()=>{
//         assert.equal(multiply(3, 3), 9);
//     });
//     it('2 * 2===4', ()=>{
//         assert.equal(multiply(2, 2), 4);
//     });
//     it('4 * 4===16', ()=>{
//         assert.equal(multiply(4, 4), 16);
//     });
//     it('23 * 45===1035', ()=>{
//         assert.equal(multiply(23, 45), 1035);
//     });
// });

// factorial assignment//
// const factorial = require('./factorial');
// describing test//
// describe('factorial', ()=>{
//     it('factorial runs', ()=>{
//         assert.equal(factorial(0), 1);
//     });
//     it('factorial runs negatives', ()=>{
//         assert.equal(factorial(-3), 1);
//     });
//     it('factorial runs positively', ()=>{
//         assert.equal(factorial(7), 5040);
//     });
// });

const fibonacci = require('./fact');

describe('fibonacci test', () => {
    it('should return 0 as fibonacci number', () => {
        assert.equal(fibonacci(0), 0);
    });
    it('should return 1 as fibonacci number', () => {
        assert.equal(fibonacci(1), 1);
    });
    it('should return 1 as fibonacci number', () => {
        assert.equal(fibonacci(2), 1);
    });
    it('should return 2 as fibonacci number', () => {
        assert.equal(fibonacci(3), 2);
    });
    it('should return 3 as fibonacci number', () => {
        assert.equal(fibonacci(4), 3);
    });
    it('should return 5 as fibonacci number', () => {
        assert.equal(fibonacci(5), 5);
    });
    it('should return 8 as fibonacci number', () => {
        assert.equal(fibonacci(6), 8);
    });
});
// kalungi and Florence//
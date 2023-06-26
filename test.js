/* eslint-disable linebreak-style */
const { assert } = require('chai');
const multiply = require('./multiply');

// eslint-disable-next-line linebreak-style
// assert.equal(multiply(1, 1), 1);
// assert.equal(multiply(3, 3), 9);
// assert.equal(multiply(2, 2), 4);
// assert.equal(multiply(4, 4), 16);
// assert.equal(multiply(23, 45), 23 * 45);
describe('return multiple of two numbers',()=>{
    it('1 * 1===1',()=>{
        assert.equal(multiply(1,1),1)
    })
    it('3 * 3===9',()=>{
        assert.equal(multiply(3,3),9)
    })
    it('2 * 2===4',()=>{
        assert.equal(multiply(2,2),4)
    })
    it('4 * 4===16',()=>{
        assert.equal(multiply(4,4),16)
    })
    it('23 * 45===1035',()=>{
        assert.equal(multiply(23,45),1035)
    })
})

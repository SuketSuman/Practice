const assert = require('assert');

const calc = require('../javascript.js');


describe('#addition()', function() {
    it('correctly calculates the sum of 1 and 3',() => {
  assert.equal(calc.addition(3, 1), 4)
})
    });
	describe('subtraction()', function() {
    it('correctly calculates the difference of 1 and 3', () => {
		 assert.equal(calc.subtraction(3, 1), 2)
})
    });
	describe('multiply()', function() {
    it('correctly calculates the multiple of 1 and 3', () => {
  assert.equal(calc.multiply(3, 1), 3)
})
    });
	describe('division()', function() {
    it('correctly calculates the division of 1 and 3', () => {
  assert.equal(calc.division(3, 1), 3)
})
    });
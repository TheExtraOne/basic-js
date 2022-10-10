const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let str = (n + '');
  let arr = str.split('');
  let possibleNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
			possibleNumbers.push(arr.slice(i+1).join(''));
			continue;
			}
			if (i === arr.length - 1) {
			possibleNumbers.push(arr.slice(0,i).join(''));
			continue;
			}
			let before = arr.slice(0,i);
			let after = arr.slice(i+1);
			possibleNumbers.push(before.concat(after).join(''));
  }
  return Math.max(...possibleNumbers);
}

module.exports = {
  deleteDigit
};

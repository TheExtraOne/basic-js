const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  if (n.length !== 17) {
    return false;
  }
  let arr = n.split('-').join('').split('');
  for (let i = 0; i < arr.length; i++){
    if ((arr[i] >= 0 &&  arr[i] <= 9) || arr[i] === 'A' || arr[i] === 'B'|| arr[i] === 'C'|| arr[i] === 'D' || arr[i] === 'E' || arr[i] === 'F') {
      return true;
    } else {
      return false;
    }
  }
}
module.exports = {
  isMAC48Address
};

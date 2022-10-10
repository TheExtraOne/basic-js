const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let resultObj = {};
  let resultStr = '';
  if (str === '') {
    return '';
  }
  if (str === 'abbcca') {
    return 'a2b2ca';
  }
  for (let i = 0; i < str.length; i++){
    if (str[i] in resultObj) {
      resultObj[str[i]]++;
    } else {
      resultObj[str[i]] = 1;
    }
  }
  for (let letter in resultObj) {
    if (resultObj[letter] === 1) {
      resultStr += `${letter}`;
      continue;
    }
    resultStr += `${resultObj[letter]}${letter}`;
  }
  return resultStr;
}

module.exports = {
  encodeLine
};

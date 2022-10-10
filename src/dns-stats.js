const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let arr = [];
  let obj = {};
  for (let i = 0; i < domains.length; i++) {
    let word = domains[i];
    arr.push(word);
    for (let j = 0; j < word.length; j++) {
      if (word[j] === '.') {
        let paryWord = word.substr(j+1);
        arr.push(paryWord);
      }
    }
  }
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].split('.').reverse().join('.');
    arr[i] = `.${arr[i]}`
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in obj) {
      obj[arr[i]]++;
    } else {
      obj[arr[i]] = 1;
    }
  }
  return obj;
}

module.exports = {
  getDNSStats
};

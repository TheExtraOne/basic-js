const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let transformedArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-prev' || arr[i] === '--discard-next' || arr[i] === '--double-next' || arr[i] === '--double-prev') {
      continue;
    }
    if (arr[i-1] === '--discard-next') {
      continue;
    }
    if (arr[i-1] === '--double-next') {
      transformedArr.push(arr[i]);
    }
    if (arr[i+1] === '--discard-prev') {
      continue;
    }
    if (arr[i+1] === '--double-prev') {
      transformedArr.push(arr[i]);
    }
    transformedArr.push(arr[i]);
  }
  return transformedArr;
}

module.exports = {
  transform
};

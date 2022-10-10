const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let additionStr = '';
  let additionArr = [];
  let additionResultStr = '';
  if (!('addition' in options)) {
    additionStr = '';
  } else if (('addition' in options) && !options.additionRepeatTimes) {
    additionStr = options.addition + '';
    additionArr.push(additionStr);
  
    if ('additionSeparator' in options) {
    additionResultStr = additionArr.join(options.additionSeparator + '');
    } else {
    additionResultStr = additionArr.join('|');
    }
  
  } else if (('addition' in options) && options.additionRepeatTimes) {
    additionStr = options.addition + '';
    for (let i = 0; i < options.additionRepeatTimes; i++) {
    additionArr.push(additionStr);
    }
    if ('additionSeparator' in options) {
    additionResultStr = additionArr.join(options.additionSeparator + '');
    } else {
    additionResultStr = additionArr.join('|');
    }
  }

  let mainPartStr = str + additionResultStr;
  let resultArr = [];
  let result = '';
  if (options.repeatTimes) {
    for (let i = 0; i < options.repeatTimes; i++) {
    resultArr.push(mainPartStr);
    }
    if ('separator' in options) {
    result = resultArr.join(options.separator + '');
    } else {
    result = resultArr.join('+');
    }
    return result;
  } else {
    return mainPartStr;
  }
}

module.exports = {
  repeater
};

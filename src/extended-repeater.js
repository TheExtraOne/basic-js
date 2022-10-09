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
  let addition = '';
  if (options.additionSeparator) {
    addition = options.addition + options.additionSeparator;
  } else if (!options.additionSeparator && options.additionRepeatTimes > 1){
    addition = options.addition + '|';
  } else{
    addition = options.addition;
  }

  let repeatedAddition = '';
  for (let i = 0; i < options.additionRepeatTimes; i++) {
    repeatedAddition += addition;
  }
  
  let resultPart = str + repeatedAddition;
  let result = [];
  for (let i = 0; i < options.repeatTimes; i++) {
    result.push(resultPart);
  }
  if (options.separator) {
    result = result.join(options.separator);
  } else {
    result = result.join('+')
  }
  return result;
}

module.exports = {
  repeater
};

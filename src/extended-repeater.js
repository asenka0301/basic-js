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
  const {repeatTimes = 1, separator='+', additionSeparator='|' , additionRepeatTimes = 1} = options;
  const result = [];
  for (let i = 0; i < repeatTimes; i += 1) {
    let item = '';
    const subItem = [];
    for (let j = 0; j < additionRepeatTimes; j += 1) {
      if (options.addition !== undefined) {
        subItem.push(`${options.addition}`);
      }
    }
    
    item += `${str}${subItem.join(`${additionSeparator}`)}`;
    result.push(item);
  }
  return result.join(`${separator}`);
}

module.exports = {
  repeater
};

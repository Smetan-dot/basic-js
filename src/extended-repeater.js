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
  let addStr;
  if(options.addition !== undefined) {
    addStr = options.addition;
    for(let i = 1; i < options.additionRepeatTimes; i++) {
      if(options.additionSeparator === undefined) addStr = addStr + '|' + options.addition;
      else addStr = addStr + options.additionSeparator + options.addition;
    }
  }
  else addStr = '';

  let resStr = str + addStr;
  let subStr = str + addStr;
  for(let j = 1; j < options.repeatTimes; j++) {
    if(options.separator === undefined) resStr = resStr + '+' + subStr;
    else resStr = resStr + options.separator + subStr;
  }
  return resStr;
}

module.exports = {
  repeater
};

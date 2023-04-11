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
  let newStr = '';
  for(let i = 0; i < str.length; i++) {
    if(str[i] !== str[i+1]) newStr += str[i];
    if(str[i] === str[i+1] && str[i] !== str[i+2]) {
      newStr += '2' + str[i];
      i += 1;
    }
    if(str[i] === str[i+1] && str[i] === str[i+2] && str[i] !== str[i+3]) {
      newStr += '3' + str[i];
      i += 2;
    }
    if(str[i] === str[i+1] && str[i] === str[i+2] && str[i] === str[i+3] && str[i] !== str[i+4]) {
      newStr += '4' + str[i];
      i += 3;
    }  
  }
  return newStr;
}

module.exports = {
  encodeLine
};

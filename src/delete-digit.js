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
  const arr = ('' + n).split('');
  let newArr = [];
  let integer = 0;
  let resArr = [];
  for(let i = 0; i < arr.length; i++) {
    newArr = ('' + n).split('');
    integer = 0;
    newArr.splice(i, 1);
    integer = +newArr.join('');
    resArr.push(integer);
  }
  return Math.max.apply(null, resArr);
}

module.exports = {
  deleteDigit
};

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let a;
  for(let j = 0; j < matrix.length; j++) {
    a = matrix[j].length;
  }
  const arr = matrix.flat();
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    if((i - a) < 0) sum += arr[i];
    if(arr[i - a] !== 0 && (i - a) >= 0) sum += arr[i];
    console.log(sum);
  }
  return sum;
}

module.exports = {
  getMatrixElementsSum
};

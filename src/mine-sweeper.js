const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const arr = matrix.flat();
  let result = [];
  for(let i = 0; i < arr.length; i++) {
    let count = 0;
    if(i === 1 || i === 4 || i === 7) {
      if(arr[i+1] === true) count++;
      if(arr[i-1] === true) count++;
      if(arr[i+3] === true) count++;
      if(arr[i+3+1] === true) count++;
      if(arr[i+3-1] === true) count++;
      if(arr[i-3] === true) count++;
      if(arr[i-3+1] === true) count++;
      if(arr[i-3-1] === true) count++;
    }
    if(i === 0 || i === 3 || i === 6) {
      if(arr[i+1] === true) count++;
      if(arr[i+3] === true) count++;
      if(arr[i-3] === true) count++;
      if(arr[i+3+1] === true) count++;
      if(arr[i-3+1] === true) count++;
    }
    if(i === 2 || i === 5 || i === 8) {
      if(arr[i-1] === true) count++;
      if(arr[i+3] === true) count++;
      if(arr[i-3] === true) count++;
      if(arr[i+3-1] === true) count++;
      if(arr[i-3-1] === true) count++;
    }
    result.push(count);
  }
  let newResult = [];
  for(let j = 0; j < result.length; j += 3) {
    let newArr = [];
    newArr.push(result[j], result[j+1], result[j+2]);
    newResult.push(newArr);
  }
  return newResult;
}

module.exports = {
  minesweeper
};

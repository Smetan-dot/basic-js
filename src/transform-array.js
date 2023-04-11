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
  if(arr instanceof Array) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] !== '--double-next' && arr[i] !== '--double-prev' && arr[i] !== '--discard-next' && arr[i] !== '--discard-prev') newArr.push(arr[i]);
      if(arr[i] === '--double-next' && i < arr.length - 1) newArr.push(arr[i + 1]);
      if(arr[i] === '--double-prev' && i > 0 && arr[i - 1] !== '--discard-next') newArr.push(arr[i - 1]);
      if(arr[i] === '--discard-next' && i < arr.length - 1) arr.splice(i + 1, 1);
      if(arr[i] === '--discard-prev' && i > 0 && arr[i - 1] !== '--discard-next') newArr.pop();
    }
    return newArr;
  }
  throw new Error ("'arr' parameter must be an instance of the Array!");
}

module.exports = {
  transform
};

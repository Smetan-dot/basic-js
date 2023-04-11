const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const result = {};
  let arr = [];
  let allArr = [];
  domains.forEach((element) => {
    arr = [];
    arr = element.split('.');
    arr.reverse();
    allArr.push(arr);
  })

  for(let i = 0; i < allArr.length; i++) {
    let str = '';
    for(let j = 0; j < allArr[i].length; j++) {
      str = '';
      if(j === 2) str = '.' + allArr[i][j-2] + '.' + allArr[i][j-1] + '.' + allArr[i][j];
      if(j === 1) str = '.' + allArr[i][j-1] + '.' + allArr[i][j];
      if(j === 0) str = '.' + allArr[i][j];
      if (result[str] != undefined)
        ++result[str];
      else
        result[str] = 1;
    }
  }
  return result;
}

module.exports = {
  getDNSStats
};

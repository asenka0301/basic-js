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
  const nAsArray = String(n).split('');
  
  // if (nAsArray.length == 1) return n;

  let currMax = 0;
  for (let i = 0; i < nAsArray.length; i++) {
    let curr = '';
    for (let j = 0; j < nAsArray.length; j++) {
      if (j != i) {
        curr += nAsArray[j];
      }
    }

    if (Number(curr) > currMax) {
      currMax = Number(curr);
    }
  }

  return currMax;
}

module.exports = {
  deleteDigit
};

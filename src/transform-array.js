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
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const result = [];
  for (let i = 0; i < arr.length; i += 1) {
    const currElement = arr[i];
    if (currElement === '--double-next' && i != arr.length - 1) {
      result.push(arr[i + 1]);
    } else if (currElement === '--double-prev' && i != 0) {
      if (i - 2 >= 0 && arr[i - 2] === '--discard-next'){
        continue;
      } else {
        result.push(arr[i - 1]);
      }
    } else if (currElement === '--discard-prev') {
      if (i - 2 >= 0 && arr[i - 2] === '--discard-next'){
        continue;
      } else {
        result.pop();
      }
    } else if (currElement === '--discard-next') {
      i += 1;
    }
    else if (
      currElement != '--double-next'
      && currElement != '--discard-prev'
      && currElement != '--double-prev'
      && currElement != '--discard-next'
    ) {
      result.push(currElement);
    }
    
  }
  return result;
}

// console.log(transform([1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5]))

module.exports = {
  transform
};

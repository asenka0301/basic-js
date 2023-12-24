const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const firstWordLetters = {};
  const secondWordLetters = {};

  for (let i = 0; i < s1.length; i++) {
    if (!firstWordLetters[s1[i]]) {
      firstWordLetters[s1[i]] = 1;
    } else {
      firstWordLetters[s1[i]] += 1;
    }
  }

  for (let i = 0; i < s2.length; i++) {
    if (!secondWordLetters[s2[i]]) {
      secondWordLetters[s2[i]] = 1;
    } else {
      secondWordLetters[s2[i]] += 1;
    }
  }

  let commonCount = 0;
  let keys1 = Object.keys(firstWordLetters);
  for (let i = 0; i < keys1.length; i++) {
    const currCharacter = keys1[i];
    if (secondWordLetters[currCharacter]) {
      let firstWordCharacterOcc = firstWordLetters[currCharacter];
      let secondWordCharacterOcc = secondWordLetters[currCharacter];
      commonCount += Math.min(firstWordCharacterOcc, secondWordCharacterOcc);
    }
  }

  return commonCount;
}

module.exports = {
  getCommonCharacterCount
};

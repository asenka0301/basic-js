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

function createZeroMatrix(ncols, nrows) {
  const zeroMatrix = [];
  for (let rown = 0; rown < nrows; rown++) {
    let row = [];
    for (let coln = 0; coln < ncols; coln++) {
      row.push(0);
    }
    zeroMatrix.push(row);
  }
  return zeroMatrix;
}

function minesweeper(matrix) {
  const nrows = matrix.length;
  const ncols = matrix[0].length;
  const resultMatrix = createZeroMatrix(ncols, nrows);

  for (let row = 0; row < nrows; row++) {
    for (let col = 0; col < ncols; col++) {
      let bombsCount = 0;

      for (let i = row - 1; i <= row + 1; i++) {
        for (let j = col - 1; j <= col + 1; j++) {
          if (
            (i != row || j != col)
            && i >= 0 && i < nrows
            && j >= 0 && j < ncols
            && matrix[i][j] === true
          ) {
            bombsCount += 1;
          }
        } 
      }
      resultMatrix[row][col] = bombsCount;
    }
  }
  return resultMatrix;
}

module.exports = {
  minesweeper
};

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  const matrix = new Array(n).fill(0).map(() => new Array(n).fill(0));

  let i = 0,
    j = 0,
    k = 0,
    start = 0,
    end = n - 1;

  while (i < n * n) {
    i++;
    matrix[j][k] = i;

    if (j === start && k < end) {
      k++;
      continue;
    }

    if (k === end && j < end) {
      j++;
      continue;
    }

    if (j === end && k > start) {
      k--;
      continue;
    }

    if (k === start && j > start) {
      j--;
    }

    if (j === start && k === start) {
      start++;
      end--;
      j++;
      k++;
    }
  }

  return matrix;
};

console.log(generateMatrix(4));

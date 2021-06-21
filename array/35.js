/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0,
    right = nums.length - 1,
    i;

  while (left <= right) {
    i = Math.floor((left + right) / 2);

    if (nums[i] === target) {
      break;
    }
    if (nums[i] < target) {
      left = i + 1;
    }
    if (nums[i] > target) {
      right = i - 1;
    }
  }

  if (nums[i] >= target) {
    return i;
  } else if (nums[i] < target) {
    return i + 1;
  }
};

console.log(searchInsert([1, 3, 5, 6], 7));

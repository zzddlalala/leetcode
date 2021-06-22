/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let left = 0,
    right = 0,
    minLen = nums.length;
  let sum = nums[0];

  while (right < nums.length) {
    if (sum < target) {
      right++;
      sum = sum + nums[right];
    } else {
      if (minLen > right - left + 1) {
        minLen = right - left + 1;
      }
      sum = sum - nums[left];
      left++;
    }
  }

  return left ? minLen : 0;
};

console.log(minSubArrayLen(4, [1,4,4]));

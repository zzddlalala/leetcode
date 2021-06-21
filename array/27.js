/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function (nums, val) {
  let right=0, left = 0;
  while (right < nums.length) {
    console.log(nums)

      if (nums[right] === val) {
          right++
      } else {
          nums[left] = nums[right]
          right++;
          left++
      }
  }

  return left
};

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));

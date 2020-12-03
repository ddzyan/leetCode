// 数组特性解法
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    const targetIndex = nums.indexOf(target - element, index + 1);
    if (targetIndex !== -1) {
      return [index, targetIndex];
    }
  }
};

console.log(twoSum([3, 3, 5, 6], 6));

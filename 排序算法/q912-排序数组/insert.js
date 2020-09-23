const assert = require('assert');

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArray = function (nums) {
  const len = nums.length;
  // 无序空间长度
  for (let i = 1; i < len; i++) {
    const value = nums[i];
    let j = i - 1;
    // 有序空间腾出一个位置给无序元素
    for (; j >= 0; j--) {
      if (nums[j] > nums[j + 1]) {
        const tmp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = tmp;
      } else {
        break;
      }
    }
    nums[j + 1] = value;
  }
  console.log(nums);
  return nums;
};

assert.strictEqual(
  sortArray([5, 2, 3, 1]).toString(),
  [1, 2, 3, 5].toString(),
  '排序结果错误'
);

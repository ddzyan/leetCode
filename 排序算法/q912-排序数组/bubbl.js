const assert = require('assert');

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArray = function (nums) {
  const len = nums.length;
  let isSort = false;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i; j++) {
      if (nums[j] > nums[j + 1]) {
        const tmp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = tmp;
        isSort = true;
      }
    }
    if (!isSort) break;
  }
  return nums;
};

assert.strictEqual(
  sortArray([5, 2, 3, 1]).toString(),
  [1, 2, 3, 5].toString(),
  '排序结果错误'
);

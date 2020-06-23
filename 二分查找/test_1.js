/*
  由于数组是按照升序排序，所以先找到数组中位数
  如果目标等于中位数则直接返回
  如果目标小于中位数，则只要遍历中位数以前的就可以
  如果目标大于中位数，则只要遍历中位数以后的就可以
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let res = -1;

  const len = nums.length;

  if (len === 1) {
    if (nums[0] === target) {
      res = 0;
    }
    return res;
  }

  const medianIndex = Math.floor(len / 2);
  const medianData = nums[medianIndex];
  for (let i = target > medianData ? medianIndex : 0; i < nums.length; i++) {
    const element = nums[i];
    if (element === target) {
      res = i;
    }
  }

  return res;
};

console.log(search([-1, 0, 3, 5, 9, 12], 9));
console.log(search([-1, 0, 3, 5, 9, 12], 2));
console.log(search([5], 5));
console.log(search([-1, 0, 5], 5));

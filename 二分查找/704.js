/*
  将内容分为左右两部分，判断目标值再那个区间，再每次缩小一半，直到获得最终答案
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;
  let m = Number.parseInt(r / 2);
  while (l <= r) {
    if (nums[m] === target) return m;
    if (nums[m] < target) {
      l = m + 1;
    } else {
      r = m - 1;
    }
    m = l + Number.parseInt((r - l) / 2);
  }
  return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 9));
console.log(search([-1, 0, 3, 5, 9, 12], 2));
console.log(search([5], 5));
console.log(search([-1, 0, 5], 5));
console.log(search([-1, 0, 3, 5, 9, 12], 9));

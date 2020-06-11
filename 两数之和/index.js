/**
 *  需求：给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标
*/

/**
 * 每次移除并且获取数组最后一个元素，使用数组特有indexOf查询是否存在目标差值
 * @param {Array} nums 取值数组
 * @param {number} target 目标值
 */
function twoSum_1(nums, target) {
  let i = nums.length - 1;
  while (i > 0) {
    const startNumber = nums.pop();
    const endIndex = nums.indexOf(target - startNumber);
    if (endIndex !== -1) {
      return [i, endIndex];
    }
    i--;
  }
}

/**
 * 遍历每个值的组合，查找出复合要求的组合
 * @param {Array} nums 取值数组
 * @param {number} target 目标值
 */
function twoSum_2(nums, target) {
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if ((nums[i] + nums[j]) === target) {
        return [i, j];
      }
    }
  }
}

console.log(twoSum_1([2, 7, 8, 9], 9));
console.log(twoSum_2([2, 7, 8, 9], 9));

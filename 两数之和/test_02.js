// hashMap解法

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  const indexArr = [];
  const hashMap = new Map();
  for (let index = 0; index < nums.length; index++) {
    const item = nums[index];
    if (hashMap.has(item)) {
      indexArr[0] = index;
      indexArr[1] = hashMap.get(item);
      return indexArr;
    }
    hashMap.set(target - item, index);
  }
};

console.log(twoSum([3, 2, 5, 6], 9));

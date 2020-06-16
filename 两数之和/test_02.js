// hashMap解法

const HashMap = require('./HashMap');

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  const indexArr = [];
  const hashMap = new HashMap();
  for (let index = 0; index < nums.length; index++) {
    const item = nums[index];
    if (hashMap.containsKey(item)) {
      indexArr[0] = index;
      indexArr[1] = hashMap.get(item);
      return indexArr;
    }
    hashMap.put(target - item, index);
  }
};

console.log(twoSum([3, 2, 5, 6], 9));

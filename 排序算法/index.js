/**
 * 冒泡排序
 * @param {Array} nums 
 */
const sortArray_1 = function (nums) {
  const len = nums.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (nums[j + 1] < nums[j]) {
        [nums[j + 1], nums[j]] = [nums[j], nums[j + 1]]
      }
    }
  }
  return nums;
};

/**
 * 选择排序
 * @param {Array} nums 
 */
const sortArray_2 = function (nums) {
  const len = nums.length;
  let minIndex = 0;
  for (let i = 0; i < len - 1; i++) {
    minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (nums[j] < nums[minIndex]) {
        minIndex = j;
      }
    }
    [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];
  }
  return nums;
}

const sortArray = [1, 9, 7, 2, 4, 5];

console.log(sortArray_1(sortArray));
console.log(sortArray_2(sortArray));
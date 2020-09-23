const assert = require('assert');

/**
 * @param {number[]} arr
 * @return {number[]}
 */
const sortArray = function (arr) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    let index = i;
    // 选择出未排序区间最小元素下标
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[index]) {
        index = j;
      }
    }

    const tmp = arr[i];
    arr[i] = arr[index];
    arr[index] = tmp;
  }
  console.log(arr);
  return arr;
};

assert.strictEqual(
  sortArray([5, 2, 3, 1]).toString(),
  [1, 2, 3, 5].toString(),
  '排序结果错误'
);

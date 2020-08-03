// 415
/**
 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。

注意：

num1 和num2 的长度都小于 5100.
num1 和num2 都只包含数字 0-9.
num1 和num2 都不包含任何前导零。
你不能使用任何內建 BigInteger 库， 也不能直接将输入的字符串转换为整数形式。
 
*/

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 * @description 时间复杂度 O(max(num1,num2))
 */
const addStrings = function (num1, num2) {
  let len1 = num1.length;
  let len2 = num2.length;
  let tmp = 0;
  let res = '';

  while (len1 || len2) {
    if (len1) {
      // --a 先自己-1，再进行赋值
      // a-- 先赋值，再自己-1
      tmp += +num1[--len1];
    }

    if (len2) {
      tmp += +num2[--len2];
    }
    res = (tmp % 10) + res;
    if (tmp > 9) {
      tmp = 1;
    } else {
      tmp = 0;
    }
  }
  if (tmp) res = 1 + res;
  return res;
};

console.log(addStrings('1002', '1003'));

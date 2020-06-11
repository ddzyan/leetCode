const asserts = require('assert');

// 反转字符串里的单词
const reverseWords = (s) => {
  const oldStrArr = s.split(' ');
  // 去除多余空格
  const oldStrArrNotTrim = oldStrArr.filter((item) => item.length > 0);
  // 反转数组
  oldStrArrNotTrim.reverse();
  // 返回拼接字符串
  return oldStrArrNotTrim.join(' ');
};

const newStr = reverseWords('  hello world!  ');
console.log('转换结果', newStr);
asserts.equal(newStr, 'world! hello', '结果错误');

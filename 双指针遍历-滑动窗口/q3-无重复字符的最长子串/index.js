// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。


/* 示例 1:

输入: "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。 */

/* 示例 2:

输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。 */

const assert = require('assert');

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
  if (!s.length) return 0;
  let maxLen = 1;
  for (let i = 0; i < s.length; i++) {
    const j = s.indexOf(s.charAt(i), i + 1);
    if (j !== -1) {
      maxLen = Math.max(maxLen, j - i);
    } else {
      maxLen = Math.max(maxLen, s.length - i);
    }
  }
  console.log(s, maxLen);
  return maxLen;
};

assert(lengthOfLongestSubstring('au') === 2);
assert(lengthOfLongestSubstring('') === 0);
assert(lengthOfLongestSubstring('bbbbb') === 1);
assert(lengthOfLongestSubstring('abcabcbb') === 3);
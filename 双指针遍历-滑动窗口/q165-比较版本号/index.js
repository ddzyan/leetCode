const assert = require('assert');

/**
 *
 * @param {string} v1
 * @param {string} v2
 */
const compareVersion = function (v1, v2) {
  if (!v1 || !v2) return 0;

  const arr1 = v1.split('.');
  const arr2 = v2.split('.');

  const len = Math.max(arr1.length, arr2.length);
  let diff = 0;
  let i = 0;
  while (diff === 0 && i < len) {
    diff = Number.parseInt(arr1[i] || 0) - Number.parseInt(arr2[i] || 0);
    i++;
  }

  if (diff > 0) {
    return 1;
  }

  if (diff < 0) {
    return -1;
  }

  return 0;
};

assert.strictEqual(compareVersion('1.1', '1.1.2'), -1);
assert.strictEqual(compareVersion('1.1', '1.1.0'), 0);
assert.strictEqual(compareVersion('1.2', '1.1.2'), 1);

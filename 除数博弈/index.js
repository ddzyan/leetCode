/**
 题目
 爱丽丝和鲍勃一起玩游戏，他们轮流行动。爱丽丝先手开局。

最初，黑板上有一个数字 N 。在每个玩家的回合，玩家需要执行以下操作：

选出任一 x，满足 0 < x < N 且 N % x == 0 。
用 N - x 替换黑板上的数字 N 。
如果玩家无法执行这些操作，就会输掉游戏。

只有在爱丽丝在游戏中取得胜利时才返回 True，否则返回 false。假设两个玩家都以最佳状态参与游戏。

解题
当 N = 1 ---> 0 < x < 1 ，AC没法选择，BO赢 false
当 N = 2 ---> 0 < x < 2 , AC只能选择 1 ---> 0 < x < 1 BO没法选择，AC赢 true
当 N = 3 ---> 0 < x < 3 , AC只能选择 1 ---> 0 < x < 2 BO只能选择1 ---> 0 < x < 1 , 根据N=1结果，BO赢 false
当 N = 4 ---> 0 < x < 4 , AC可以选择 1,2
    当选择 1 ---> 0 < x < 3 ,BO只能选择1 ---> 0 < x < 2 根据 N=2，AC赢
当 N = 5 ---> 0 < x < 5 ，AC只能选择 1 ---> 0 < x < 4 根据N=4结论，BO赢
...
*/

/**
 * @param {number} N
 * @return {boolean}
 */
var divisorGame2 = function (N) {
  if (N === 1) {
    return false;
  }

  if (N === 2) {
    return true;
  }

  const dp = new Array(N + 1);
  dp[1] = false;
  dp[2] = true;
  for (let i = 3; i <= N; i++) {
    dp[i] = false;
    for (let j = 1; j < i; j++) {
      if (i % j === 0 && !dp[i - j]) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[N];
};

console.log(divisorGame2(3));

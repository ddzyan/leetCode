function ListNode(val) {
  this.val = val;
  this.next = null;
}

/*
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const newList = new ListNode('header');
  let str = newList;
  let val = 0;
  while (l1 || l2 || val) {
    val += ~~(l1 && l1.val) + ~~(l2 && l2.val);
    str.next = new ListNode(val % 10);
    str = str.next;
    l1 = l1 && l1.next;
    l2 = l2 && l2.next;
    val = val > 9;
  }
  return newList.next;
};

/* 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8 */

const l1 = new ListNode(5);

const e1 = new ListNode(5);

console.log(addTwoNumbers(l1, e1));

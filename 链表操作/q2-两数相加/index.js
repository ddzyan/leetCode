/* 
给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

您可以假设除了数字 0 之外，这两个数都不会以 0 开头 

输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807
*/

// 定义链表结构
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * @description
 *
 * 时间复杂度 0(max(l1.length,l2,length))
 *
 */
const addTwoNumbers = function (l1, l2) {
  // 创建一个新的头部节点，最终输出为next开始
  const newList = new ListNode('header');
  let str = newList;
  // 保存数值相加数据，如果超过10，则在下一次循环的时候保存为1
  let val = 0;
  // 链表为逆序存储
  while (l1 || l2 || val) {
    val += (l1 && l1.val) + (l2 && l2.val);
    str.next = new ListNode(val % 10);
    str = str.next;
    l1 = l1 && l1.next;
    l2 = l2 && l2.next;
    val = val > 9;
  }
  return newList.next;
};

const l1 = new ListNode(5);

const e1 = new ListNode(5);

console.log(addTwoNumbers(l1, e1));

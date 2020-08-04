// 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。

/* 
给定一个链表: 1->2->3->4->5, 和 n = 2.

当删除了倒数第二个节点后，链表变为 1->2->3->5. 
*/

// 定义链表结构
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function (head, n) {
  // 使用数组保存链表每个节点信息，并且记录链表长度
  let hashMap = [];
  let i = 0;
  while (head) {
    hashMap[i++] = head;
    head = head.next;
  }

  // 获取需要删除的链表长度
  const cur = i - n;

  // 删除头节点
  if (cur === 0) {
    return hashMap[1] || null;
  } else {
    // 重新拼装链表,如果删除尾部则需要将next指向null
    hashMap[cur - 1].next = hashMap[cur + 1] || null;
    // 删除中间节点和尾部节点
    return hashMap[0];
  }
};

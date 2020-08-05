// 给定一个链表，旋转链表，将链表每个节点向右移动 k 个位置，其中 k 是非负数。

/* 输入: 1->2->3->4->5->NULL, k = 2
输出: 4->5->1->2->3->NULL
解释:
向右旋转 1 步: 5->1->2->3->4->NULL
向右旋转 2 步: 4->5->1->2->3->NULL */

/* 输入: 0->1->2->NULL, k = 4
输出: 2->0->1->NULL
解释:
向右旋转 1 步: 2->0->1->NULL
向右旋转 2 步: 1->2->0->NULL
向右旋转 3 步: 0->1->2->NULL
向右旋转 4 步: 2->0->1->NULL */

// 定义链表结构
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 * @description 
 * 时间复杂度 O(k%size)  size 为链表长度
 */
const rotateRight = function (head, k) {
  let size = 0;
  let cur = head;
  while (cur) {
    cur = cur.next;
    ++size;
  }

  let step = k % size; // 如果移动位置等于链表长度，则无需移动
  let node = head;
  while (step > 0) {
    let last = node;
    // 找到倒数第二个节点
    while (last.next && last.next.next) {
      last = last.next;
    }

    // 获取倒数第一个节点的val
    let val = last.next.val;
    // 将倒数第二个的next跳过倒数第一个，直接执行null，实现向右移动一步
    last.next = null;
    // 使用倒数第一个阶段的 val 构建一个新的节点
    let newHead = new ListNode(val);
    // 将新的节点插入头部
    newHead.next = node;
    // 更新第一个节点
    node = newHead;
    step--;
  }

  return node;
};

const l1 = new ListNode(0);
const l2 = new ListNode(1);
const l3 = new ListNode(2);/* 
const l4 = new ListNode(4);
const l5 = new ListNode(5); */
l1.next = l2;
l2.next = l3;
/* l3.next = l4;
l4.next = l5; */

console.log(rotateRight(l1, 4));

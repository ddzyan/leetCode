
// Definition for a Node.
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {Node} head
 * @return {Node}
 */
const copyRandomList = function (head) {
  if (!head) return head;
  // 第一遍循环
  /**
   * 创建新的节链表，并且进行赋值
   * 使用 hashMap 保存新节点和老节点的关系，用于接下来的随机节点存储
   * 
   * node 为新节点的头部指针
   * temp 为临时节点
   */

  let node = new ListNode(), temp = node, map = new Map();

  let cur = head;
  while (cur) {
    temp.val = cur.val;
    temp.next = cur.next ? new ListNode() : null;
    map.set(cur, temp);
    cur = cur.next;
    temp = temp.next;
  }


  // 第二次循环,检查是否存在随机指针，如果存在则赋值给新的节点，否则赋值为null
  // 随机指针指向链表一个随机节点，所以需要将新节点的随机指针，指向新链表的随机节点
  cur = head;
  temp = node;
  while (cur) {
    temp.random = cur.random ? map.get(cur.random) : null;
    temp = temp.next;
    cur = cur.next;
  }

  return node;
};


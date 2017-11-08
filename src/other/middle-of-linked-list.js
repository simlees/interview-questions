export function middleOfLinkedList(listNode) {
  let fast = listNode;
  let slow = listNode;

  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
    if (!fast.next) {
      return slow.val;
    }
    fast = fast.next;
  }
  return slow.val;
}

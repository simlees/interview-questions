function ListNode(val) {
  this.val = val;
  this.next = null;
}

function getNumberFromList(listNode) {
  let digits = 0;
  let total = 0;
  while (listNode) {
    total += (listNode.val * Math.pow(10, digits));
    listNode = listNode.next;
  }
  return total;
}

/**
 * Take two linked lists each representing an integer (each node a digit) and return the sum as a linked list.
 * @param {[type]} l1 Linked list 1
 * @param {[type]} l2 Linked list 2
 */
export function addTwoNumbers(l1, l2) {
  const n1 = getNumberFromList(l1);
  const n2 = getNumberFromList(l2);
  const sumString = (n1 + n2).toString();

  let currentNode;

  for (let digit of sumString) {
    if (!currentNode) {
      currentNode = new ListNode(+digit);
    } else {
      let newNode = new ListNode(+digit);
      newNode.next = currentNode;
      currentNode = newNode;
    }
  }

  return currentNode;
}

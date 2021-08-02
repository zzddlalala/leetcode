/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  const dummyNode = new ListNode(0);
  dummyNode.next = head;

  let tempListNode = dummyNode;

  while (tempListNode.next) {
    if (tempListNode.next.val === val) {
      tempListNode.next = tempListNode.next.next;
    } else {
      tempListNode = tempListNode.next;
    }
  }

  return dummyNode.next;
};

// var removeElements = function (head, val) {
//   if (!head) {
//     return head;
//   }

//   head.next = removeElements(head.next, val);

//   return head.val === val ? head.next : head;
// };

console.log(listToArr(removeElements(arrToList([6, 6, 6]), 3)));

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function arrToList(arr) {
  if (!arr.length) {
    return new ListNode();
  }

  const list = arr.map((item) => new ListNode(item));

  list.forEach((item, index) => {
    if (index < list.length - 1) {
      item.next = list[index + 1];
    }
  });

  return list[0];
}

function listToArr(head) {
  const arr = [];

  let tempListNode = head;
  while (tempListNode) {
    arr.push(tempListNode.val);
    tempListNode = tempListNode.next;
  }

  return arr;
}

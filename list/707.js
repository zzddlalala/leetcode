/**
 * Initialize your data structure here.
 */
var MyLinkedList = function () {
  this.val = null;
  this.next = null;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  let i = 0;
  let node = this;

  while (i++ <= index && node) {
    node = node.next;
  }

  return node ? node.val : -1;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  const newNode = new MyLinkedList();
  newNode.val = val;
  newNode.next = this.next;
  this.next = newNode;
};

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  const newNode = new MyLinkedList();
  newNode.val = val;

  let lastNode = this;
  while (lastNode && lastNode.next) {
    lastNode = lastNode.next;
  }

  lastNode.next = newNode;
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  const newNode = new MyLinkedList();
  newNode.val = val;

  if (index < 0) {
    newNode.next = this.next;
    this.next = newNode;
  }

  let lastOneNode = this;
  let i = 0;

  while (i++ < index && lastOneNode.next) {
    lastOneNode = lastOneNode.next;
  }

  const nextOneNode = lastOneNode.next;
  lastOneNode.next = newNode;
  newNode.next = nextOneNode;
};

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0) {
    return;
  }
  let lastOneNode = this;
  let i = 0;
  while (i++ < index && lastOneNode) {
    lastOneNode = lastOneNode.next;
  }

  if (lastOneNode && lastOneNode.next) {
    lastOneNode.next = lastOneNode.next.next;
  }
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

function listToArr(head) {
  const arr = [];

  let tempListNode = head;
  while (tempListNode) {
    arr.push(tempListNode.val);
    tempListNode = tempListNode.next;
  }

  return arr;
}

const funcName = [
  'addAtHead',
  'deleteAtIndex',
  'addAtHead',
  'addAtHead',
  'addAtHead',
  'addAtHead',
  'addAtHead',
  'addAtTail',
  'get',
  'deleteAtIndex',
  'deleteAtIndex',
];
const params = [[2], [1], [2], [7], [3], [2], [5], [5], [5], [6], [4]];

function test(funcName, params) {
  const linkedList = new MyLinkedList();
  let i = 0;
  while (i < funcName.length) {
    console.log(i, funcName[i], params[i]);
    linkedList[funcName[i]](...params[i]);
    console.log(listToArr(linkedList));
    i++;
  }
}

test(funcName, params);

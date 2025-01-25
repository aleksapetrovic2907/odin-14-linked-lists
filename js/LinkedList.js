import LinkedListNode from "./LinkedListNode";

export default class LinkedList {
  constructor() {
    this.head = null;
  }

  get size() {
    let i = 0;
    let current = this.head;

    while (current.nextNode !== null) {
      current = current.nextNode;
      i++;
    }

    return i;
  }

  get tail() {
    let current = this.head;

    while (current.nextNode !== null) {
      current = current.nextNode;
    }

    return current;
  }

  append(value) {
    this.tail.nextNode = new LinkedListNode(value);
  }

  prepend(value) {
    let newHead = new LinkedListNode(value, this.head);
    this.head = newHead;
  }
}

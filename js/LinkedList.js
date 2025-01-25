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

  at(index) {
    let i = 0;
    let current = this.head;
    while (current !== null) {
      if (i === index) return current;
      current = current.nextNode;
    }

    return null;
  }

  // todo: dont get() tail. make it faster
  pop() {
    let current = this.head;
    let tail = this.tail;

    while (current.nextNode !== tail) {
      current = current.nextNode;
    }

    current.nextNode = null;
  }

  contains(value) {
    let current = this.head;

    while (current !== null) {
      if (current.value === value) {
        return true;
      }

      current = current.nextNode;
    }

    return false;
  }
}

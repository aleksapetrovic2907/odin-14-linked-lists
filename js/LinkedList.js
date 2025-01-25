import LinkedListNode from "./LinkedListNode.js";

export default class LinkedList {
  constructor() {
    this.head = null;
  }

  get size() {
    if (this.isEmpty) return 0;

    let i = 0;
    let current = this.head;

    while (current.nextNode !== null) {
      current = current.nextNode;
      i++;
    }

    return i;
  }

  get tail() {
    if (this.isEmpty) {
      return null;
    }

    let current = this.head;

    while (current.nextNode !== null) {
      current = current.nextNode;
    }

    return current;
  }

  get isEmpty() {
    return this.head === null;
  }

  append(value) {
    const newNode = new LinkedListNode(value);

    if (this.isEmpty) {
      this.head = newNode;
    } else {
      this.tail.nextNode = newNode;
    }
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
    if (this.isEmpty) return false;

    let current = this.head;

    while (current !== null) {
      if (current.value === value) {
        return true;
      }

      current = current.nextNode;
    }

    return false;
  }

  getIndexOf(value) {
    if (this.isEmpty) return null;

    let i = 0;
    let current = this.head;

    while (current !== null) {
      if (current.value === value) {
        return i;
      }

      i++;
      current = current.nextNode;
    }

    return null;
  }

  toString() {
    if (this.isEmpty) return "";

    let current = this.head;
    let string = "(" + current.value + ")";
    current = current.nextNode;

    while (current !== null) {
      string += " -> (" + current.value + ")";
    }

    return string;
  }
}

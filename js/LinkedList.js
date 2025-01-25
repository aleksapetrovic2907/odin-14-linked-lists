import LinkedListNode from "./LinkedListNode.js";

export default class LinkedList {
  constructor() {
    this.head = null;
  }

  get size() {
    let i = 0;
    let current = this.head;

    while (current !== null) {
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

  pop() {
    if (this.size === 0) {
      throw new Error("Cannot pop node from an empty LinkedList.");
    }

    if (this.size === 1) {
      const head = this.head;
      this.head = null;
      return head;
    }

    let current = this.head;

    while (current.nextNode.nextNode !== null) {
      current = current.nextNode;
    }

    let poppedNode = current.nextNode;
    current.nextNode = null;
    return poppedNode;
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

  insertAt(value, index) {
    const newNode = new LinkedListNode(value);

    if (this.isEmpty) {
      if (index === 0) {
        this.head = newNode;
        return;
      }

      throw new RangeError("Index is out of bounds.");
    }

    let i = 0;
    let current = this.head;

    while (current !== null) {
      if (i === index - 1) {
        newNode.nextNode = current.nextNode;
        current.nextNode = newNode;
        return;
      }

      i++;
      current = current.nextNode;
    }

    throw new RangeError("Index is out of bounds.");
  }

  toString() {
    if (this.isEmpty) return "";

    let current = this.head;
    let string = "(" + current.value + ")";
    current = current.nextNode;

    while (current !== null) {
      string += " -> (" + current.value + ")";
      current = current.nextNode;
    }

    return string;
  }
}

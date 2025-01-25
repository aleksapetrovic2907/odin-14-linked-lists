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

  get head() {
    return this.head;
  }

  get tail() {
    let current = this.head;

    while (current.nextNode !== null) {
      current = current.nextNode;
    }

    return current;
  }
}

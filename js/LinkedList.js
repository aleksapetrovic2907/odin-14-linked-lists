export default class LinkedList {
  constructor() {
    this.head = null;
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

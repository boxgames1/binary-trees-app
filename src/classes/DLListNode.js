//Needs a value, prev and next node
class DLListNode {
  constructor(prev, value, next) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
  getNext() {
    return this.next;
  }
  setNext(next) {
    this.next = next;
  }
  getPrev() {
    return this.prev;
  }
  setPrev(prev) {
    this.prev = prev;
  }
  getValue() {
    return this.value;
  }
  setValue(value) {
    this.value = value;
  }
}

export default DLListNode;

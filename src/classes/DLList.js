import DLListNode from "./DLListNode";
import DLListIterator from "./DLListIterator";

class DLList {
  constructor(values) {
    this.header = new DLListNode(null, null, null);
    this.tail = new DLListNode(this.header, null, null);
    this.header.setNext(this.tail);
    this.elements = 0;
  }
  // Cost: O(1)
  erase(pos) {
    if (pos.assertIsValid()) {
      let curr = pos.current();
      const prev = curr.getPrev();
      const next = curr.getNext();
      prev.setNext(next);
      next.setPrev(prev);
      curr = null;
      this.elements--;
      return DLListIterator[Symbol.iterator](next, this);
    }
  }
  // Cost: O(1)
  insert(pos, val) {
    const endVal = this.end().current();
    if (
      (pos.assertIsValid() || pos.current() === endVal) &&
      this.find(val).current() === endVal
    ) {
      const curr = pos.current();
      const prev = curr.getPrev();
      const newNode = new DLListNode(prev, val, curr);
      prev.setNext(newNode);
      curr.setPrev(newNode);
      this.elements++;
      return DLListIterator[Symbol.iterator](newNode, this);
    }
    return DLListIterator[Symbol.iterator](null, this);
  }
  // Cost: O(n)
  find(item) {
    const iterator = this.begin();
    while (iterator.current() !== this.end().current()) {
      if (iterator.current() !== null && iterator.current().getValue() === item)
        break;
      iterator.next();
    }
    return iterator;
  }
  // Cost: O(n)
  clear() {
    while (!this.empty()) {
      this.erase(this.begin());
    }
  }
  // Cost: O(1)
  empty() {
    return this.elements === 0;
  }
  // Cost: O(1)
  begin() {
    return DLListIterator[Symbol.iterator](this.header.getNext(), this);
  }
  // Cost: O(1)
  end() {
    return DLListIterator[Symbol.iterator](this.tail, this);
  }
  // Cost: O(1)
  front() {
    return this.header.getNext();
  }
  // Cost: O(1)
  back() {
    return this.header.getPrev();
  }
  // Cost: O(1)
  push_front(value) {
    this.insert(this.begin(), value);
  }
  // Cost: O(1)
  push_back(item) {
    this.insert(this.end(), item);
  }
  // Cost: O(1)
  pop_front() {
    this.erase(this.begin());
  }
  // Cost: O(1)
  pop_back() {
    const itr = this.end();
    itr.prev();
    this.erase(itr);
  }

  // Cost: O(n)
  values() {
    const iterator = this.begin();
    const values = [];
    const reach = this.end();
    while (iterator.current() !== reach.current()) {
      values.push(iterator.current().getValue());
      iterator.next();
    }
    return values;
  }

  print() {
    const iterator = this.begin();
    let iterable = false;
    while (!iterable && iterator.current() !== null) {
      console.log(iterator.current().getValue());
      iterable = iterator.next().done;
    }
  }
}

export default DLList;

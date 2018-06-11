// Iterator implementation
const DLListIterator = {
  [Symbol.iterator]: (node, dllist) => {
    let current = node;
    if (node === null) current = dllist.header.getNext();
    return {
      assertIsValid: () => {
        if (current === null || current.getPrev() === null) return false;
        return true;
      },
      next: () => {
        if (
          current === null ||
          current.getNext() === null ||
          current === dllist.tail ||
          current.getNext() === dllist.tail
        ) {
          return {
            done: true
          };
        }
        current = current.getNext();
        return {
          value: current,
          done: false
        };
      },
      prev: () => {
        if (
          current === null ||
          current.getPrev() === null ||
          current === dllist.header ||
          current.getPrev() === dllist.header
        ) {
          return {
            done: true
          };
        }
        current = current.getPrev();
        return {
          value: current,
          done: false
        };
      },
      current: () => {
        return current;
      },
      reset: () => {
        current = dllist.header.getNext();
      },
      reset_back: () => {
        current = dllist.tail;
      }
    };
  }
};

export default DLListIterator;

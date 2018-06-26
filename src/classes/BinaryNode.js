//Needs a value, left and right node
class BinaryNode {
  constructor(key, value) {
    this.value = value;
    this.key = key;
    this.left = null;
    this.right = null;
  }
  left() {
    return this.left;
  }
  right() {
    return this.right;
  }
  // Cost: O(1)
  free() {
    this.left = null;
    this.right = null;
  }
}

export default BinaryNode;

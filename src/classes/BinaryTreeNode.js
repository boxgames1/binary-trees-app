import BinaryNode from "./BinaryNode";
class BinaryTreeNode {
  constructor() {
    this.root = null;
  }
  insert(key, value) {
    if (!Number.isInteger(key)) return;
    const newNode = new BinaryNode(key, value);
    if (this.root === null) this.root = newNode;
    else this.insertNode(this.root, newNode);
  }
  // Cost: O(n)
  insertNode(node, newNode) {
    if (newNode.key < node.key) {
      if (node.left === null) node.left = newNode;
      else this.insertNode(node.left, newNode);
    } else if (newNode.key === node.key) {
      node.value = newNode.value;
    } else {
      if (node.right === null) node.right = newNode;
      else this.insertNode(node.right, newNode);
    }
  }
  remove(key) {
    if (!Number.isInteger(key)) return;
    this.root = this.removeNode(this.root, key);
  }
  // Cost: O(n)
  removeNode(node, key) {
    if (node === null) return null;
    else if (key < node.key) {
      node.left = this.removeNode(node.left, key);
      return node;
    } else if (key > node.key) {
      node.right = this.removeNode(node.right, key);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }

      const aux = this.findMinimumNode(node.right);
      node.key = aux.key;

      node.right = this.removeNode(node.right, aux.key);
      return node;
    }
  }
  // Cost: O(1)
  empty() {
    return this.root === null;
  }
  // Cost: O(1)
  clear() {
    this.root = null;
  }
  // Cost: O(n)
  findMinimumNode(node) {
    if (node.left === null) return node;
    else return this.findMinimumNode(node.left);
  }

  // Cost: O(n)
  inorder(node, fn) {
    if (node !== null) {
      this.inorder(node.left, fn);
      fn(node);
      this.inorder(node.right, fn);
    }
  }
  // Cost: O(n)
  preorder(node, fn) {
    if (node !== null) {
      fn(node);
      this.preorder(node.left, fn);
      this.preorder(node.right, fn);
    }
  }
  // Cost: O(n)
  postorder(node, fn) {
    if (node !== null) {
      this.postorder(node.left, fn);
      this.postorder(node.right, fn);
      fn(node);
    }
  }

  find(node, key) {
    if (node === null) return null;
    else if (key < node.key) return this.find(node.left, key);
    else if (key > node.key) return this.find(node.right, key);
    else return node;
  }
  levelOrder() {
    if (!this.root) return [];
    var array = [];
    search(this.root, 1, 1);

    function search(node, level, index) {
      if (node) {
        const count = Math.pow(2, level - 1);
        if (array.length < level) {
          array.push(Array(count).fill(""));
        }
        var arr = array[level - 1];
        arr[index - 1] = node;
        const leftIndex = 2 * index - 1;
        const rightIndex = 2 * index;
        search(node.left, level + 1, leftIndex);
        search(node.right, level + 1, rightIndex);
      } else {
        return;
      }
    }

    return array;
  }

  values() {
    if (!this.root) return [];
    var array = [];
    search(this.root, 1);

    function search(node, level) {
      if (node !== null) {
        array.push(node.value);
        search(node.left, level + 1);
        search(node.right, level + 1);
      } else {
        array.push("");
      }
    }
    return array;
  }
}

export default BinaryTreeNode;

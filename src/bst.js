class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class Bst {
  constructor() {
    this.root = null;
  }
  //insert data
  insert = (val) => {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  };
  insertNode = (node, newNode) => {
    if (newNode.val === node.val) return undefined;
    if (newNode.val < node.val) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  };

  //find a value
  find = (val) => {
    if (!this.root) return undefined;
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (val < current.val) current = current.left;
      else if (val > current.val) current = current.right;
      else found = true;
    }
    if (!found) {
      return "Not found";
    }
    return current;
  };

  //inorder - left -> mid -> right
  inorder = (root) => {
    const nodes = [];
    if (root) {
      this.inorder(root.left);
      nodes.push(root.val);
      this.inorder(root.right);
    }
    return nodes;
  };
}

const bst = new Bst();
bst.insert(20);
bst.insert(15);
bst.insert(25);
console.log(bst.root);
console.log(bst.find(25));
console.log("inorder... ", bst.inorder(bst.root));

//postorder - left -> right -> mid
const postorder = (root) => {
  const nodes = [];
  if (root) {
    postorder(root.left);
    postorder(root.right);
    nodes.push(root.val);
  }
  return nodes;
};

//preorder - mid -> left -> right
const preorder = (root) => {};

class BST {

  constructor(root) {
    this.root = root;
    this.previousNode = root;
  }

  insert(node) {
    let self = this;
    this._searchNodes(this.root, node.key, () => {
      if (node.key < self.previousNode.key){
        //insert left
        self.previousNode.left = node;
      } else if (node.key > self.previousNode.key){
        //insert right
        self.previousNode.right = node;
      }
    });
  }

  //TODO
  remove(key) {
    // let node = this.search(key);
    // if(!node.left && !node.right){
    //   if(key < this.previousNode.key){
    //     this.previousNode.left = null;
    //   } else if(key > this.previousNode.key){
    //     this.previousNode.right = null
    //   }
    // }
  }

  toArray() {
    let arr = [];
    let self = this;
    this.previousNode = this.root;

    this._traverse(this.root, node => {
      arr.push(node.key);
    });

    return arr;
  }

  _traverse(node, action) {
    //go down left side
    if(node.left){
      this.previousNode = node.left;
      this._traverse(node.left, action);
    }

    //do something for every node
    action(node);

    //go down right side
    if(node.right){
      this.previousNode = node.right;
      this._traverse(node.right, action);
    }

  }

  search(key) {
    return this._searchNodes(this.root, key, function() {
      return false;
    });
  }

  _searchNodes(node, key, notFoundCB) {
    if(node === null){
      notFoundCB();
    } else if(key === node.key) {
      return node;
    } else if(key < node.key) {
      //traverse left
      this.previousNode = node;
      this._searchNodes(node.left, key, notFoundCB);
    } else if(key > node.key) {
      //traverse right
      this.previousNode = node;
      this._searchNodes(node.right, key, notFoundCB);
    }
  }
}

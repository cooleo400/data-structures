"use strict"

// const bst = new BST(new Node(6));
// bst.insert(new Node(4));
// bst.insert(new Node(8));
// bst.insert(new Node(5));
// bst.insert(new Node(2));
// bst.insert(new Node(3));
// bst.insert(new Node(1));
// bst.remove(1);
// console.log(bst.toArray());

var sos = new SetOfStacks();
sos.push(3);
sos.push(5);
sos.push(1);
sos.push(9);
sos.push(15);
sos.push(20);
console.log(sos.pop());
console.log(sos.pop());
console.log(sos.pop());
console.log(sos.pop());
sos.push(90);
sos.push(12);
sos.push(82);
sos.push(53);
console.log(sos.popAt(1));
sos.print();

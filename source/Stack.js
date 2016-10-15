"use strict"

class Stack {
  constructor(previousStackIndex) {
    this.stack = [];
  }

  push(num) {
    this.stack.push(num);
  }

  pop() {
    if(this.stack.length > 0){
      return this.stack.splice(this.stack.length-1,1)[0];
    } else {
      return null
    }
  }

  peek() {
    return this.stack[this.stack.length-1];
  }

  get length() {
    return this.stack.length;
  }

  toArray() {
    return this.stack;
  }

}

"use strict"

class SetOfStacks {
  constructor() {
    this.threshhold = 2;
    this.stacks = [];
    this.currentStackIndex = -1;
    this.createNewStack();
  }

  push(num) {
    if(this.stacks[this.currentStackIndex].length >= this.threshhold){
      this.createNewStack()
    }

    this.stacks[this.currentStackIndex].push(num)
  }

  pop() {
    let num = this.stacks[this.currentStackIndex].pop();
    let _return;

    if(num === null) {
      this.currentStackIndex--;
      _return = this.stacks[this.currentStackIndex].pop();
    } else {
      _return = num;
    }

    //TODO Remove unused stack
    // if(this.stacks[this.currentStackIndex].length <= 0){
    //   this.removeStack();
    // }

    return _return;

  }

  popAt(index) {
    return this.stacks[index].pop();
  }

  createNewStack() {
    this.currentStackIndex++;
    this.stacks.push(new Stack())
  }

  removeStack() {
    this.stacks.splice(this.currentStackIndex, 1);
  }

  print() {
    for(var i = 0; i < this.stacks.length; i++){
      console.log(this.stacks[i].toArray());
    }
  }
}

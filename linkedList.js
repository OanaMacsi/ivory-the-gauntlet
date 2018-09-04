class LinkedList {
    constructor(...values) {
      this.head = null;
      this.length = 0;
      this.addToHead(...values);
    }
    _addSingleItemToHead(value) {
      const newNode = { value };
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
    }
    addToHead(...values) {
      values.forEach(value => this._addSingleItemToHead(value));
      return this;
    }
    removeFromHead() {
      if (this.length === 0) {
        return undefined;
      }
      const value = this.head.value;
      this.head = this.head.next;
      this.length--;
  
      return value;
    }
    remove(val) {
      if (this.length === 0) {
        return undefined;
      }
  
      if (this.head.value === val) {
        this.removeFromHead();
        return this;
      }
  
      let previousNode = this.head;
      let thisNode = previousNode.next;
  
      while (thisNode) {
        if (thisNode.value === val) {
          break;
        }
        previousNode = thisNode;
        thisNode = thisNode.next;
      }
  
      if (thisNode === null) {
        return undefined;
      }
  
      previousNode.next = thisNode.next;
      this.length--;
      return this;
    }
  
    find(val) {
        let currentNode = this.head;
  
  while(currentNode) {
    if (currentNode.value === val) return currentNode;
    currentNode = currentNode.next; 
  }
  return null;
    //   let thisNode = this.head;
    //   while (thisNode) {
    //     if (thisNode.value === val) {
    //       return thisNode;
    //     }
    //     thisNode = thisNode.next;
    //   }
    //   return thisNode;
    }
  }
  
  module.exports = LinkedList
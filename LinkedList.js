class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  head = null;
  tail = null;

  append(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  pop() {
    if (this.tail === null && this.head === null) {
      return null;
    }
    if (this.head.next === null) {
      this.head = null;
      return;
    }

    let currentNode = this.head;
    for (let index = 0; index < this.length() - 2; index++) {
      console.log(currentNode);
      currentNode = currentNode.next;
    }
    this.tail = currentNode;
    this.tail.next = null;
    // console.log(currentNode);
  }

  length() {
    let count = 1;
    let currentNode = this.head;
    while (currentNode.next != null) {
      const nextNode = currentNode.next;
      currentNode = nextNode;
      count++;
    }
    return count;
  }
}

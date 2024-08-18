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

  prepend(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
      const nextNode = this.head;
      this.head = newNode;
      this.head.next = nextNode;
    }
  }

  insertAt(data, index) {
    if (index < 0 || index >= this.length()) {
      return null;
    }
    const newNode = new Node(data);
    let currentNum = 0;
    let currentNode = this.head;
    while (currentNode.next !== null) {
      if (index === 0) {
        this.head = newNode;
        newNode.next = currentNode;
      } else {
        if (currentNum === index - 1) {
          newNode.next = currentNode.next;
          currentNode.next = newNode;
        }
      }
      const nextNode = currentNode.next;
      currentNode = nextNode;
      currentNum++;
    }
  }

  removeAt(index) {
    // console.log(index >= this.length());
    if (index < 0 || index >= this.length()) {
      console.log("removeAt");
      return null;
    }

    if (index === 0) {
      const nextNode = this.head.next;
      this.head.next = null;
      this.head = nextNode;
    } else if (index === this.length() - 1) {
      // as last index is 1 less
      let currentNode = this.head;
      // while()
      for (let index = 0; index < this.length() - 2; index++) {
        // const element = array[index];
        console.log(currentNode);
        currentNode = currentNode.next;
      }
      this.tail = currentNode;
      this.tail.next = null;
    }
    for (let i = 0; i < this.length(); i++) {
      // const element = array[i];
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

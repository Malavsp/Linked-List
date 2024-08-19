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
    if (data === undefined) {
      throw new Error("Missing data for append method.");
    }
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
    if (data === undefined) {
      throw new Error("Missing data for prepend method.");
    }
    const newNode = new Node(data);
    const nextNode = this.head;
    this.head = newNode;
    this.head.next = nextNode;
  }

  insertAt(data, index) {
    if (data === undefined || index === undefined) {
      throw new Error("Missing data or index for insertAt method.");
    }

    const newNode = new Node(data);
    let currentNum = 0;
    let currentNode = this.head;
    if (index === 0) {
      // this.head = newNode;
      // newNode.next = currentNode;
      this.prepend(data);
      return true;
    }
    while (currentNode.next !== null) {
      if (currentNum === index - 1) {
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        return true;
      }
      const nextNode = currentNode.next;
      currentNode = nextNode;
      currentNum++;
    }
    return false;
  }

  removeAt(index) {
    if (index === undefined) {
      throw new Error("Missing index for removeAt method.");
    }

    if (index < 0 || index >= this.length() || this.head === null) {
      return null;
    }

    if (index === 0) {
      const nextNode = this.head.next;
      this.head.next = null;
      this.head = nextNode;
      return true;
    } else if (index === this.length() - 1) {
      // to remove and set tail
      this.pop();
      return true;
    } else {
      let currentNode = this.head;
      let nextNode;
      for (let i = 0; i < this.length(); i++) {
        if (i === index - 1) {
          nextNode = currentNode.next.next;
          currentNode.next = nextNode;
        }
        nextNode = currentNode.next;
        currentNode = nextNode;
      }
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
      currentNode = currentNode.next;
    }
    this.tail = currentNode;
    this.tail.next = null;
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

//Example Use-case

// const linkedList1 = new LinkedList();
// linkedList1.append("0");
// linkedList1.append("1");
// linkedList1.append("3");
// linkedList1.insertAt("2", 2);
// linkedList1.append("4");
// linkedList1.insertAt("5", 5); // will not insert as not enough elements
// linkedList1.pop();

// linkedList1.pop();
// linkedList1.append("4");
// linkedList1.removeAt(0);
// linkedList1.prepend("0");

// console.log(linkedList1.head);
// console.log(linkedList1.tail);
// console.log(linkedList1.length());

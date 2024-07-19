class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  append(data) {
    const node = new Node(data);
    if (this.head == null) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = node;
      this.length++;
    }
  }
  prepend(data) {
    const node = new Node(data);
    node.next = this.head;
    this.head = node;
    this.length++;
  }
  size() {
    return this.length + 1;
  }
  headNode() {
    return this.head;
  }
  tail() {
    let current = this.head;
    while (current.next != null) {
      current = current.next;
    }
    return current;
  }
  at(index) {
    let current = this.head;
    for (let i = 0; i < index; i++) {
      if (current.next == null) {
        return "Index does not exist";
      }
      current = current.next;
    }
    return current;
  }
  pop() {
    let current = this.head;
    while (current.next.next != null) {
      current = current.next;
    }
    current.next = null;
  }
  contains(value) {
    let current = this.head;
    while (current != null) {
      if (current.data == value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }
  find(value) {
    let current = this.head;
    for (let i = 0; i <= this.length; i++) {
      if (current.data == value) {
        return i;
      } else if (current.next == null) {
        return "Value does not exist";
      }
      current = current.next;
    }
  }
  toString() {
    let current = this.head;
    let string = ``;
    while (current != null) {
      string += `(${current.data}) -> `;
      current = current.next;
    }
    string += "null";
    return string;
  }
}

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.prepend("parrot");
list.prepend("hamster");
list.append("snake");
list.append("turtle");
console.log(list.toString());

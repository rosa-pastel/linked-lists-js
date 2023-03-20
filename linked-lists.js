class Node {
  constructor(val = null, next = null) {
    this.nextNode = next;
    this.val = val;
  }

  value() {
    return this.val;
  }
}

class LinkedList {
  constructor(head = null) {
    this.headNode = head;
  }

  append(value) {
    if (!this.headNode) {
      this.headNode = new Node(value);
    } else {
      this.tail().nextNode = new Node(value);
    }
    return this;
  }

  prepend(value) {
    this.headNode = new Node(value, this.headNode);
    return this;
  }

  insertAt(value, index) {
    this.at(index - 1).nextNode = new Node(value, this.at(index));
    return this;
  }

  removeAt(index) {
    if (index === 0) {
      this.headNode = this.at(1);
    } else {
      this.at(index - 1).nextNode = this.at(index + 1);
    }
    return this;
  }

  pop() {
    this.at(this.size() - 2).nextNode = null;
    return this;
  }

  size() {
    let node = this.headNode;
    if (!node) return 0;
    let size = 1;
    while (node.nextNode) {
      node = node.nextNode;
      size++;
    }
    return size;
  }

  head() {
    return this.headNode;
  }

  tail() {
    let node = this.headNode;
    while (node && node.nextNode) {
      node = node.nextNode;
    }
    return node;
  }

  at(index) {
    let node = this.headNode;
    let currentIndex = 0;
    while (currentIndex < index && node) {
      node = node.nextNode;
      currentIndex++;
    }
    return node;
  }

  contains(value) {
    let node = this.headNode;
    while (node) {
      if (node.value() === value) return 1;
      node = node.nextNode;
    }
    return 0;
  }

  find(value) {
    let node = this.headNode;
    let index = 0;
    while (node) {
      if (node.value() === value) return index;
      index++;
      node = node.nextNode;
    }
    return null;
  }

  toString() {
    let node = this.headNode;
    let string = "";
    while (node) {
      string += `(${node.value()}) -> `;
      node = node.nextNode;
    }
    string += `(null)`;
    return string;
  }
}

const myPrettyList = new LinkedList();

myPrettyList.append("Michael").append("Holly").append("Toby").prepend("Jan");
console.log("List: " + myPrettyList.toString());
console.log("Size: " + myPrettyList.size());
console.log("Head: " + myPrettyList.head().value());
console.log("Tail: " + myPrettyList.tail().value());
console.log("Contains Holly? " + myPrettyList.contains("Holly"));
console.log("Find Holly's index: " + myPrettyList.find("Holly"));
console.log("Item at 2: " + myPrettyList.at(2).value());
console.log("Pop last item, new list: " + myPrettyList.pop().toString());
console.log(
  "Insert Kelly at index 2, new list: " +
    myPrettyList.insertAt("Kelly", 2).toString()
);
console.log(
  "Remove item at index 0, new list: " + myPrettyList.removeAt(0).toString()
);

/*
OUTPUT
-----------------------
List: (Jan) -> (Michael) -> (Holly) -> (Toby) -> (null)
Size: 4
Head: Jan
Tail: Toby
Contains Holly? 1
Find Holly's index: 2
Item at 2: Holly
Pop last item, new list: (Jan) -> (Michael) -> (Holly) -> (null)
Insert Kelly at index 2, new list: (Jan) -> (Michael) -> (Kelly) -> (Holly) -> (null)
Remove item at index 0, new list: (Michael) -> (Kelly) -> (Holly) -> (null)
*/

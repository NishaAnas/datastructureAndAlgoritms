class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    prepend(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
        this.size++;
    }

    append(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.size++;
    }

    fromArray(arr) {
        for (let value of arr) {
            this.append(value);
        }
    }

    insertTo(index, value) {
        if (index < 0 || index > this.size) {
            return "Invalid Index";
        }
        if (index === 0) {
            this.prepend(value);
        } else if (index === this.size) {
            this.append(value);
        } else {
            const node = new Node(value);
            let curr = this.head;
            for (let i = 0; i < index; i++) {
                curr = curr.next;
            }
            node.next = curr;
            node.prev = curr.prev;
            curr.prev.next = node;
            curr.prev = node;
            this.size++;
        }
    }

    removeFrom(index) {
        if (index < 0 || index >= this.size) {
            return 'Invalid Index';
        }
        let removedNode;
        if (index === 0) {
            removedNode = this.head;
            this.head = this.head.next;
            if (this.head) {
                this.head.prev = null;
            }
        } else if (index === this.size - 1) {
            removedNode = this.tail;
            this.tail = this.tail.prev;
            if (this.tail) {
                this.tail.next = null;
            }
        } else {
            let curr = this.head;
            for (let i = 0; i < index; i++) {
                curr = curr.next;
            }
            removedNode = curr;
            curr.prev.next = curr.next;
            curr.next.prev = curr.prev;
        }
        this.size--;
        return removedNode.value;
    }

    removeValue(value) {
        if (this.isEmpty()) {
            return 'List Empty';
        }
        let removedNode;
        if (this.head.value === value) {
            removedNode = this.head;
            this.head = this.head.next;
            if (this.head) {
                this.head.prev = null;
            }
        } else if (this.tail.value === value) {
            removedNode = this.tail;
            this.tail = this.tail.prev;
            if (this.tail) {
                this.tail.next = null;
            }
        } else {
            let curr = this.head;
            while (curr && curr.value !== value) {
                curr = curr.next;
            }
            if (curr) {
                removedNode = curr;
                curr.prev.next = curr.next;
                if (curr.next) {
                    curr.next.prev = curr.prev;
                }
            } else {
                return null;
            }
        }
        this.size--;
        return removedNode.value;
    }

    insertBefore(nodeData, value) {
        if (this.isEmpty()) {
            return 'List empty';
        }
        if (this.head.value === nodeData) {
            this.prepend(value);
            return;
        }
        const node = new Node(value);
        let curr = this.head;
        while (curr && curr.value !== nodeData) {
            curr = curr.next;
        }
        if (curr) {
            node.next = curr;
            node.prev = curr.prev;
            if (curr.prev) {
                curr.prev.next = node;
            }
            curr.prev = node;
            this.size++;
        } else {
            return 'Node data not found';
        }
    }

    insertAfter(nodeData, value) {
        if (this.isEmpty()) {
            return 'List Empty';
        }
        const node = new Node(value);
        let curr = this.head;
        while (curr && curr.value !== nodeData) {
            curr = curr.next;
        }
        if (curr) {
            node.next = curr.next;
            node.prev = curr;
            if (curr.next) {
                curr.next.prev = node;
            }
            curr.next = node;
            this.size++;
        } else {
            return 'Node data not found';
        }
    }

    removeBefore(nodeData) {
        if (this.isEmpty()) {
            return 'List Empty';
        }
        if (this.head.value === nodeData) {
            return 'Cannot remove the data before head node';
        }
        let curr = this.head;
        while (curr && curr.value !== nodeData) {
            curr = curr.next;
        }
        if (curr && curr.prev) {
            let toRemove = curr.prev;
            if (toRemove.prev) {
                toRemove.prev.next = curr;
                curr.prev = toRemove.prev;
            } else {
                this.head = curr;
                curr.prev = null;
            }
            this.size--;
            return toRemove.value;
        } else {
            return 'Node not found';
        }
    }

    removeAfter(nodeData) {
        if (this.isEmpty()) {
            return 'List Empty';
        }
        let curr = this.head;
        while (curr && curr.value !== nodeData) {
            curr = curr.next;
        }
        if (curr && curr.next) {
            let toRemove = curr.next;
            if (toRemove.next) {
                toRemove.next.prev = curr;
                curr.next = toRemove.next;
            } else {
                curr.next = null;
                this.tail = curr;
            }
            this.size--;
            return toRemove.value;
        } else {
            return 'Node not Found';
        }
    }

    search(value) {
        if (this.isEmpty()) {
            return "List empty";
        }
        let curr = this.head;
        for (let i = 0; i < this.size; i++) {
            if (curr.value === value) {
                return i;
            }
            curr = curr.next;
        }
        return -1;
    }

    reverse() {
        let curr = this.head;
        let temp = null;
        this.head = this.tail;
        this.tail = curr;
        while (curr) {
            temp = curr.prev;
            curr.prev = curr.next;
            curr.next = temp;
            curr = curr.prev;
        }
        if (this.tail) {
            this.tail.next = null;
        }
    }

    sort() {
        if (this.size <= 1) {
            return -1;
        }
        let swapped = true;
        while (swapped) {
            swapped = false;
            let curr = this.head;
            while (curr && curr.next) {
                if (curr.value > curr.next.value) {
                    let temp = curr.value;
                    curr.value = curr.next.value;
                    curr.next.value = temp;
                    swapped = true;
                }
                curr = curr.next;
            }
        }
    }

    removeDuplicates() {
        if (this.isEmpty()) {
            return 'List empty';
        }
        let curr = this.head;
        while (curr && curr.next) {
            if (curr.value === curr.next.value) {
                curr.next = curr.next.next;
                if (curr.next) {
                    curr.next.prev = curr;
                }
                this.size--;
            } else {
                curr = curr.next;
            }
        }
    }

    print() {
        if (this.isEmpty()) {
            return "List Empty";
        }
        let listValues = '';
        let curr = this.head;
        while (curr) {
            listValues += `${curr.value} `;
            curr = curr.next;
        }
        console.log(listValues.trim());
    }
}

let arr = [50, 60, 20, 60, 10, 70, 40, 30, 12];
const list = new DoubleLinkedList();
list.fromArray(arr);

console.log("Original list:");
list.print();
// Output: 50 60 20 60 10 70 40 30 12

list.insertTo(5, 25);
console.log("List after inserting 25 at index 5:");
list.print();
// Output: 50 60 20 60 10 25 70 40 30 12

list.removeFrom(4);
console.log("List after removing the node at index 4:");
list.print();
// Output: 50 60 20 60 25 70 40 30 12

list.removeValue(60);
console.log("List after removing the first occurrence of value 60:");
list.print();
// Output: 50 20 60 25 70 40 30 12

list.insertBefore(70, 55);
console.log("List after inserting 55 before value 70:");
list.print();
// Output: 50 20 60 25 55 70 40 30 12

list.insertAfter(25, 35);
console.log("List after inserting 35 after value 25:");
list.print();
// Output: 50 20 60 25 35 55 70 40 30 12

list.removeBefore(35);
console.log("List after removing the node before value 35:");
list.print();
// Output: 50 20 60 35 55 70 40 30 12

list.removeAfter(35);
console.log("List after removing the node after value 35:");
list.print();
// Output: 50 20 60 35 70 40 30 12

console.log("Search for value 70:");
console.log(list.search(70));
// Output: 4

list.reverse();
console.log("List after reversing:");
list.print();
// Output: 12 30 40 70 35 60 20 50

list.sort();
console.log("List after sorting:");
list.print();
// Output: 12 20 30 35 40 50 60 70

list.removeDuplicates();
console.log("List after removing duplicates:");
list.print();
// Output: 12 20 30 35 40 50 60 70

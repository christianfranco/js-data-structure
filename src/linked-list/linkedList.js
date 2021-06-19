const NodeItem = require('./nodeItem');

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        const newNode = new NodeItem(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
    }

    pop() {
        if (this.length !== 0 && this.head) {
            if (this.head === this.tail) {
                this.head = null;
                this.tail = null;
            } else {
                let actual = this.head;
                let next = this.head.next;

                do {
                    if (this.tail === next) {
                        this.tail = actual;
                        actual.next = null;
                    }
                    actual = next;
                    next = next.next;

                }
                while (next !== null)
            }

            this.length--;
        }
    }

    unshift(value) {
        const newNode = new NodeItem(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    }

    shift() {
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
            this.length--;
        } else if (this.length >= 0) {
            this.head = this.head.next;
            this.length--;
        }
    }

    get(index) {
        let found = undefined;

        if (index >= 0 || index < this.length) {
            let count = 0;
            let temp = this.head;

            while (count < this.length) {
                if (count === index) {
                    found = temp;
                    break;
                }

                temp = temp.next;
                count++;
            }
        }

        return found;
    }

    set(index, value) {
        const item = this.get(index);
        let found = false;

        if (item) {
            item.value = value;
            found = true;
        }

        return found;
    }

    insert(index, value) {
        let inserted = false;
        const newNode = new NodeItem(value);

        if (index >= 0 || index < this.length) {
            if (index === 0) {
                this.unshift(value);
                inserted = true;
            } else if (index === (this.length - 1)) {
                this.push(value);
                inserted = true;
            } else {
                let actual = this.head;
                let next = this.head.next;
                let count = 1;

                while (count < this.length) {
                    if (index === count) {
                        newNode.next = next;
                        actual.next = newNode;
                        inserted = true;
                        this.length++;
                        break;
                    }

                    actual = next;
                    next = next.next;

                    count++;
                }
            }
        }

        return inserted;
    }

    remove(index) {
        let removed = false;

        if (index >= 0 || index < this.length) {
            if (index === 0) {
                this.shift();
                removed = true;
            } else if (index === (this.length - 1)) {
                this.pop();
                removed = true;
            } else {
                let actual = this.head;
                let next = this.head.next;
                let count = 1;

                while (count < this.length) {
                    if (index === count) {
                        actual.next = next.next;
                        removed = true;
                        this.length--;
                        break;
                    }

                    actual = next;
                    next = next.next;

                    count++;
                }
            }
        }

        return removed;
    }

    reverse() {
        if (this.length > 1) {
            let temp = this.head;
            this.head = this.tail;
            this.tail = temp;

            let next = temp.next
            let prev = null;

            for (let i = 0; i < this.length; i++) {
                next = temp.next;
                temp.next = prev;
                prev = temp;
                temp = next;
            }
        }

        return this;
    }
}

module.exports = LinkedList;

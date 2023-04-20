class Stack {
    constructor(storage, capacity, length) {
        this.storage = [];
        this.capacity = Infinity;
    }
    get getLength() {
        return this.storage.length;
    }

    add(num) {
        if (this.storage.length > this.capacity) {
            return alert(`Stack is overflowing`);
        } else {
            return this.storage.push(num)
        }
    }

    remove() {
        return this.storage.pop();
    }

    peek() {
        return this.storage[this.storage.length - 1];
    }

    printAll(arr) {
        return arr.reverse().map(x => console.log(x))
    }

    isEmpty() {
        return this.storage === null ? true : false;
    }

}





class Queue {
    constructor(storage, capacity, length) {
        this.storage = [];
        this.capacity = Infinity;
    }
    get getLength() {
        return this.storage.length;
    }

    add(num) {
        if (this.storage.length > this.capacity) {
            return alert(`Stack is overflowing`);
        } else {
            return this.storage.push(num)
        }
    }

    remove() {
        return this.storage.splice(this.storage[0] - 1, 1);
    }

    peek() {
        return this.storage[this.storage.length - 1];
    }

    printAll(arr) {
        return arr.reverse().map(x => console.log(x))
    }

    isEmpty() {
        return this.storage === null ? true : false;
    }

}
class Queue {
    constructor() {
        this.storage = []
        this.capacity = Infinity
    }

    get getLength() {
        return this.storage.length;
    }

    enqueue = (item) => {
        if (this.storage.length > this.capacity) {
            return alert(`Queue is overflowing`)
        } else {
            return this.storage.push(item)
        }
    }

    dequeue = () => {
        return this.storage.shift()
    }

    peek = () => {
        return this.storage[0];
    }

    printAll = () => {
        this.storage.forEach(x => console.log(x))
    }

    isEmpty = () => {
        return arr.length === 0 ? false : true;
    }
}
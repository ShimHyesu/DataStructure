class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    insert(data) {
        const newNode = new Node(data);

        if (this.head === null) {
            this.head = newNode
        } else {
            let cur = this.head
            while (cur.next !== null) {
                cur = cur.next
            }
            cur.next = newNode
        }

        this.length++;
    }

    getList() {
        let cur = this.head
        let listString = ''
        while (cur) {
            listString += `${cur.data}\n`
            cur = cur.next
        }

        return listString
    }

    remove(data) {
        let cur = this.head
        let prev = null

        while (cur) {
            if (cur.data == data) {
                if (prev === null) {
                    this.head = cur.next
                } else {
                    prev.next = cur.next
                }
                cur = prev
                this.length--;
            } else {
                prev = cur
                cur = cur.next
            }
        }
    }

    getLength() {
        return this.length
    }

    //정렬삽입
    sortInsert(data) {
        const newNode = new Node(data);

        if (this.head === null) {
            this.head = newNode
        } else {
            let comp = this.head
            if (data < comp.data) {
                newNode.next = comp
                this.head = newNode
            } else {
                while (comp.next !== null && data >= comp.next.data) {
                    comp = comp.next
                }
                newNode.next = comp.next
                comp.next = newNode
            }
        }

        this.length++;
    }
}

const list = new SinglyLinkedList()

list.insert('a')
list.insert('b')
list.insert('b')
list.insert('c')

console.log(list.getList())

list.remove('b')

console.log(list.getList())
console.log(list.getLength())

const sortList = new SinglyLinkedList()

sortList.sortInsert('3')
sortList.sortInsert('2')
sortList.sortInsert('1')

console.log(sortList.getList())

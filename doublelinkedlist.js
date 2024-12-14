//emateba ubralod prev = null
// class Node{
//     constructor(value){
//         this.value = value;
//         this.next = null;
//         this.prev= null
//     }
// }

// class DoublyLinkedList{
//     constructor(value){
//         const newNode = new Node(value);
//         this.head = newNode;
//         this.tail = this.head;
//         this.length = 1
//     }
// }
// let myDoublyLinkedList = new DoublyLinkedList(1)
// console.log(myDoublyLinkedList);
//push douleLinkedList 
//1 xazi emateba newNode.prev = this.tail
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev= null
    }
}

class DoublyLinkedList{
    constructor(value){
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1
    }
    Push(value){
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head
        }else{
            this.tail.next = newNode;
            newNode.prev = this.tail
            this.tail = newNode;
        }
        this.length++
        return this
    }
}
let myDoublyLinkedList = new DoublyLinkedList(1)
myDoublyLinkedList.Push(2)
console.log(myDoublyLinkedList)

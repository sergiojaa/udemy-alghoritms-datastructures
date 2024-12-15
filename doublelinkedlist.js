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
//     Push(value){
//         const newNode = new Node(value);
//         if(!this.head){
//             this.head = newNode;
//             this.tail = this.head
//         }else{
//             this.tail.next = newNode;
//             newNode.prev = this.tail
//             this.tail = newNode;
//         }
//         this.length++
//         return this
//     }
// }
// let myDoublyLinkedList = new DoublyLinkedList(1)
// myDoublyLinkedList.Push(2)
// console.log(myDoublyLinkedList)

// pop doublylinkedlist
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
//     Push(value){
//         const newNode = new Node(value);
//         if(!this.head){
//             this.head = newNode;
//             this.tail = this.head
//         }else{
//             this.tail.next = newNode;
//             newNode.prev = this.tail
//             this.tail = newNode;
//         }
//         this.length++
//         return this
//     }
//     pop(){
//         if(this.length === 0) return undefined;
//         let temp = this.tail;
//         this.tail = this.tail.prev;
//         this.tail.next = null;
//         temp.prev = null;
//         this.length--
//         if(this.length === 0){
//             this.head = null;
//             this.tail = null
//         }
//         return temp
//     }
// }
// let myDoublyLinkedList = new DoublyLinkedList(1)
// myDoublyLinkedList.Push(2)
// myDoublyLinkedList.pop()
// console.log(myDoublyLinkedList)

//unshift doublylinkedlists

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
//     Push(value){
//         const newNode = new Node(value);
//         if(!this.head){
//             this.head = newNode;
//             this.tail = this.head
//         }else{
//             this.tail.next = newNode;
//             newNode.prev = this.tail
//             this.tail = newNode;
//         }
//         this.length++
//         return this
//     }
//     Unshift(value){
//         const newNode = new Node(value)
//         if(this.length === 0){
//             this.head = newNode;
//             this.tail = newNode;
//         }else {
//             newNode.next= this.head;
//             this.head.prev = newNode;
//             this.head = newNode;
//         }
//         this.length++;
//         return this;
//     }
// }
//     let myDoublyLinkedList = new DoublyLinkedList(1)
// myDoublyLinkedList.Push(2)
// myDoublyLinkedList.Unshift(0)
// console.log(myDoublyLinkedList)

// shift doublylinkedlist
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
//     Push(value){
//         const newNode = new Node(value);
//         if(!this.head){
//             this.head = newNode;
//             this.tail = this.head
//         }else{
//             this.tail.next = newNode;
//             newNode.prev = this.tail
//             this.tail = newNode;
//         }
//         this.length++
//         return this
//     }
//     shift(){
//         if(this.length === 0) return undefined;
//         let temp = this.head;
//         if(this.length === 1){
//             this.head = null;
//             this.tail = null
//         }else{
//             this.head = this.head.next;
//             this.head.prev = null;
//             temp.next = null
//         }
//         this.length --
//         return temp
//     }
// }
//     let myDoublyLinkedList = new DoublyLinkedList(1)
// myDoublyLinkedList.Push(2)
// myDoublyLinkedList.shift()
// console.log(myDoublyLinkedList)
// // GET DOUBLYLinkedList
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
    get(index){
        if(index<0 || index> this.length){
            return undefined;
        }
        let temp = this.head;
        if(index<this.length/2){
        for(let i = 0;i<index;i++){
            temp = temp.next;
        }
    }else{
        temp = this.tail;
        for(let i = this.length-1; i>index;i--){
            temp = temp.prev;
        }
    }
        return temp
    }
}
let myDoublyLinkedList = new DoublyLinkedList(1)
myDoublyLinkedList.Push(2)
myDoublyLinkedList.get(1)
console.log(myDoublyLinkedList)

// set doublyLinkedList
set(index,value){
    let temp = this.get(index)
    if(temp){
        temp.value = value;
        return true;
    }
    return false;
}
//  constructor 
// class Node {
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }
// class LinkedList {
//     constructor(value){
//         const newNode = new Node(value)
//         this.head = newNode;
//         this.tail = this.head;
//         this.length = 1
//     }
// }
// let myLinkedList = new LinkedList(1)
// const newNode = new Node(1)
// console.log(myLinkedList)
// class Node {
//     constructor(name,year){
//         this.name = name;
//         this.year = year
//         this.next = null
//     }
   
// }
// class LinkedList{
//     constructor(name,year){
//         const newNode = new Node(name,year)
//         this.head = newNode;
//         this.tail = this.head;
//         this.length = 1
//     }
//     Push(name,year){
//         const newNode = new Node(name,year)

//         if(!this.head){
//             this.head = newNode;
//             this.tail = newNode;
//         }else{
//             this.tail.next = newNode;
//             this.tail = newNode
//         }
//         this.length++;
//         return this
//     }
//     toObject() {
//         const nodes = [];
//         let current = this.head;

//         while (current) {
//             nodes.push({ name: current.name, year: current.year });
//             current = current.next;
//         }

//         return nodes;
//     }
// }

// const myLinkedList = new LinkedList('ford',2022)
// myLinkedList.Push('bmw',2022)
// console.log(myLinkedList.toObject())
// console.log(mycar1)



class Node {
    constructor(name,year){
        this.name = name;
        this.year = year
        this.next = null
    }
   
}
class LinkedList{
    constructor(name,year){
        const newNode = new Node(name,year)
        this.head = newNode;
        this.tail = this.head;
        this.length = 1
    }
    Push(name,year){
        const newNode = new Node(name,year)

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode
        }
        this.length++;
        return this
    }
    Pop(){
        if(this.length ===0)return undefined 
        let temp = this.head;
        let pre = this.head;
        while(temp.next){
            pre = temp;
            temp = temp.next
        }
        this.tail = pre;
        this.tail.next = null
        this.length --
        if(this.length === 0){
            this.head = null;
            this.tail = null
        }
        return temp

    }
    toObject() {
        const nodes = [];
        let current = this.head;

        while (current) {
            nodes.push({ name: current.name, year: current.year });
            current = current.next;
        }

        return nodes;
    }
   
}

const myLinkedList = new LinkedList('ford',2022)
myLinkedList.Push('bmw',2022)
myLinkedList.Pop()

console.log(myLinkedList.toObject())



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
    // Pop(){
    //     if(!this.head)return undefined 
    //     let temp = this.head;
    //     let pre = this.head;
    //     while(temp.next){
    //         pre = temp;
    //         temp = temp.next
    //     }
    //     this.tail = pre;
    //     this.tail.next = null
    //     this.length --
    //     if(this.length === 0){
    //         this.head = null;
    //         this.tail = null
    //     }
    //     return temp

    // }
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
// myLinkedList.Pop()

// console.log(myLinkedList.toObject())

// class Node {
//     constructor(name,year){
//         this.name = name;
//         this.year = year;
//         this.next = null
//     }
// }
// class LinkedList {
//     constructor(name,year){
//         const newNode = new Node(name,year)
//         this.head = newNode;
//         this.tail = newNode;
//     }
//     toObject(){
//         const nodes = []
//         let current = this.head;
//         while(current){
//             nodes.push({name: current.name, year: current.year})
//             current = current.next
//         }
//         return nodes
//     }
//     Push(name,year){
//         const newNode = new Node(name,year)
//         if(!this.head){
//             this.head = newNode;
//             this.tail = newNode;
//         }else{
//             this.tail.next = newNode;
//             this.tail = newNode;
//         }
//         this.length++;
//         return this
//     }
    // unShift(name,year){
    //     const newNode = new Node(name,year)
    //     if(!this.head){
    //         this.head = newNode;
    //         this.tail = newNode;
    //     }else{
    //         newNode.next = this.head;
    //         this.head = newNode;
    //     }
    //     this.length++;
    //     return this
    // }

// }
// const myLinkedList = new LinkedList('bmw',2022)
// myLinkedList.Push('mercedes','2024')
// myLinkedList.unShift('oee',2022)
// console.log(myLinkedList.toObject())


class Node {
    constructor(name,year){
        this.name = name;
        this.year = year;
        this.next = null
    }
}
class LinkedList {
    constructor(name,year){
        const newNode = new Node(name,year)
        this.head = newNode;
        this.tail = newNode;
    }
    toObject(){
        const nodes = []
        let current = this.head;
        while(current){
            nodes.push({name: current.name, year: current.year})
            current = current.next
        }
        return nodes
    }
    Pop(){
        if(!this.head)return undefined 
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
    Push(name,year){
        const newNode = new Node(name,year)
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this
    }
    Shift(name,year){
        const newNode = new Node(name,year)
        if(!this.head) return undefined;
        let temp = this.head;
        this.head = this.head.next;
        temp.next = null;
        if(this.length === 0){
            this.head = null;
            this.tail = null
        }
        this.length--
        return temp
    }
    unShift(name,year){
        const newNode = new Node(name,year)
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this
    }
    Get(index){
        if(index < 0 || index >= this.length){
            return undefined;
        }
        let temp = this.head
        for(let i = 0; i < index;i++){
            temp = temp.next;
        }
        return temp
    }
    Set(index,value){
        let temp = this.Get(index)
        if(temp){
        temp.value = value;
         return true
    }
    return false

}
Insert(index,value){
    if(index === 0) return this.unShift(value)
    if(index === this.length) return this.Push(value);
    if(index < 0 || index > this.length)return false;
    const newNode = new Node(value)
    const temp = this.Get(index - 1)
    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;
    return true;

    }
    Remove(index){
        if(index === 0) return this.Shift()
        if(index === this.length - 1)return this.Pop();
        if(index < 0 || index >= this.length) return undefined;
        const before = this.Get(index - 1)
        const temp = before.next;
        before.next = temp.next;
        temp.next = null;
        this.length--;
        return temp;
    }
    reverse(){
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;
        let next = temp.next;
        let prev = null
        for(let i = 0;i<this.length;i++){
            next = temp.next;
            temp.next = prev;
            prev = temp;
            temp = next;
        }
        return this;
    }
    isPalindrome() {
        if (!this.head || !this.head.next) return true; 

        let left = this.head;
        let right = this.tail;

        while (left !== right && left.prev !== right) {
            if (left.value !== right.value) {
                return false;
            }
            left = left.next;
            right = right.prev;
        }

        return true;
    }
}
const myLinkedList = new LinkedList('bmw',2022)
myLinkedList.Push('mercedes','2024')
myLinkedList.Push('mercedes','20222')

// myLinkedList.Get(1)
console.log(myLinkedList)





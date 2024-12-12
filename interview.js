class Node{
    constructor(value){
        this.value = value;
        this.next = null
    }
}
class LinkedList {
    constructor(value){
        const newNode = new Node(value)
        this.head = newNode;
        this.tail = newNode;
        this.length = 1
    }
    push(value){
        const newNode = new Node(value)
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++
        return this;
        
    }
    toObject(){
        const array = []
        let current = this.head;
        while(current){
            array.push({value: current.value, next: current.next ? current.next.value : null })
            current = current.next;
        }
        return array
    }
    hasLoop(){
        let slow = this.head;
        let fast = this.head;
        while(fast !== null && fast.next !== null){
            slow = slow.next;
            fast = fast.next.next
            if(slow === fast){
                return true
            }
        }
        return false
    }
    findMiddleNode(){
        if(!this.head) return null;
        let slow = this.head;
        let fast = this.head;
        while(fast !== null && fast.next !==null){
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow
    }
    findKthFromEnd(k){
        if(k < 0 || k >= this.length) return null;
        let slow = this.head;
        let fast = this.head;
        for(let i = 0;i<k;i++){
            if(fast === null)return null;
            fast = fast.next;
        }
        while(fast !== null){
            slow = slow.next;
            fast = fast.next
        }
        return slow;

    }
    partitionList(x){
	    let low = this.head;
        let fast = this.head;
	}

   
}

let myLinkedList = new LinkedList(1)
myLinkedList.push(2)
myLinkedList.push(3)

myLinkedList.push(4)
myLinkedList.push(5)
myLinkedList.push(6)
myLinkedList.findMiddleNode()
const kthNode = myLinkedList.findKthFromEnd(5)
console.log(kthNode ? kthNode.value : null);

// console.log(myLinkedList.findMiddleNode())
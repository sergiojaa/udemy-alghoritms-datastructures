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
    partitionList(x) {
        // Dummy nodes for low and high lists
        let lowHead = new Node(0); // Dummy node for low list
        let highHead = new Node(0); // Dummy node for high list

        let low = lowHead; // Start with the low list
        let high = highHead; // Start with the high list
        let current = this.head; // Start with the head of the original list

        // Traverse the entire list
        while (current !== null) {
            if (current.value < x) {
                // Add to low list if value is less than x
                low.next = current;
                low = low.next;
            } else {
                // Add to high list if value is greater or equal to x
                high.next = current;
                high = high.next;
            }
            current = current.next; // Move to the next node
        }

        // Ensure the high list ends with null to avoid circular references
        high.next = null;

        // Combine the low and high lists
        low.next = highHead.next;

        // Update the head of the list to point to the first node of the low list
        this.head = lowHead.next;

        return this;
    }
    

   
}

let myLinkedList = new LinkedList(1)
myLinkedList.push(2)
myLinkedList.push(3)

myLinkedList.push(4)
myLinkedList.push(5)
myLinkedList.push(5)
myLinkedList.push(6)
// myLinkedList.findMiddleNode()
// const kthNode = myLinkedList.findKthFromEnd(5)
console.log(myLinkedList.toObject())

// console.log(myLinkedList.findMiddleNode())
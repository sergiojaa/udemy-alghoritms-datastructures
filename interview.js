// class Node{
//     constructor(value){
//         this.value = value;
//         this.next = null
//     }
// }
// class LinkedList {
//     constructor(value){
//         const newNode = new Node(value)
//         this.head = newNode;
//         this.tail = newNode;
//         this.length = 1
//     }
//     push(value){
//         const newNode = new Node(value)
//         if(!this.head){
//             this.head = newNode;
//             this.tail = newNode;
//         }else{
//             this.tail.next = newNode;
//             this.tail = newNode;
//         }
//         this.length++
//         return this;
        
//     }
//     toObject(){
//         const array = []
//         let current = this.head;
//         while(current){
//             array.push({value: current.value, next: current.next ? current.next.value : null })
//             current = current.next;
//         }
//         return array
//     }
//     hasLoop(){
//         let slow = this.head;
//         let fast = this.head;
//         while(fast !== null && fast.next !== null){
//             slow = slow.next;
//             fast = fast.next.next
//             if(slow === fast){
//                 return true
//             }
//         }
//         return false
//     }
//     findMiddleNode(){
//         if(!this.head) return null;
//         let slow = this.head;
//         let fast = this.head;
//         while(fast !== null && fast.next !==null){
//             slow = slow.next;
//             fast = fast.next.next;
//         }
//         return slow
//     }
//     findKthFromEnd(k){
//         if(k < 0 || k >= this.length) return null;
//         let slow = this.head;
//         let fast = this.head;
//         for(let i = 0;i<k;i++){
//             if(fast === null)return null;
//             fast = fast.next;
//         }
//         while(fast !== null){
//             slow = slow.next;
//             fast = fast.next
//         }
//         return slow;

//     }
//     partitionList(x) {
//         // Dummy nodes for low and high lists
//         let lowHead = new Node(0); // Dummy node for low list
//         let highHead = new Node(0); // Dummy node for high list

//         let low = lowHead; // Start with the low list
//         let high = highHead; // Start with the high list
//         let current = this.head; // Start with the head of the original list

//         // Traverse the entire list
//         while (current !== null) {
//             if (current.value < x) {
//                 // Add to low list if value is less than x
//                 low.next = current;
//                 low = low.next;
//             } else {
//                 // Add to high list if value is greater or equal to x
//                 high.next = current;
//                 high = high.next;
//             }
//             current = current.next; // Move to the next node
//         }

//         // Ensure the high list ends with null to avoid circular references
//         high.next = null;

//         // Combine the low and high lists
//         low.next = highHead.next;

//         // Update the head of the list to point to the first node of the low list
//         this.head = lowHead.next;

//         return this;
//     }
//     removeDuplicates(){
//         let current = this.head;
//         let seen = new Set();  // To keep track of the unique values
//         let previous = null; // To manage the next pointer
        
//         while (current !== null) {
//             if (seen.has(current.value)) {
//                 // If value is already seen, remove the current node
//                 previous.next = current.next;
//                 this.length--; // Decrement length of the list
//             } else {
//                 // Otherwise, mark the value as seen
//                 seen.add(current.value);
//                 previous = current; // Move previous pointer forward
//             }
//             current = current.next;  // Move to the next node
//         }
// 	}
//     binaryToDecimal() {
//         let num = 0;
//         let current = this.head;  // დასაწყისი, სიაში პირველი ელემენტი
        
//         // სიაში ყველა ელემენტის გავლა
//         while (current !== null) {
//             num = num * 2 + current.value;  // გადახედვა და მნიშვნელობის დამატება
//             current = current.next;  // შემდეგ ელემენტზე გადასვლა
//         }
        
//         return num;  // შედეგის დაბრუნება
//     }
//     reverseBetween(m, n) {
//         // If the list is empty or m == n, no reversal needed
//         if (!this.head || m === n) return;

//         let current = this.head;
//         let prev = null;

//         // Step 1: Traverse to the node just before index m
//         for (let i = 0; i < m; i++) {
//             prev = current;
//             current = current.next;
//         }

//         // Step 2: Reverse the sublist from m to n
//         let connection = prev;  // Node just before the m-th node (needed for later connection)
//         let tail = current;     // The m-th node (this will be the tail of the reversed sublist)
//         let next = null;

//         for (let i = m; i <= n; i++) {
//             next = current.next;  // Store the next node
//             current.next = prev;  // Reverse the current node's pointer
//             prev = current;       // Move prev to current
//             current = next;       // Move current to the next node
//         }

//         // Step 3: Connect the reversed sublist back into the main list
//         if (connection !== null) {
//             connection.next = prev; // Connect the node before m to the new head of the reversed sublist
//         } else {
//             this.head = prev;  // If m is 0, we update the head to the new head of the reversed sublist
//         }

//         // Step 4: Connect the tail of the reversed sublist to the remaining part of the list
//         tail.next = current;
//     }

   
// }

// let myLinkedList = new LinkedList(1)
// myLinkedList.push(2)
// myLinkedList.push(3)

// myLinkedList.push(4)
// myLinkedList.push(5)
// myLinkedList.push(5)
// myLinkedList.push(6)
// console.log("Before removing duplicates:", myLinkedList.toObject());

// myLinkedList.removeDuplicates();  // Remove duplicates

// console.log("After removing duplicates:", myLinkedList.toObject());
// // myLinkedList.findMiddleNode()
// // const kthNode = myLinkedList.findKthFromEnd(5)


// // console.log(myLinkedList.findMiddleNode())

//doubli linked list interviews
class Node {
    constructor(value){
        this.value = value;
        this.prev = null
        this.next = null
    }
}
class DoubliLinkedList {
    constructor(value){
        const newNode = new Node(value)
        this.head = newNode;
        this.tail = newNode;
        this.length = 1
    }
    push(value){
        const newNode = new Node(value)
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this
    }
    toObject(){
        const arr = [];
        let current = this.head;
    
        while (current) {
            arr.push({
                value: current.value,
                prev: current.prev ? current.prev.value : null,
                next: current.next ? current.next.value : null
            });
            current = current.next;
        }
    
        return arr; // Return the array of objects
    }
    swapFirstLast(){
      if(this.length <=1) return;
      const temp = this.head.value;
      this.head.value = this.tail.value;
      this.tail.value = temp

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
    swapPairs() {
        if (!this.head || !this.head.next) return; // No pairs to swap in an empty or single-node list

        let current = this.head;

        while (current && current.next) {
            const first = current;
            const second = current.next;

            // Swap first and second
            const prevNode = first.prev;
            const nextNode = second.next;

            if (prevNode) {
                prevNode.next = second;
            } else {
                this.head = second; // Update head if swapping the first pair
            }

            if (nextNode) {
                nextNode.prev = first;
            } else {
                this.tail = first; // Update tail if swapping the last pair
            }
            
            second.prev = prevNode;
            second.next = first;
            first.prev = second;
            first.next = nextNode;

            // Move to the next pair
            current = nextNode;
        }
       
   }

}
const myDoublyLinkedList = new DoubliLinkedList(1)
myDoublyLinkedList.push(2)
myDoublyLinkedList.push(3)
myDoublyLinkedList.push(2)
myDoublyLinkedList.push(1)

myDoublyLinkedList.swapPairs()
console.log(myDoublyLinkedList.toObject())
//    O (n)
// function logItems(n){
//     for(let i = 0;i<n;i++){
//         console.log(i)
//     }
// }
// logItems(7)
// drop constants    O(2n)
// function logItems(n){
//     for(let i = 0;i<n;i++){
//         console.log(i)
//     }
//     for(let j = 0;j<n;j++){
//         console.log(j)
//     }
// }
// logItems(3)
  //  O ( n2) n * n    n kvadratshi
// function logItems(n){
//     for(let i = 0;i<n;i++){
//         for(let j = 0;j<n;j++){
//             console.log(i,j)
//         }
//     }
  
// }
// logItems(3)

// Drop Non-Dominants    O (n2 + n)   kvadratshi
// function logItems(n){
//         for(let i = 0;i<n;i++){
//             for(let j = 0;j<n;j++){
//                 console.log(i,j)       // ori for aris n kvadrati
//             }
//         }
//       for(let k = 0; k < n;k++){
//         console.log(k)
//       }
//     }
//     logItems(3)

// Big O:  O (1)  
// function addItems(n){
//     return n + n // number ofoperation is 1 O(1) 
//     // return n+n+n  number ofoperation is O(1) 
// }
// console.log(addItems(2))

// tu ori loop ertmanetshia mere ari gamravleba,xarisxi,tuarada qvemot rogorcaa

// different terms for input
// function logItems(n){
//     for(let i = 0;i<n;i++){
//         console.log(i)
//     }                                   //O(2n) drop O(n)
//     for(let j = 0;j<n;j++){
//         console.log(j)
//     }
// }

// big O of arrays 
// const myArray = [11,3,23,7]
// // myArray.push(17)
// // console.log(myArray)
// // myArray.pop(17)     // indexebi chveulebrivad icvleba roca amoakldeba an daemateba,
// // console.log(myArray)
// // myArray.shift(17)
// // console.log(myArray)
// // myArray.unshift(17)
// // console.log(myArray)

// myArray.splice(1,0,"hi")    // 1mde gamoitans daamatebs anu pirveli indekci ikneba 0is mere
// console.log(myArray)  

//big o wrap up


//classes & pointers

//classes
// class Cookie {
//     constructor(color){
//         this.color = color
//     }
//     getColor(){
//         return this.color
//     }
//     setColor(color){
//        return this.color = color
//     }
// }
// let cookieOne = new Cookie('green')

// let cookieTwo = new Cookie('blue')
// console.log(cookieOne.setColor('red'))
// console.log(cookieTwo.getColor())

//pointers

// let num1 = 5 
// let num2 = num1    
// num1 = 10     num2 aricvleba
// console.log(num2) //5

// let obj1 = {
//     value:11
// }
// let obj2 = obj1 //ak icvleba orive 
// console.log(obj2)    //11  
// obj1.value = 22   //obj2 icvleba
// console.log(obj2)  //22
// let obj3 = {
//     value:51
// }
// obj2 = obj3
// obj1 = obj2
// console.log(obj1)


// linked lists 
// linked lists big O
// constructor 
// class Node {
//   constructor(value){
//     this.value = value
//     this.next = null
//   }
// }
// class LinkedLists {
//   constructor(value){
//     const newNode = new Node(value)
//     this.head = newNode
//     this.tail = this.head
//     this.length = 1
//   }
// }
// let myLinkedLists = new LinkedLists(4);
// console.log(myLinkedLists)

//linked lists first data structure
// arayshi indexebi ar aqvs, isinimemoryshi gverdi gverd
//araa savaldebulo rom ikvnen. 
// first item = head
//last item = tail

//big-O
//constructor 



// class Node {
//   constructor(value){
//     this.value = value
//     this.next = null
//   }
// }
// class LinkedList{
//   constructor(value){
//     const newNode = new Node(value)
//     this.head = newNode;
//     this.tail = this.head;
//     this.length = 1
//   }
//   push(value){
//     const newNode = new Node(value)
//     if(!this.head){
//       this.head = newNode;
//       this.tail = newNode
//     } else{
//       this.tail.next = newNode;
//       this.tail = newNode
//     }
//     this.length++;
//     return this
//   }
// }
// let myLinkedList = new LinkedList(1)
// console.log(myLinkedList)
// console.log(myLinkedList.push(2))



// const newNode = new Node(4)
// console.log(newNode)



//push
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class LinkedLists {
//   constructor(value) {
//     const newNode = new Node(value);
//     this.head = newNode;
//     this.tail = newNode;
//     this.length = 1;
//   }

//   push(value) {
//     const newNode = new Node(value);

//     if (!this.head) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       this.tail.next = newNode;
//       this.tail = newNode;
//     }

//     this.length++;
//     return this;
//   }
// }

// let myLinkedList = new LinkedLists(7); // Use the correct class name
// myLinkedList.push(4);

// console.log(myLinkedList);

//pop 
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class LinkedLists {
//   constructor(value) {
//     const newNode = new Node(value);
//     this.head = newNode;
//     this.tail = newNode;
//     this.length = 1;
//   }

//   push(value) {
//     const newNode = new Node(value);

//     if (!this.head) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       this.tail.next = newNode;
//       this.tail = newNode;
//     }

//     this.length++;
//     return this;
//   }
//   pop() {
//     if(!this.head) return undefined  //tu item ar gvaqvs
//     let temp =this.head;     //erti elementi
//     let pre = this.head;  //roca gvaq
//     while(temp.next){  //ori an meti element
//       pre = temp;
//       temp = temp.next;
//     }
//     this.tail = pre;
//     this.tail.next = null;
//     this.length--
//     if(this.length === 0){
//       this.head = null;
//       this.tail = null
//     }
//     return temp
//   } 
// }
// pop(){
//   if(!this.head) return undefined;
//   let temp = this.head;
//   let pre = this.head;
//   while(temp.next){
//     pre = temp;
//     temp = temp.next
//   }
//   this.tail = pre;
//   this.tail.next = null;
//   this.length--
//   if(this.length === 0){
//     this.head = null;
//     this.tail = null
//   }
//   return temp
// }


// let myLinkedList = new LinkedLists(1); // Use the correct class name
// myLinkedList.push(2);
// myLinkedList.push(3);

// myLinkedList.push(4);



// myLinkedList.pop()
// console.log(myLinkedList);

//unshift
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedLists {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }
  unshift(value){
    const newNode = new Node(value)
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    }else{
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
}
let myLinkedList = new LinkedLists(1)
myLinkedList.unshift(0)
console.log(myLinkedList)
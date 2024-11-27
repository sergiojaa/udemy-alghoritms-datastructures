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


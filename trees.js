// constructor trees, binary search trees.
// class Node{
//     constructor(value){
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }
// class BST{
//     constructor(){
//         this.root = null;
//     }
// }
// let myTree = new BST()
// console.log(myTree)
//BST insert   da // contains
// class Node{
//     constructor(value){
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }
// class BST{
//     constructor(){
//         this.root = null;
//     }
//     insert(value){
//         const newNode = new Node(value)
//         if (this.root === null){
//             this.root=newNode;
//             return newNode;
//         }
//         let temp = this.root;
//         while(true){
//             if (newNode.value === temp.value) return undefined;
//             if(newNode.value < temp.value){
//                 if(temp.left === null){
//                     temp.left = newNode;
//                     return this;
//                 }
//                 temp = temp.left;
//             }else{
//                     if(temp.right === null){
//                         temp.right = newNode;
//                         return this;
//                     }
//                     temp = temp.right;
//             }
            
//         }
//     }
//     contains(value){
//         if(this.root === null) return false;
//         let temp = this.root;
//         while(temp){
//             if(value < temp.value){
//                 temp = temp.left
//             }else if(value > temp.value){
//                 temp = temp.right;
//             }else{
//                 return true;
//             }
//         }
//         return false;
//     }
// }
// let myTree = new BST()
// myTree.insert(12)
// myTree.insert(20)
// myTree.insert(21)
// myTree.insert(11)
// myTree.insert(155)
// myTree.insert(133)
// myTree.insert(12)
// console.log(myTree.contains(12))

class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }

}
class bst{
    constructor(){
       this.root = null;
    }
    insert(value){
        const newNode = new Node(value)
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        let temp = this.root;
        while(true){
            if(newNode === temp)return undefined;
            if(newNode.value < temp.value){
                if(temp.left === null){
                    temp.left = newNode;
                    return this;
                }
                temp = temp.left;
            }else{
                if(temp.right === null){
                    temp.right = newNode;
                    return this;
                }
                temp = temp.right;
            }
        }
    }
    contains(value){
        if(this.root === null) return false;
        let temp = this.root;
        while(temp){
            if(value < temp.value){
                temp = temp.left;
            }else if(value  > temp.value){
                temp = temp.right;
            }else{
                return true;
            }
        }
        return false;
    }
}
let myTree = new bst()
myTree.insert(65)
myTree.insert(22)
myTree.insert(45)
myTree.insert(222)
myTree.insert(34)
myTree.insert(23)
myTree.insert(111)
console.log(myTree.contains(22))
// done trees

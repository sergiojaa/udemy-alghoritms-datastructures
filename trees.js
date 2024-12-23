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
//BST insert
class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BST{
    constructor(){
        this.root = null;
    }
    insert(value){
        const newNode = new Node(value)
        if (this.root === null){
            this.root=newNode;
            return newNode;
        }
        let temp = this.root;
        while(true){
            if (newNode.value === temp.value) return undefined;
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
}
let myTree = new BST()
myTree.insert(12)
myTree.insert(20)
myTree.insert(21)
myTree.insert(11)
myTree.insert(155)
myTree.insert(133)
myTree.insert(12)
console.log(myTree)
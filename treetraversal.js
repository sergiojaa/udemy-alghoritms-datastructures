// breadth first search  code
class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BST {
    constructor(){
        this.root = null
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
    bfs(){
        let currentNode = this.root;
        let queue = [];
        let results = [];
    
        queue.push(currentNode)
        while(queue.length){
            currentNode = queue.shift();
            results.push(currentNode.value)
            if(currentNode.left) queue.push(currentNode.left)
                if(currentNode.right) queue.push(currentNode.right)
        }
            return results  
    }
}
let myTree = new BST()
myTree.insert(22)
myTree.insert(31)
myTree.insert(11)
myTree.insert(14)
myTree.insert(133)
myTree.insert(144)
myTree.insert(13)
console.log(myTree.bfs())
// dfs:  depth first search preorder intro 


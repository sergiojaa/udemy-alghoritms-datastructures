
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    #rInsert(value, currentNode) {
        if (currentNode === null) {
            return new Node(value);
        }
        if (value < currentNode.value) {
            currentNode.left = this.#rInsert(value, currentNode.left);
        } else if (value > currentNode.value) {
            currentNode.right = this.#rInsert(value, currentNode.right);
        }
        return currentNode;
    }

    insert(value) {
        if (this.root === null) {
            this.root = new Node(value);
            return this;
        }
        this.#rInsert(value, this.root);
        return this;
    }

    rContains(value, currentNode = this.root) {
        if (currentNode === null) return false;
        if (value === currentNode.value) return true;
        if (value < currentNode.value) {
            return this.rContains(value, currentNode.left);
        } else {
            return this.rContains(value, currentNode.right);
        }
    }
    #deleteNode(value,currentNode){
        
    }
}

let myTree = new BST();
myTree.insert(12);
myTree.insert(20);
myTree.insert(21);
myTree.insert(11);
myTree.insert(155);
myTree.insert(133);
myTree.insert(12);

console.log(myTree.rContains(12)); 
console.log(myTree.rContains(22)); 


class Element{
    constructor(value){
        this.next = null;
        this.value = value;
    }
}



class LinkedList {
    constructor(node) {
        this.firstElement = node;
        this.lastElement = null;
        this.list = []
        this.size = 0;
    }
    //methods
    addElement(elt, index){
        var node = new Element(elt)
        var currentNode = this.list.firstElement
        for(let i = 0; i < index; i++){
            currentNode = currentNode.next
            secondNode = currentNode.next
        }
        currentNode.next = node;
        node.next = secondNode;
        this.size++
    }
    addHead(elt){
        var node = new Element(elt)
        node.next = list.firstElement
        this.list.firstElement = node;
        this.size++;
    }
    addTail(elt){
        var node = new Element(elt)
        this.list.lastElement.next = node
        node.next = null;
        this.size++
    }



    delElementByIndex(index){
        var currentNode = this.list.firstElement
        for(let i = 0; i < index; i++){
            currentNode = currentNode.next
            
        }
        deleteNode = currentNode.next
        finalNode = deleteNode.next
        currentNode.next = finalNode
        this.size--
    }
    delElementByName(elt){
        var previousNode = this.list.firstElement
        var currentNode = this.list.firstElement.next
        for(let i = 0; i < this.size; i++){
            if(currentNode === elt) { 
                currentNode = currentNode.next
                previousNode.next = currentNode
            }
            currentNode = currentNode.next
            previousNode = previousNode.next   
        }
        
    }
    getElementByIndex(index){
        var currentNode = this.list.firstElement
        for(let i = 0; i < index; i++){ currentNode = currentNode.next }
        return currentNode 
    }
    getElementByName(elt){
        var currentNode = this.list.firstElement
        var index = 0;
        while(currentNode.next){
            if(currentNode === elt) return index
            index++
        }
    }

    getSize(){
        return this.size
    }
    
        
  }
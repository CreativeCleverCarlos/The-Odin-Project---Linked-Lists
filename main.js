//what is about to be made can be made with an array, BUT, this is good practie and a simple dynamic data structure

//A linke dlist is a linear collection of data elements calle dnodes that "point" to the next node by means of a pointer


class LinkedList(){
    constructor(head = null)
    this.head = head;

    append(value){
        if (this.head){ // meaning there is no head,
            this.head = new node(value);
            return this;
        }
        let tail = this.getTail();
    }

}

class node {
    constructor(value = null, next = null){ //by default value and next are equal to null unless it's been designated
        this.value = value;
        this.next = next;
    }
}

//this is not completed, stopped because the youtube video jI found just talked about the code that they already pre-prepped and completed, but didn't walk through how they did it all

//in essence it's just methods being created and arrays with more steps. 
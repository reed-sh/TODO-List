import { Task } from "./tasks";

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    };
};

export class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    append(value) {
        const newNode = new Node(value);

        if (this.tail) {
            this.tail.next = newNode;
        } else {
            this.head = newNode;
        }

        this.tail = newNode;
        this.size++;
    }

    prepend(value) {
        const newNode = new Node(value);
        if (this.head) {
            newNode.next = this.head;
        } else {
            this.tail = newNode;
        }
        this.head = newNode;
        this.size++;
    }

    remove(value) {
        if (this.head === null) {
            return;            
        }

        if (this.head.value === value) {
            this.head = this.head.next;
            this.size--;
            return;
        }

        let current = this.head;
        let previous = null;

        while (current && current.value !== value) {
            previous = current;
            current = current.next;
        }

        if (current === null) return;

        previous.next = current.next;
        if (current === this.tail) {
            this.tail = previous;
        }
        this.size--;
    }

    print() {
        const values = [];
        let current = this.head;

        while (current) {
            values.push(current.value);
            current = current.next;
        }

        console.log(values.join(' -> '));
    }

    search(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) {
                return true;
            }

            current = current.next;
        }

        return false;
    }
}

export function addNewTask(){
    let name = document.getElementById('newTaskNameInput').value;
    let category = document.getElementById('newTaskCategoryInput').value;
    let date = document.getElementById('newTaskDateInput').value;

    const task = new Task(name, category, date);
    return task;
}
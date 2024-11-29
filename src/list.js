import { generateTask } from "./page-load";
import { Task } from "./tasks";

export let taskArray = [];

export function createNewTask(event){
    event.preventDefault();

    let taskName = document.getElementById('newTaskNameInput').value;
    let taskCategory = document.getElementById('newTaskCategoryInput').value;
    let taskDate = document.getElementById('newTaskDateInput').value;

    const taskToAdd = new Task(taskName, taskCategory, taskDate);
    
    function addToList(task) {
        taskArray.push(task);
    }

    addToList(taskToAdd);
    generateTask(taskToAdd);
    console.log(taskArray);
}
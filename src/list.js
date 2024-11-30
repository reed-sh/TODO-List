import { generateTask, refreshCatList } from "./page-load";
import { Task } from "./tasks";

export let taskArray = [];
export let catArray = [];

export function createNewTask(event){
    event.preventDefault();

    let taskName = document.getElementById('newTaskNameInput').value;
    let taskCategory = document.getElementById('newTaskCategoryInput').value;
    let taskDate = document.getElementById('newTaskDateInput').value;

    const taskToAdd = new Task(taskName, taskCategory, taskDate);
    
    function addToList(task) {
        taskArray.push(task);
    }

    createNewCategory(taskCategory);
    addToList(taskToAdd);
    generateTask(taskToAdd);
    console.log(taskArray);
}

export function createNewCategory(category) {

    let catName = category;

    function checkIfExists(list, cat){
        if (list.includes(cat)) {
            return;
        } else {
            addToCatList(cat);
        }
    }

    function addToCatList(catName) {
        catArray.push(catName)
    };

    checkIfExists(catArray, catName);
    refreshCatList();
}
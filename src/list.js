import { generateTask, refreshCatList, reloadTaskList } from "./page-load";
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

    // Reset input fields back to placeholders
    const inputs = document.querySelectorAll('input[class="newTaskInput"]');
    inputs.forEach(function(input) {

        input.value = '';
        input.placeholder = input.placeholder;

    });

    createNewCategory(taskCategory);
    addToList(taskToAdd);
    reloadTaskList();
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
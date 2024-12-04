import { checkIfEmpty, refreshCatList, reloadTaskList } from "./page-load";
import { Task } from "./tasks";

export let taskArray = [];
export let catArray = [`General`, `Dicks`];

export function createNewTask(event){
    event.preventDefault();

    const taskId = `${Date.now()}-${Math.random().toString(36).slice(2, 11)}`;
    let taskName = document.getElementById('newTaskNameInput').value;
    let taskCategory = document.getElementById('newTaskCategoryInput').value;
    let taskDate = document.getElementById('newTaskDateInput').value;

    const taskToAdd = new Task(taskName, taskCategory, taskDate, taskId);
    
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

export function removeTask(event) {
    event.preventDefault();

    let button = event.target;
    let task = button.parentNode;
    let taskId = task.getAttribute(`data-id`);

    taskArray = taskArray.filter(item => item.id !== taskId)
    console.log(taskArray);
    reloadTaskList();
    checkIfEmpty(taskArray);
    refreshCatList();
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

export function removeCategory(event) {

    let catName = event.target.parentNode.dataset.categoryName;

    catArray = catArray.filter(item => item !== catName)
    refreshCatList();
}
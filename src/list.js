import { Task } from "./tasks";

export function addNewTask() {
    inputName = document.getElementById('newTaskNameInput').value;
    inputCategory = document.getElementById('newTaskCategoryInput').value;
    inputDate = document.getElementById('newTaskDateInput').value;

    const task = new Task(inputName, inputCategory, inputDate);
    console.log(task);
    return task;
};

document.getElementById("newTaskBtn").addEventListener("click", addNewTask);
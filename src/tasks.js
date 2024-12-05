import { Task } from "./taskObj"
import { setAttributes } from "./utils"
export let tasksArray = []
export function newTask(event){
    event.preventDefault()
    const taskId = `${Date.now()}-${Math.random().toString(36).slice(2, 11)}`
    const taskTitle = document.getElementById('titleInput').value
    const taskProject = document.getElementById('projectSelect').value
    const taskDate = document.getElementById('dateInput').value
    const newTask = new Task(taskTitle, taskProject, taskDate, taskId)
    addTask(newTask)
}

function addTask(task) {
    tasksArray.push(task)
    console.log(task, `added to the list`)
    console.log(`Current list of tasks:`, tasksArray)
}

export function removeTask(event) {
    event.preventDefault()
    tasksArray = tasksArray.filter(item => item.id !== event.target.parentNode.getAttribute('data-id'))
}
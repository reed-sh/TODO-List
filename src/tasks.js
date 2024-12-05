import { Task } from "./taskObj"
export let tasksArray = []
export function newTask(event){
    event.preventDefault()
    const taskId = `${Date.now()}-${Math.random().toString(36).slice(2, 11)}`
    const taskTitle = document.getElementById('titleInput').value
    const taskProject = document.getElementById('projectInput').value
    const taskDate = document.getElementById('dateInput').value
    const newTask = new Task(taskTitle, taskProject, taskDate, taskId)
    tasksArray.push(newTask)
}
export function removeTask(event) {
    event.preventDefault()
    tasksArray = tasksArray.filter(item => item.id !== event.target.parentNode.getAttribute('data-id'))
}

export function displayTask(task) {
    const taskContainer = document.createElement(`div`)
    const taskName = document.createElement(`div`)
    const taskProject = document.createElement(`div`)
    const taskDate = document.createElement(`div`)
    const taskCompletion = document.createElement(`button`)
    const taskList = document.getElementById(`list`)
    setAttributes(taskContainer, {'class': `taskContainer`, 'data-id': task.id})
    setAttributes(taskName, {'class': `taskName`})
    setAttributes(taskProject, {'class': `taskProject`})
    setAttributes(taskDate, {'class': `taskDate`})
    setAttributes(taskCompletion, {'class': `taskCompletion`})
    taskName.textContent = task.title
    taskCategory.textContent = task.category
    taskDate.textContent = task.date
    taskCompletion.textContent = `X`
    taskCompletion.addEventListener(`click`, removeTask)
    taskList.appendChild(taskContainer)
    taskContainer.appendChild(taskName)
    taskContainer.appendChild(taskCategory)
    taskContainer.appendChild(taskDate)
    taskContainer.appendChild(taskCompletion)
}
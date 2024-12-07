import { Task } from "./taskObj"
import { checkboxClicked } from "./utils";
export let tasksArray = [
    new Task("Finish History Essay", "History", "12-12-2024", "3479261837", false),
    new Task("Study for Physics Midterm", "Physics", "17-12-2024", "2357849031", false),
    new Task("Group Meeting for Marketing Project", "Marketing", "20-12-2024", "9485726831", false),
    new Task("Submit Final Paper for History", "History", "10-01-2025", "5748392649", false),
    new Task("Review Notes for Physics Class", "Physics", "14-01-2025", "4395628174", true),
    new Task("Complete Marketing Homework", "Marketing", "19-01-2025", "5829471013", true),
    new Task("Attend Chemistry Lab", "Physics", "05-02-2025", "9173748582", false),
    new Task("Prepare Presentation for Marketing", "Marketing", "12-02-2025", "6402581974", false),
    new Task("Read Chapter 5 for History", "History", "22-02-2025", "8315749203", false),
    new Task("Write Research Proposal for Physics", "Physics", "03-03-2025", "2847368295", false)
];

export function newTask(event){
    event.preventDefault()
    const taskId = `${Date.now()}-${Math.random().toString(36).slice(2, 11)}`
    const taskTitle = document.getElementById('titleInput').value
    const taskProject = document.getElementById('projectSelect').value
    const taskDate = document.getElementById('dateInput').value
    const newTask = new Task(taskTitle, taskProject, taskDate, taskId, false)
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

export function taskChangeCompletion(event) {
    if (event.target && event.target.type === `checkbox`) {
        const selectedTask = tasksArray.filter(item => item.id === event.target.parentNode.parentNode.getAttribute('data-id'))
        let task = selectedTask[0]
        task.changeCompletion()
        console.log(task, "changed completion")
        return
    }
    if (event.target && event.target.closest(`.completeButton`)) {
        const button = event.target.closest(`.completeButton`)
        const checkbox = button.querySelector(`input[type="checkbox"]`)
        if (checkbox) {
            const selectedTask = tasksArray.filter(item => item.id === button.parentNode.getAttribute('data-id'))
            let task = selectedTask[0]
            task.changeCompletion()
            checkbox.checked = !checkbox.checked
            console.log(task, "changed completion")
        }
    }
}
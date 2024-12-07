import { addProject, projectsArray, removeProject, selectedProject } from "./projects"
import { tasksArray, newTask, removeTask } from "./tasks"
import { setAttributes } from "./utils"

export function loadPage() {
    const content = document.getElementById(`content`)
    // sidebar:
    const sidebar = document.createElement(`div`)
    const menu = document.createElement(`div`)
    const projects = document.createElement(`div`)
    // sidebar -> menu:
    const newTaskBtn = document.createElement(`button`)
    const homeBtn = document.createElement(`button`)
    const searchBtn = document.createElement(`button`)
    const todayBtn = document.createElement(`button`)
    const upcomingBtn = document.createElement(`button`)
    // sidebar -> projects
    const projectsLabel = document.createElement(`ul`);
    const projectsList = document.createElement(`list`)
    const newProjectBtn = document.createElement(`button`)
    //container:
    const container = document.createElement(`div`)
    const header = document.createElement(`div`)
    const main = document.createElement(`div`)
    //container -> header:
    const pageTitle = document.createElement(`span`)
    const pageDivider = document.createElement(`hr`)
  
    setAttributes(menu, {'id': `menu`, 'class': `menu`})
    setAttributes(projects, {'id': `projects`, 'class': `projects`})
    setAttributes(newTaskBtn, {'id': `newTaskBtn`, 'class': `sidebarBtn`})
    setAttributes(homeBtn, {'id': `homeBtn`, 'class': `sidebarBtn`})
    setAttributes(searchBtn, {'id': `searchBtn`, 'class': `sidebarBtn`})
    setAttributes(upcomingBtn, {'id': `upcomingBtn`, 'class': `sidebarBtn`})
    setAttributes(todayBtn, {'id': `todayBtn`, 'class': `sidebarBtn`})
    setAttributes(sidebar, {'id': `sidebar`})
    setAttributes(projectsLabel, {'id': `projectsLabel`})
    setAttributes(projectsList, {'id': `projectsList`})
    setAttributes(newProjectBtn, {'id': `newProjectBtn`})
    setAttributes(container, {'id': `container`})
    setAttributes(main, {'id': `main`})
    setAttributes(pageTitle, {'id': `pageTitle`, 'class': `pageTitle`})
    setAttributes(pageDivider, {'id': `pageDivider`, 'class': `pageDivider`})
    
    newTaskBtn.innerText = `NEW TASK`
    homeBtn.innerText = `Home`
    searchBtn.innerText = `Search`
    todayBtn.innerHTML = `Today`
    upcomingBtn.innerText = `Upcoming`
    projectsLabel.innerText = `Projects`
    newProjectBtn.innerText = `Add Project`

    content.appendChild(main)
    content.appendChild(sidebar)
    content.appendChild(header)
    sidebar.appendChild(menu)
    sidebar.appendChild(projects)
    menu.appendChild(newTaskBtn)
    menu.appendChild(homeBtn)
    menu.appendChild(searchBtn)
    menu.appendChild(todayBtn)
    menu.appendChild(upcomingBtn)
    projects.appendChild(projectsLabel)
    projects.appendChild(projectsList)
    projects.appendChild(newProjectBtn)
    header.appendChild(pageTitle)
    header.appendChild(pageDivider)

    document.getElementById("homeBtn").addEventListener("click", () => loadTasksList(tasksArray))
    document.getElementById("newTaskBtn").addEventListener("click", loadNewTaskForm)
    document.getElementById("newProjectBtn").addEventListener("click", newProjectInput)
    loadTasksList(tasksArray)
    loadProjectsList(projectsArray)
}

function clearMain() {
    main.innerHTML = ``
}

function loadTasksList(array) {
    const tasksList = document.createElement(`div`)
    const displayedTasks = new Set()
    tasksList.setAttribute(`id`, `tasksList`)
    clearMain()
    setPageTitle("Your List")

    if (array.length === 0) {
        const isEmptyMsg = document.createElement(`span`)
        isEmptyMsg.setAttribute(`id`, `isEmptyMsg`)
        isEmptyMsg.textContent = "Your project is empty."
        main.appendChild(isEmptyMsg)
    }

    array.forEach(item => {
        if (!displayedTasks.has(item.title)) {
            tasksList.appendChild(displayTask(item))
            displayedTasks.add(item.title)
        }
    })

    main.appendChild(tasksList)
}

function loadProjectsList(array) {
    const projects = array
    const projectsList = document.getElementById(`projectsList`)
    function updateList(projects) {
        const listedProjects = projectsList.getElementsByTagName(`li`)
        for (let li of listedProjects) {
            const projectName = li.dataset.projectName;
            if (!projects.includes(projectName)) {
                projectsList.removeChild(li);
            }
        }
    }
    projects.forEach(item => {
        const listedProjects = projectsList.getElementsByTagName(`li`);
        let projectIsDisplayed = false;
        for (let li of listedProjects) {
            if (li.dataset.projectName === item) {
                projectIsDisplayed = true;
                break;
            }
        }
        if (!projectIsDisplayed) {
            const newProject = document.createElement(`li`);
            const removeButton = document.createElement(`button`);
            newProject.dataset.projectName = item;
            newProject.textContent = item;
            newProject.addEventListener(`click`, (event) => {
                loadTasksList(selectedProject(event))
                setPageTitle(newProject.dataset.projectName)
        })
            removeButton.textContent = `X`;
            removeButton.setAttribute(`class`, `removeProjectBtn`);
            removeButton.addEventListener(`click`, (event) => {
                removeProject(event)
                loadProjectsList(projectsArray)
            });
            newProject.appendChild(removeButton);
            projectsList.appendChild(newProject);
        }
    })
    updateList(projects)
}

function displayTask(task) {
    const taskContainer = document.createElement(`div`)
    const taskTitle = document.createElement(`div`)
    const taskProject = document.createElement(`div`)
    const taskDate = document.createElement(`div`)
    const deleteTask = document.createElement(`button`)
    setAttributes(taskContainer, {'class': `taskContainer`, 'data-id': task.id})
    setAttributes(taskTitle, {'class': `taskTitle`})
    setAttributes(taskProject, {'class': `taskProject`})
    setAttributes(taskDate, {'class': `taskDate`})
    setAttributes(deleteTask, {'class': `deleteTask`})
    taskTitle.textContent = task.title
    taskProject.textContent = task.project
    taskDate.textContent = task.date
    deleteTask.textContent = `X`
    deleteTask.addEventListener(`click`, (event) => {
        removeTask(event)
        loadTasksList(tasksArray)
    })
    taskContainer.appendChild(taskTitle)
    taskContainer.appendChild(taskProject)
    taskContainer.appendChild(taskDate)
    taskContainer.appendChild(deleteTask)

    return taskContainer
}

function loadNewTaskForm() {
    if (document.getElementById(`newTaskWrapper`)) {
        return
    }
    clearMain()
    setPageTitle("Create New Task")
    const newTaskWrapper = document.createElement(`div`)
    const form = document.createElement(`form`)
    const titleLabel = document.createElement(`label`)
    const titleInput = document.createElement(`input`)
    const projectLabel = document.createElement(`label`)
    const projectSelect = document.createElement(`select`)
    const dateLabel = document.createElement(`label`)
    const dateInput = document.createElement(`input`)
    const button = document.createElement(`button`)

    setAttributes(newTaskWrapper, {'id': `newTaskWrapper`, 'class': `newTaskWrapper`})
    setAttributes(form, {'id': `newTaskForm`, 'class': `newTaskForm`})
    setAttributes(titleLabel, {'id': `titleLabel`, 'class': `newTaskLabel`})
    setAttributes(titleInput, {'id': `titleInput`, 'class': `newTaskInput`})
    setAttributes(projectLabel, {'id': `projectLabel`, 'class': `newTaskLabel`})
    setAttributes(projectSelect, {'id': `projectSelect`, 'class': `newTaskInput`})
    setAttributes(dateLabel, {'id': `dateLabel`, 'class': `newTaskLabel`})
    setAttributes(dateInput, {'id': `dateInput`, 'class': `newTaskInput`})
    setAttributes(button, {'id': `submitTaskBtn`, 'class': `submitTaskBtn`})
    titleLabel.innerText = `Title`
    projectLabel.innerText = `Project`
    dateLabel.innerText = `Date`
    button.innerText = `Submit`

    function populateProjectSelector(arr) {
        const projectSelect = document.getElementById(`projectSelect`)
        arr.forEach(item => {
            const option = document.createElement(`option`)
            option.value = item
            option.textContent = item
            projectSelect.appendChild(option)
        })
    }
    button.addEventListener('click', (event) => {
        newTask(event)
        clearMain()
        loadTasksList(tasksArray)
    })

    main.appendChild(newTaskWrapper)
    newTaskWrapper.appendChild(form)
    form.appendChild(titleLabel)
    form.appendChild(titleInput)
    form.appendChild(projectLabel)
    form.appendChild(projectSelect)
    form.appendChild(dateLabel)
    form.appendChild(dateInput)
    form.appendChild(button)
    populateProjectSelector(projectsArray);
}

function setPageTitle(string) {
    let pageTitle = document.getElementById(`pageTitle`)
        pageTitle.innerText = string
}

function newProjectInput(event) {
    const projectButton = event.target
    const projectInput = document.createElement(`input`)
    projectInput.type = `text`
    setAttributes(projectInput, {'id': `projectInput`, 'class': `projectInput`})
    if (projectInput){
        projectButton.parentNode.replaceChild(projectInput, projectButton)
    }
    projectInput.focus()
    projectInput.addEventListener(`keydown`, function(event) {
        if (event.key === `Enter`) {
            const newButton = document.createElement(`button`)
            newButton.id = `newProjectBtn`
            newButton.innerText = `New Project`
            projectInput.parentNode.replaceChild(newButton, projectInput)
            newButton.addEventListener(`click`, newProjectInput)
            addProject(projectInput.value)
            loadProjectsList(projectsArray)
        }
    })
    projectInput.addEventListener(`blur`, function() {
        const newButton = document.createElement(`button`)
        newButton.id = `newProjectBtn`
        newButton.innerText = `New Project`
        projectInput.parentNode.replaceChild(newButton, projectInput)
        newButton.addEventListener(`click`, newProjectInput)
    })
}


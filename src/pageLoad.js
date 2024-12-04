import { addProject, removeProject, selectedProject } from "./projects"
import { tasksArray, newTask, displayTask } from "./tasks"
import { setAttributes } from "./utils"

export function loadPage() {
    const content = document.getElementById(`content`);
    const sidebar = document.createElement(`div`);
    const container = document.createElement(`div`);
    const list = document.createElement(`div`);
    const newTaskBtn = document.createElement(`button`);
    const homeBtn = document.createElement(`button`);
    const searchBtn = document.createElement(`button`);
    const todayBtn = document.createElement(`button`);
    const upcomingBtn = document.createElement(`button`);
    const sideCatLabel = document.createElement(`ul`);
    const sideCatList = document.createElement(`list`);
    const createCatBtn = document.createElement(`button`);
    const pageTitle = document.createElement(`span`);
    const pageDivider = document.createElement(`hr`);

    setAttributes(newTaskBtn, {'id': `newTaskBtn`, 'class': `sidebarBtn`});
    setAttributes(homeBtn, {'id': `todayBtn`, 'class': `sidebarBtn`});
    setAttributes(searchBtn, {'id': `searchBtn`, 'class': `sidebarBtn`});
    setAttributes(upcomingBtn, {'id': `upcomingBtn`, 'class': `sidebarBtn`});
    setAttributes(todayBtn, {'id': `todayBtn`, 'class': `sidebarBtn`});
    setAttributes(sidebar, {'id': `sidebar`});
    setAttributes(sideCatLabel, {'id': `sideCatLabel`});
    setAttributes(sideCatList, {'id': `sideCatList`})
    setAttributes(createCatBtn, {'id': `createCatBtn`});
    setAttributes(container, {'id': `container`});
    setAttributes(list, {'id': `list`});
    setAttributes(listEmptyMsg, {'id': `emptyListMsg`, 'class': `emptyListMsg`});
    setAttributes(pageTitle, {'id': `pageTitle`, 'class': `pageTitle`});
    setAttributes(pageDivider, {'id': `pageDivider`, 'class': `pageDivider`});
    
    newTaskBtn.innerText = `NEW TASK`;
    homeBtn.innerText = `Home`;
    searchBtn.innerText = `Search`;
    todayBtn.innerHTML = `Today`;
    upcomingBtn.innerText = `Upcoming`;
    sideCatLabel.innerText = `CATEGORIES`;
    createCatBtn.innerText = `+ ADD CATEGORY`;
    pageTitle.innerText = `Your List`;

    content.appendChild(sidebar);
    sidebar.appendChild(newTaskBtn);
    sidebar.appendChild(homeBtn);
    sidebar.appendChild(searchBtn);
    sidebar.appendChild(todayBtn);
    sidebar.appendChild(upcomingBtn);
    sidebar.appendChild(sideCatLabel);
    sidebar.appendChild(sideCatList);
    sidebar.appendChild(createCatBtn);

    content.appendChild(container);
    container.appendChild(pageTitle);
    container.appendChild(pageDivider);
    container.appendChild(list);
    list.appendChild(listEmptyMsg);

    document.getElementById("todayBtn").addEventListener("click", () => loadTasksList(tasksArray));
    document.getElementById("newTaskBtn").addEventListener("click", newTaskWindow);
    document.getElementById("createCatBtn").addEventListener("click", newCategoryInput);
}
function loadTasksList(array) {
    const listWrapper = document.getElementById(`list`)
    if(listWrapper) {
        listWrapper.innerHTML = ``
    }
    array.forEach(item => {
        const listedTasks = listWrapper.getElementsByClassName(`taskName`)
        const taskIsDisplayed = false
        for (let taskTitle of listedTasks) {
            if (!taskTitle.textContent === item.title) {
                taskIsDisplayed = true
                break;
            }
        }
        if (!taskIsDisplayed) {
            displayTask(item)
        }
    })
}
function loadProjectsList(array) {
    const projects = array;
    const projectsWrapper = document.getElementById(`sideCatList`);
    function updateList(projects) {
        const listedProjects = list.getElementsByTagName(`li`);
        for (let li of listedProjects) {
            const projectName = li.dataset.projectName;
            if (!projects.includes(projectName)) {
                projectsWrapper.removeChild(li);
            }
        }
    }
    projects.forEach(item => {
        const listedProjects = list.getElementsByTagName(`li`);
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
            newProject.addEventListener(`click`, selectedProject);
            removeButton.textContent = `X`;
            removeButton.setAttribute(`class`, `removeCatBtn`);
            removeButton.addEventListener(`click`, removeProject);
            newProject.appendChild(removeButton);
            list.appendChild(newProject);
        }
    });
    updateList(projects)
}
function loadNewTaskScreen() {
    if (document.getElementById(`newTaskContainer`)) {
        return
    }
    const newTaskWrapper = document.createElement(`div`).setAttribute(`id`, `newTaskWrapper`).setAttribute(`class`, `newTaskWrapper`)
    const form = document.createElement(`form`).setAttribute(`id`, `newTaskForm`).setAttribute(`class`, `newTaskForm`)
    const titleLabel = document.createElement(`label`).setAttribute(`id`, `titleLabel`).setAttribute(`class`, `newTaskLabel`)
    const titleInput = document.createElement(`input`).setAttribute(`id`, `titleInput`).setAttribute(`class`, `newTaskInput`)
    const projectLabel = document.createElement(`label`).setAttribute(`id`, `projectLabel`).setAttribute(`class`, `newTaskLabel`)
    const projectSelect = document.createElement(`select`).setAttribute(`id`, `projectSelect`).setAttribute(`class`, `newTaskInput`)
    const dateLabel = document.createElement(`label`).setAttribute(`id`, `dateLabel`).setAttribute(`class`, `newTaskLabel`)
    const dateInput = document.createElement(`input`).setAttribute(`id`, `dateSelect`).setAttribute(`class`, `newTaskInput`)
    const button = document.createElement(`button`).setAttribute(`id`, `submitTaskBtn`).setAttribute(`class`, `submitTaskBtn`)
    pageTitle.innerText = `Create New Task`
    titleLabel.innerText = `Title`
    projectLabel.innerText = `Project`
    dateLabel.innerText = `Date`
    button.innerText = `Submit`

    function populateProjectSelector(arr) {
        const projectSelect = document.getElementById(`newTaskCategoryInput`)
        arr.forEach(item => {
            const option = document.createElement(`option`)
            option.value = item
            option.textContent = item
            projectSelect.appendChild(option)
        })
    }
    button.addEventListener(`click`, newTask);
    container.appendChild(newTaskContainer)
    newTaskWrapper.appendChild(form)
    form.appendChild(titleLabel)
    form.appendChild(titleInput)
    form.appendChild(projectLabel)
    form.appendChild(projectSelect)
    form.appendChild(dateLabel)
    form.appendChild(dateInput)
    form.appendChild(button)
    populateProjectSelector();
}
function newProjectInput(event) {
    const projectButton = event.target
    const projectInput = document.createElement(`input`)
    projectInput.type = `text`
    setAttributes(projectInput, {'id': `inputCat`, 'class': `inputCat`})
    if (projectInput){
        projectButton.parentNode.replaceChild(projectInput, projectButton)
    }
    projectInput.focus()
    projectInput.addEventListener(`keydown`, function(event) {
        if (event.key === `Enter`) {
            const newButton = document.createElement(`button`)
            newButton.id = `createCatBtn`
            newButton.innerText = `+ ADD CATEGORY`
            projectInput.parentNode.replaceChild(newButton, projectInput)
            newButton.addEventListener(`click`, newProject)
            addProject(inputCat.value)
        }
    })
    projectInput.addEventListener(`blur`, function() {
        const newButton = document.createElement(`button`)
        newButton.id = `createCatBtn`
        newButton.innerText = `+ ADD CATEGORY`
        projectInput.parentNode.replaceChild(newButton, projectInput)
        newButton.addEventListener(`click`, projectInput)
    })
}


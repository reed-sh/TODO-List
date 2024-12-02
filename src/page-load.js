import { catArray, createNewTask, taskArray, removeTask } from "./list";

export function generatePage() {
    const content = document.getElementById(`content`);
    const sidebar = document.createElement(`div`);
    const container = document.createElement(`div`);

    const list = document.createElement(`div`);
    const listEmptyMsg = document.createElement(`span`);

    const newTaskBtn = document.createElement(`button`);
    const homeBtn = document.createElement(`button`);
    const searchBtn = document.createElement(`button`);
    const todayBtn = document.createElement(`button`);
    const upcomingBtn = document.createElement(`button`);

    const sideCatLabel = document.createElement(`ul`);
    const sideCatList = document.createElement(`list`);
    const createCatBtn = document.createElement(`button`);
    const loginBtn = document.createElement(`loginBtn`);
    
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
    
    listEmptyMsg.innerText = `YOUR LIST IS EMPTY`;

    newTaskBtn.innerText = `NEW TASK`;
    homeBtn.innerText = `Home`;
    searchBtn.innerText = `Search`;
    todayBtn.innerHTML = `Today`;
    upcomingBtn.innerText = `Upcoming`;

    sideCatLabel.innerText = `CATEGORIES`;
    createCatBtn.innerText = `+ ADD CATEGORY`;

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
    container.appendChild(list);
    list.appendChild(listEmptyMsg);

    document.getElementById("newTaskBtn").addEventListener("click", newTaskWindow);

    // Display message if list is empty
    console.log(`List Generated!`);
}

export function checkIfEmpty(List) {
    const emptyListMsg = document.querySelector(`.emptyuListMsg`);

    if (emptyListMsg) {
        if (List.length === 0) {
            document.querySelector(`.emptyListMsg`).style.display = `inline`;
        } else {
            document.querySelector(`.emptyListMsg`).style.display = `none`;
        }
    } else {
        console.error(`emptyListMsg element not found!`);
    }
}

export function generateTask(task) {
    let taskContainer = document.createElement(`div`);
    let taskName = document.createElement(`div`);
    let taskCategory = document.createElement(`div`);
    let taskDate = document.createElement(`div`);
    let taskComplete = document.createElement(`button`);
    let taskList = document.getElementById(`list`);

    checkIfEmpty(taskArray);

    setAttributes(taskContainer, {'class': `taskContainer`});
    setAttributes(taskName, {'class': `taskName`});
    setAttributes(taskCategory, {'class': `taskCategory`});
    setAttributes(taskDate, {'class': `taskDate`});
    setAttributes(taskComplete, {'class': `taskComplete`});

    taskContainer.setAttribute('data-id', task.id);

    taskName.innerText = task.title;
    taskCategory.innerText = task.category;
    taskDate.innerText = task.date;
    taskComplete.innerText = "X"

    taskComplete.addEventListener("click", removeTask);

    taskList.appendChild(taskContainer);
    taskContainer.appendChild(taskName);
    taskContainer.appendChild(taskCategory);
    taskContainer.appendChild(taskDate);
    taskContainer.appendChild(taskComplete);

}

export function reloadTaskList() {
    const taskArr = taskArray;
    const taskListWrapper = document.getElementById(`list`);

    hideNewTaskWindow();
    checkIfEmpty();

    if(taskListWrapper) {
        taskListWrapper.innerHTML = ``;
    }

    taskArr.forEach(item => {
        let tasksAlreadyListed = taskListWrapper.getElementsByClassName(`taskName`);
        let taskIsDisplayed = false;

        for (let taskName of tasksAlreadyListed) {
            if (!taskName.textContent === item.title) {
                taskIsDisplayed = true;
                break;
            }
        }

        if (!taskIsDisplayed) {
            generateTask(item);
        }

    })
}

function hideTaskList() {
    document.querySelector(`#list`).style.display = "none";
}

function showTaskList() {
    document.querySelector(`#list`).style.display = "flex";
    reloadTaskList();
}

function hideNewTaskWindow() {
    const window = document.getElementById(`newTaskContainer`);

    if(window) {
        window.remove();
    }
}

export function refreshCatList() {
    const categories = catArray;
    let list = document.getElementById(`sideCatList`);

    showTaskList();

    function updateList(categories) {
        const existingCategories = list.getElementsByTagName(`li`);

        for (let li of existingCategories) {
            if (!categories.includes(li.textContent)) {
                list.removeChild(li);
            }
        }
    }


    categories.forEach(item => {
        const existingCategories = list.getElementsByTagName(`li`);
        let categoryDisplayed = false;

        for (let li of existingCategories) {
            if (li.textContent === item) {
                categoryDisplayed = true;
                break;
            }
        }

        if (!categoryDisplayed) {
            const li = document.createElement(`li`);
            li.textContent = item;
            list.appendChild(li);
        }
    });
    updateList(categories);
}

function setAttributes(elmnt, attributesToSet) {
    for (let i in attributesToSet) {
        elmnt.setAttribute(i, attributesToSet[i]);
    }
}

function newTaskWindow() {

    if (document.getElementById(`newTaskContainer`)) {
        return;
    }

    const newTaskContainer = document.createElement(`div`);
    const newTaskForm = document.createElement(`form`);
    const newTaskNameLabel = document.createElement(`label`);
    const newTaskNameInput = document.createElement(`input`);
    const newTaskCategoryLabel = document.createElement(`label`);
    const newTaskCategoryInput = document.createElement(`select`);
    const newTaskDateLabel = document.createElement(`label`);
    const newTaskDateInput = document.createElement(`input`);
    const addTaskBtnLabel = document.createElement(`label`);
    const addTaskBtn = document.createElement(`button`);

    setAttributes(newTaskContainer, {'id': `newTaskContainer`, 'class': `newTaskContainer`});
    setAttributes(newTaskForm, {'id': `newTaskForm`, 'class': `newTaskForm`});
    setAttributes(newTaskNameLabel, {'id': `newTaskNameLabel`, 'class': `newTaskLabel`});
    setAttributes(newTaskNameInput, {'id': `newTaskNameInput`, 'class': `newTaskInput`, 'placeholder': `What is your task?`});
    setAttributes(newTaskCategoryLabel, {'id': `newTaskCategoryLabel`, 'class': `newTaskLabel`});
    setAttributes(newTaskCategoryInput, {'id': `newTaskCategoryInput`, 'class': `newTaskInput`, 'placeholder': `Select category!`});
    setAttributes(newTaskDateLabel, {'id': `newTaskDateLabel`, 'class': `newTaskLabel`});
    setAttributes(newTaskDateInput, {'id': `newTaskDateInput`, 'class': `newTaskInput`, 'placeholder': `When?`});
    setAttributes(addTaskBtnLabel, {'id': `addTaskBtnLabel`, 'class': `newTaskLabel`});
    setAttributes(addTaskBtn, {'id': `addTaskBtn`, 'class': `addTaskBtn`, 'type': `submit`});

    newTaskNameLabel.innerText = `TASK`;
    newTaskCategoryLabel.innerText = `CATEGORY`;
    newTaskDateLabel.innerText = `DATE`;
    addTaskBtnLabel.innerText = `ADD TASK`;
    addTaskBtn.innerText = `CONFIRM`;

    hideTaskList();

    function populateCategoryList(arr) {
        const categorySelect = document.getElementById(`newTaskCategoryInput`);

        arr.forEach(item => {
            const option = document.createElement(`option`);

            option.value = item;
            option.textContent = item
            
            categorySelect.appendChild(option);
        })
    }

    container.appendChild(newTaskContainer);
    newTaskContainer.appendChild(newTaskForm);
    newTaskForm.appendChild(newTaskNameLabel);
    newTaskForm.appendChild(newTaskNameInput);
    newTaskForm.appendChild(newTaskCategoryLabel);
    newTaskForm.appendChild(newTaskCategoryInput);
    newTaskForm.appendChild(newTaskDateLabel);
    newTaskForm.appendChild(newTaskDateInput);
    newTaskForm.appendChild(addTaskBtnLabel);
    newTaskForm.appendChild(addTaskBtn);

    document.getElementById("addTaskBtn").addEventListener("click", createNewTask);
    populateCategoryList(catArray);

}


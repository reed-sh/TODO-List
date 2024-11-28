import { addNewTask, LinkedList } from "./list";

export function generatePage() {
    const content = document.getElementById(`content`);
    const container = document.createElement(`div`);
    const list = document.createElement(`div`);
    const newTaskContainer = document.createElement(`div`);
    const newTaskForm = document.createElement(`form`);
    const newTaskNameLabel = document.createElement(`label`);
    const newTaskNameInput = document.createElement(`input`);
    const newTaskCategoryLabel = document.createElement(`label`);
    const newTaskCategoryInput = document.createElement(`input`);
    const newTaskDateLabel = document.createElement(`label`);
    const newTaskDateInput = document.createElement(`input`);
    const newTaskBtnLabel = document.createElement(`label`);
    const newTaskBtn = document.createElement(`button`);

    function setAttributes(elmnt, attributesToSet) {
        for (let i in attributesToSet) {
            elmnt.setAttribute(i, attributesToSet[i]);
        }
    }

    setAttributes(container, {'id': `container`});
    setAttributes(list, {'id': `list`});
    setAttributes(newTaskContainer, {'id': `newTaskContainer`, 'class': `newTaskContainer`});
    setAttributes(newTaskForm, {'id': `newTaskForm`, 'class': `newTaskForm`});
    setAttributes(newTaskNameLabel, {'id': `newTaskNameLabel`, 'class': `newTaskLabel`});
    setAttributes(newTaskNameInput, {'id': `newTaskNameInput`, 'class': `newTaskInput`, 'placeholder': `What is your task?`});
    setAttributes(newTaskCategoryLabel, {'id': `newTaskCategoryLabel`, 'class': `newTaskLabel`});
    setAttributes(newTaskCategoryInput, {'id': `newTaskCategoryInput`, 'class': `newTaskInput`, 'placeholder': `Select category!`});
    setAttributes(newTaskDateLabel, {'id': `newTaskDateLabel`, 'class': `newTaskLabel`});
    setAttributes(newTaskDateInput, {'id': `newTaskDateInput`, 'class': `newTaskInput`, 'placeholder': `When?`});
    setAttributes(newTaskBtnLabel, {'id': `newTaskBtnLabel`, 'class': `newTaskLabel`});
    setAttributes(newTaskBtn, {'id': `newTaskBtn`, 'class': `newTaskBtn`, 'type': `submit`});
    
    newTaskNameLabel.innerText = `TASK`;
    newTaskCategoryLabel.innerText = `CATEGORY`;
    newTaskDateLabel.innerText = `DATE`;
    newTaskBtnLabel.innerText = `ADD TASK`;
    newTaskBtn.innerText = `ADD`;

    content.appendChild(container);
    container.appendChild(list);
    container.appendChild(newTaskContainer);
    newTaskContainer.appendChild(newTaskForm);
    newTaskForm.appendChild(newTaskNameLabel);
    newTaskForm.appendChild(newTaskNameInput);
    newTaskForm.appendChild(newTaskCategoryLabel);
    newTaskForm.appendChild(newTaskCategoryInput);
    newTaskForm.appendChild(newTaskDateLabel);
    newTaskForm.appendChild(newTaskDateInput);
    newTaskForm.appendChild(newTaskBtnLabel);
    newTaskForm.appendChild(newTaskBtn);

    document.getElementById(`newTaskBtn`).addEventListener("click", addNewTask());

    // Display message if list is empty
    console.log(`List Generated!`);
    if (list.innerHTML === ``) {
        list.innerHTML = `YOUR LIST IS EMPTY`;
        console.log (`List is empty`);
    };
}
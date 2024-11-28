export function generateList() {
    const content = document.getElementById(`content`);
    const container = document.createElement(`div`);
    const list = document.createElement(`div`);
    const newTaskContainer = document.createElement(`div`);
    const newTaskNameLabel = document.createElement(`label`);
    const newTaskNameInput = document.createElement(`input`);
    const newTaskCategoryLabel = document.createElement(`label`);
    const newTaskCategoryInput = document.createElement(`input`);
    const newTaskDescLabel = document.createElement(`label`);
    const newTaskDescInput = document.createElement(`input`);
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
    setAttributes(newTaskNameLabel, {'id': `newTaskNameLabel`, 'class': `newTaskLabel`});
    setAttributes(newTaskNameInput, {'id': `newTaskNameInput`, 'class': `newTaskInput`});
    setAttributes(newTaskCategoryLabel, {'id': `newTaskCategoryLabel`, 'class': `newTaskLabel`});
    setAttributes(newTaskCategoryInput, {'id': `newTaskCategoryInput`, 'class': `newTaskInput`});
    setAttributes(newTaskDescLabel, {'id': `newTaskDescLabel`, 'class': `newTaskLabel`});
    setAttributes(newTaskDescInput, {'id': `newTaskDescInput`, 'class': `newTaskInput`});
    setAttributes(newTaskDateLabel, {'id': `newTaskDateLabel`, 'class': `newTaskLabel`});
    setAttributes(newTaskDateInput, {'id': `newTaskDateInput`, 'class': `newTaskInput`});
    setAttributes(newTaskBtnLabel, {'id': `newTaskBtnLabel`, 'class': `newTaskLabel`});
    setAttributes(newTaskBtn, {'id': `newTaskBtn`, 'class': `newTaskBtn`});
    
    newTaskNameLabel.innerText = `TASK`;
    newTaskCategoryLabel.innerText = `CATEGORY`;
    newTaskDescLabel.innerText = `DESCRIPTION`;
    newTaskDateLabel.innerText = `DATE`;
    newTaskBtnLabel.innerText = `ADD TASK`;
    newTaskBtn.innerText = `ADD`;

    content.appendChild(container);
    container.appendChild(list);
    container.appendChild(newTaskContainer);
    newTaskContainer.appendChild(newTaskNameLabel);
    newTaskContainer.appendChild(newTaskNameInput);
    newTaskContainer.appendChild(newTaskCategoryLabel);
    newTaskContainer.appendChild(newTaskCategoryInput);
    newTaskContainer.appendChild(newTaskDescLabel);
    newTaskContainer.appendChild(newTaskDescInput);
    newTaskContainer.appendChild(newTaskDateLabel);
    newTaskContainer.appendChild(newTaskDateInput);
    newTaskContainer.appendChild(newTaskBtnLabel);
    newTaskContainer.appendChild(newTaskBtn);

    // Display message if list is empty
    console.log(`List Generated!`);
    if (list.innerHTML === ``) {
        list.innerHTML = `YOUR LIST IS EMPTY`;
        console.log (`List is empty`);
    };
}
export function generateList() {
    const content = document.getElementById(`content`);
    const container = document.createElement(`div`);
    const list = document.createElement(`div`);
    
    container.id = `container`;
    list.id = `list`;

    content.appendChild(container);
    container.appendChild(list);

    console.log(`List Generated!`);
    if (list.innerHTML === ``) {
        list.innerHTML = `YOUR LIST IS EMPTY`;
        console.log (`List is empty`);
    };
}
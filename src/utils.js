export function clearInputs(){
    const inputs = document.querySelectorAll('input[class="newTaskInput"]');
    inputs.forEach(function(input) {

    input.value = '';
    input.placeholder = input.placeholder
    })
}

export function setAttributes(elmnt, attributesToSet) {
    for (let i in attributesToSet) {
        elmnt.setAttribute(i, attributesToSet[i]);
    }
}

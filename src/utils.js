

export function setAttributes(elmnt, attributesToSet) {
    for (let i in attributesToSet) {
        elmnt.setAttribute(i, attributesToSet[i]);
    }
}

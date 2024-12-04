export let projectsArray = [`Default`, `Work`]
export const selectedProject = (event) => tasksArray.filter(item => item.project === event.target.dataset.projectName)
const projectExists = function checkIfProjectExists(project) {
    if (projectsArray.includes(project)) {
        return true
    } else {
        return false
    }
}
export function addProject(name) {
    const project = name
    if (!projectExists(project)) {
        projectsArray.push(project)
    } else {
        return
    }
}
export function removeProject(event) {
    const project = event.target.parentNode.dataset.projectName;
    projectsArray = projectsArray.filter(item => item !== project)
}
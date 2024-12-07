export class Task {
    constructor(title, project, date, id, completed){
        this.title = title;
        this.project = project;
        this.date = date;
        this.id = id;
        this.completed = completed;
    };

    changeTitle(newTitle) {
        this.title = newTitle
    };

    changeCategory(newProject) {
        this.category = newProject;
    }

    changeDate(newDate) {
        this.date = newDate
    };

    changeCompletion(){
        if (this.completed === false){
            this.completed = true 
        } else {
            this.completed = false
        };
    };
};
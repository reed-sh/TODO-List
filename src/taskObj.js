export class Task {
    constructor(title, project, date, id){
        this.title = title;
        this.project = project;
        this.date = date;
        this.id = id;
        this.completed = false;
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
        if (completed === false){
            completed = true 
        } else {
            completed = false
        };
    };
};
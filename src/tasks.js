export class Task {
    constructor(title, desc, date){
        this.title = title;
        this.desc = desc;
        this.date = date;
        this.completed = false;
    };

    changeTitle(newTitle) {
        this.title = newTitle
    };

    changeCategory(newCategory) {
        this.category = newCategory;
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
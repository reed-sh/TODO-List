export class Task {
    constructor(title, category, date, id){
        this.title = title;
        this.category = category;
        this.date = date;
        this.id = id;
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
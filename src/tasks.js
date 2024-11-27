export class Task {
    constructor(title, category, desc, date){
        this.title = title;
        this.category = category;
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

    changeDesc(newDesc){
        this.desc = newDesc
    };

    changeDate(newDate) {
        this.date = newDate
    };

    changeCompletion(){
        if (completed = false){
            completed = true 
        } else {
            completed = false
        };
    };
};
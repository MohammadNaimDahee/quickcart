export class NormalTodo {
    constructor(todo, date, category) {
        this.todo = todo;
        this.date = date;
        this.category = category;
    }
    format() {
        return `Normal Todo : ${this.todo} ${this.category} ${this.date}`;
    }
}

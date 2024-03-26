export class Todo {
    constructor(todo, date, category) {
        this.todo = todo;
        this.date = date;
        this.category = category;
    }
    toString() {
        return `${this.todo} ${this.category} ${this.date}`;
    }
}

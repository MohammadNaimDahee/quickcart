export class PriorityTodo {
    constructor(todo, date, category) {
        this.todo = todo;
        this.date = date;
        this.category = category;
    }
    format() {
        return `Priority Todo: ${this.todo} ${this.category} ${this.date}`;
    }
}

export class Todo {
  constructor(
    readonly todo: string,
    public date: Date,
    private category: string
  ) {}

  toString(): string {
    return `${this.todo} ${this.category} ${this.date}`;
  }
}

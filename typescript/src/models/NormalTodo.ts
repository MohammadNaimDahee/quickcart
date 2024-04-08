import { HasFormatter } from "../interfaces/HasFormatter.js";

export class NormalTodo implements HasFormatter {
  constructor(
    public todo: string,
    public date: string,
    public category: string
  ) {}

  format(): string {
    return `Normal Todo : ${this.todo} ${this.category} ${this.date}`;
  }
}

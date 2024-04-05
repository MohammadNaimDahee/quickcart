import { HasFormatter } from "../interfaces/HasFormatter.js";

export class NormalTodo implements HasFormatter {
  constructor(
    readonly todo: string,
    public date: string,
    private category: string
  ) {}

  format(): string {
    return `Normal Todo : ${this.todo} ${this.category} ${this.date}`;
  }
}

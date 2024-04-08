import { HasFormatter } from "../interfaces/HasFormatter.js";

export class PriorityTodo implements HasFormatter {
  constructor(
    public todo: string,
    public date: string,
    public category: string
  ) {}

  format(): string {
    return `Priority Todo: ${this.todo} ${this.category} ${this.date}`;
  }
}

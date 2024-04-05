import { HasFormatter } from "../interfaces/HasFormatter.js";

export class PriorityTodo implements HasFormatter {
  constructor(
    readonly todo: string,
    public date: string,
    private category: string
  ) {}

  format(): string {
    return `Priority Todo: ${this.todo} ${this.category} ${this.date}`;
  }
}

import { Todo } from "./Todo.js";

export interface HasFormatter extends Todo {
  format: () => string;
}

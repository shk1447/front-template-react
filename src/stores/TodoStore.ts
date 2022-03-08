import { makeObservable, observable, computed, action } from 'mobx';
import { TodoModel } from './models/TodoModel';

export interface ITodoStore {
  selected: TodoModel | null;
  todoList: TodoModel[];
}

export class TodoStore implements ITodoStore {
  selected: TodoModel | null;
  todoList: TodoModel[];
  constructor(
    model: ITodoStore = {
      selected: null,
      todoList: [],
    },
  ) {
    this.selected = model.selected;
    this.todoList = model.todoList;
    makeObservable(this, {
      selected: observable,
      todoList: observable,
      emptyContentTodos: computed,
      add: action,
      remove: action,
    });
  }

  get emptyContentTodos() {
    return this.todoList.filter(item => !item.content);
  }

  add(item: TodoModel) {
    this.todoList.push(item);
  }

  remove(item: TodoModel) {
    this.todoList.splice(this.todoList.indexOf(item), 1);
  }
}

import { makeObservable, observable, flow, action } from 'mobx';

export interface ITodoModel {
  id: number;
  title: string;
  content: string;
  updated_at: string;
}

export type TodoDTO = {
  title: string;
  content: string;
};

export class TodoModel implements ITodoModel {
  id: number;
  title: string;
  content: string;
  updated_at: string;
  constructor(
    model: ITodoModel = {
      id: -1,
      title: '',
      content: '',
      updated_at: '',
    },
  ) {
    this.id = model.id;
    this.title = model.title;
    this.content = model.content;
    this.updated_at = model.updated_at;

    makeObservable(this, {
      title: observable,
      content: observable,
      updated_at: observable,
      modify: action,
    });
  }

  modify(dto: TodoDTO) {
    this.title = dto.title;
    this.content = dto.content;
  }
}

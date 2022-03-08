import { makeObservable, observable, flow } from 'mobx';

import { ConfigStore } from './ConfigStore';
import { TodoStore } from './TodoStore';

export interface IRootStore {
  initialized: boolean;
}

export class RootStore implements IRootStore {
  initialized: boolean;
  configStore: ConfigStore;
  todoStore: TodoStore;

  constructor() {
    this.initialized = false;
    this.configStore = new ConfigStore();
    this.todoStore = new TodoStore();

    makeObservable(this, {
      initialized: observable,
      initialize: flow,
    });
  }

  // flow 등록시 전체 실행하고, 미등록시 generator 동작
  *initialize() {
    try {
      yield 1;
      yield 2;
      yield 3;
      this.initialized = true;
    } catch (error) {
      this.initialized = false;
    }
  }
}

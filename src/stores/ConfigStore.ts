import { makeObservable, observable, action } from 'mobx';

export interface IConfigStore {
  dark: boolean;
}

export class ConfigStore {
  dark: boolean;

  constructor(
    config: IConfigStore = {
      dark: false,
    },
  ) {
    this.dark = config.dark;
    makeObservable(this, {
      dark: observable,
      toggleTheme: action,
    });
  }

  toggleTheme() {
    this.dark = !this.dark;
  }
}

import React from 'react';
import { RootStore } from './RootStore';

const rootStore = new RootStore();

const storesContext = React.createContext({
  rootStore: rootStore,
  configStore: rootStore.configStore,
});

export const useStores = () => React.useContext(storesContext);

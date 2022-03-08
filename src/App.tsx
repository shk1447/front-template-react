import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from '~/routes/Router';

import { ThemeProvider, createTheme } from './theme';
import { useStores } from './stores';
import { observer } from 'mobx-react';

const App = observer(() => {
  const { configStore } = useStores();
  const theme = createTheme();
  theme.mode = configStore.dark ? 'dark' : 'light';
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
});

export default App;

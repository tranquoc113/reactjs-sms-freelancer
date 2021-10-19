import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import { ThemeProvider } from 'styled-components';

import App from './App';
import 'src/style/theme.light.less';
import 'src/style/theme.dark.less';
import 'src/style/index.less';

import { store } from './store';
import { I18n } from 'src/libs/i18n';
import theme from 'src/libs/theme';

ReactDOM.render(
  <Provider store={store}>
    <I18nextProvider i18n={I18n}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </I18nextProvider>
  </Provider>,
  document.getElementById('root'),
);

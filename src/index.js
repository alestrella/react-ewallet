import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import './index.css';
import '/node_modules/modern-normalize/modern-normalize.css';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from 'styleConfig/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './styleConfig/theme';
import 'antd/dist/antd.min.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor, getCategories } from './redux';
import axios from 'axios';

// back-end address
axios.defaults.baseURL = 'http://localhost:3001/api/';

// get categories on app start
store.dispatch(getCategories());

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/xtodo-wallet">
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  </>
);

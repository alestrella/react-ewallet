import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from 'styleConfig/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './styleConfig/theme';
import 'antd/dist/antd.min.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';

// back-end address
axios.defaults.baseURL = 'https://ewallet-api.onrender.com/api/';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <Toaster
      position="top-center"
      toastOptions={{
        duration: 3000,
        style: {
          width: '280px',
          background: '#E5E5E5',
          color: '#000',
          padding: '12px',
          borderRadius: '10px',
        },
      }}
    />
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

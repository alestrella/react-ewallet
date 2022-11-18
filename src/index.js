import React from "react";
import ReactDOM from "react-dom/client";
import App from "components/App";
import { BrowserRouter } from "react-router-dom";
// import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
// import { store, persistor } from "redux/store";
import { GlobalStyle } from 'styleConfig/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './styleConfig/theme';
import 'antd/dist/antd.min.css';

ReactDOM.createRoot(document.getElementById("root")).render(
<<<<<<< HEAD
	<React.StrictMode>
=======
	<>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
>>>>>>> 6c6b77871a3e411d3907596149d5a345abcdbe00
		<BrowserRouter basename="/xtodo-wallet">
			{/* <Provider store={store}> */}
				{/* <PersistGate loading={null} persistor={persistor}> */}
					<App />
				{/* </PersistGate> */}
			{/* </Provider> */}
		</BrowserRouter>
	    </ThemeProvider>
  </>
);

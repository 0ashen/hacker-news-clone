import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import { theme } from './styles/theme';
import { Common } from './styles/common';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
   <React.StrictMode>
      <BrowserRouter>
         <ThemeProvider theme={theme}>
            <Common />
            <App />
         </ThemeProvider>
      </BrowserRouter>
   </React.StrictMode>,
   document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

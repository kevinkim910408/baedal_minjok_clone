import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyled from "./Components/Common/GlobalStyled.jsx";
import { Provider } from 'react-redux';
import store from './Redux/configStore'
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <Provider store={store}>
            <BrowserRouter>
                <GlobalStyled />
                <App />
            </BrowserRouter>
        </Provider>
);

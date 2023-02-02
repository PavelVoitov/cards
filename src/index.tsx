import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './n1-main/m1-ui/App';
import {store} from "./n1-main/m2-bll/store";
import {Provider} from "react-redux";
import {HashRouter} from "react-router-dom";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
        <HashRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

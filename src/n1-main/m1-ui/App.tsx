import React from 'react';
import './App.css';
import {Pages} from "./routes/Pages";
import {BrowserRouter} from "react-router-dom";
import {Header} from "./header/Header";
import { HashRouter } from "react-router-dom";

const App = () => {
    return (
        <div className="App">
            <HashRouter>
                <Header/>
                <Pages/>
            </HashRouter>
        </div>
    );
}

export default App;

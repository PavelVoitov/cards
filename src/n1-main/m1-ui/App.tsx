import React from 'react';
import './App.css';
import {Pages} from "./routes/Pages";
import {BrowserRouter} from "react-router-dom";
import {Header} from "./header/Header";

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Header/>
                <Pages/>
            </BrowserRouter>
        </div>
    );
}

export default App;

import React from 'react';
import './App.css';
import {Pages} from "./routes/Pages";
import {Header} from "./header/Header";

const App = () => {
    return (
        <div className="App">
            <Header/>
            <Pages/>
        </div>
    );
}

export default App;

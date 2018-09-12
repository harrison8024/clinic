import React, { Component } from 'react';
import Nav from './Nav';
import Home from './Home';
import {Route} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Nav/>
                <Route exact path="/"><Home/></Route>
            </div>
        );
    }
}

export default App;

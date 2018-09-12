import React from 'react';
import {Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Schedule from './Schedule';
import Contact from './Contact';

export default () => {
    return(
        <div>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/schedule" component={Schedule}/>
            <Route path="/contact" component={Contact}/>
        </div>
    );
}
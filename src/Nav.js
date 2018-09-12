import React, {Component} from 'react';
import "./Nav.css";

class Nav extends Component {
    render(){
        return (
            <div className="Nav-header">
                <div className="Nav-title">Chen's Clinic</div>
                    <ul className="Nav-list">
                        <li>Home</li>
                        <li>About</li>
                        <li>Schedule</li>
                        <li>Contact</li>
                    </ul>
            </div>
        );
    }
}

export default Nav;
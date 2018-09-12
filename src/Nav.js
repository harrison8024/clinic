import React, {Component} from "react";
import "./Nav.css";
import {Link} from "react-router-dom";

class Nav extends Component {
    render(){
        return (
            <div className="Nav-header">
                <div className="Nav-title">Chen's Clinic</div>
                    <ul className="Nav-list">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/schedule">Schedule</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
            </div>
        );
    }
}

export default Nav;
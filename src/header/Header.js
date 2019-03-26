import React, { Component } from 'react';
import './Header.scss';
import { Link } from "react-router-dom";


class Header extends Component {
    render() {
        return (
            <nav id="left-nav">
                <div className="nav-item-wrapper">
                    <div className="nav-item">
                        <Link to="/friends/">
                            <ion-icon name="people" className="selected"></ion-icon>
                        </Link>
                    </div>
                    <div className="nav-item">
                        <Link to="/chats/">
                            <ion-icon name="chatboxes"></ion-icon>
                        </Link>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header;
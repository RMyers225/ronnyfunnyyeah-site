import React from 'react';
import './SideDrawer.css';

const sideDrawer = props => {
    let drawerClasses = ['side-drawer'];
    if (props.show) {
        drawerClasses = ['side-drawer', 'open'];
    }
    return (
        <nav className="side-drawer">
            <ul>
                <li><a href="/">Shows</a></li>
                <li><a href="/">Videos</a></li>
                <li><a href="/">Albums</a></li>
            </ul>
        </nav>
    );
};

export default sideDrawer
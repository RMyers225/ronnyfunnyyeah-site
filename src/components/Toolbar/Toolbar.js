import React from 'react';
import './Toolbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'




const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar__nav">
            <div>
                <DrawerToggleButton />
            </div>
            <div className="toolbar_logo"><a href="/">The LOGO</a></div>
            <div className="spacer" />
            <div className="toolbar_nav_items">
                <ul>
                    <li><a href="/">Shows</a></li>
                    <li><a href="/">Videos</a></li>
                    <li><a href="/">Album</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;
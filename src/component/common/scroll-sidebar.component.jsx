import React, { Component } from 'react';
import Scrollchor from 'react-scrollchor';

class ScrollSideBar extends Component {
    render() {
        var listItems = this.props.list.map((listitem) => {
            return (
                <li key={listitem.id}>
                    <Scrollchor to={listitem.to} >
                        <span className="sidebar-left">{listitem.toName}</span>
                    </Scrollchor>
                </li> 
            )});

        return (
                <div id="sidebar-wrapper">
                    <ul className="sidebar-nav">
                        <li className="sidebar-brand"></li>
                        { listItems }
                    </ul>
                </div>
        );
    }
}

export default ScrollSideBar;
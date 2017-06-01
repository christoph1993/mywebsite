import React, { Component } from 'react';
import { Link } from 'react-router';

// Need to add ability to pass in classNames as props...

class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            divClasses:'',
            ulClasses:''
        }
    }

    render() {
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

export default SideBar;
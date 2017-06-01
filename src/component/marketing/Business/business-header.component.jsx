import React, { Component } from 'react';
import { Link } from 'react-router';

import {Nav, Navbar, NavbarBrand, NavItem, Collapse, Glyphicon} from 'react-bootstrap';

class BusinessHeader extends Component {
    render() {
        return (
            <div>
            <Navbar inverse collapseOnSelect className="nav-showcase business">
                <NavbarBrand>
                    <Link to="/business">Business Name<Glyphicon glyph="fire"/></Link>
                </NavbarBrand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav>
                        <NavItem><Link to="/business" className="homepage-header-linkfix-business">Home</Link></NavItem>
                        <NavItem><Link to="/business/services" className="homepage-header-linkfix-business">Services</Link></NavItem>
                        <NavItem><Link to="/business/about" className="homepage-header-linkfix-business">About</Link></NavItem>
                        <NavItem><Link to="/business/contact" className="homepage-header-linkfix-business">Contact</Link></NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </div>
        )
    }
}

export default BusinessHeader;
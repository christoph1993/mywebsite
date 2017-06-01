import React, { Component } from 'react';
import { Link } from 'react-router';

import {Nav, Navbar, NavbarBrand, NavItem, Collapse, Glyphicon} from 'react-bootstrap';

class ArtistHeader extends Component {
    render() {
        return (
            <div>
            <Navbar inverse collapseOnSelect className="nav-showcase art">
                <NavbarBrand>
                    <Link to="/art">Artist<Glyphicon glyph="queen"/></Link>
                </NavbarBrand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav>
                        <NavItem><Link to="/art" className="homepage-header-linkfix-art">Home</Link></NavItem>
                        <NavItem><Link to="/art/portfolio" className="homepage-header-linkfix-art">Portfolio</Link></NavItem>
                        <NavItem><Link to="/art/contact" className="homepage-header-linkfix-art">Contact</Link></NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </div>
        )
    }
}

export default ArtistHeader;
import React, { Component } from 'react';
import { Link } from 'react-router';
import { Nav, Navbar, NavbarBrand, NavItem, NavDropdown, MenuItem, Collapse } from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
    <div>
        <Navbar inverse collapseOnSelect fixedTop>
                <NavbarBrand>
                    <Link to="/">One Track Development</Link>
                </NavbarBrand>
                <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav>
                    <NavItem><Link className="homepage-header-linkfix" to="/">Home</Link></NavItem>
                    <NavItem><Link className="homepage-header-linkfix" to="blog">Rantings</Link></NavItem>
                    <NavDropdown title="Marketing" id="marketing">
                        <MenuItem><Link to="/business">Business Site</Link></MenuItem>
                        <MenuItem><Link to="/art">Artist Site</Link></MenuItem>
                        <MenuItem><Link to="/blogs">Blog Site</Link></MenuItem>
                    </NavDropdown>
                    <NavItem><Link className="homepage-header-linkfix" to="about">Contact</Link></NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
        )
    }
}

export default Header;
import React, { Component } from 'react';
import { Link } from 'react-router';
import { Nav, Navbar, NavbarBrand, NavItem, Collapse } from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
    <div>
        <Navbar inverse collapseOnSelect>
                <NavbarBrand>
                    <Link href="#">One Track Development</Link>
                </NavbarBrand>
                <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav>
                    <NavItem><Link className="homepage-header-linkfix" to="/">Home</Link></NavItem>
                    <NavItem><Link className="homepage-header-linkfix" to="blog">Rantings</Link></NavItem>
                    <NavItem><Link className="homepage-header-linkfix" to="market">Marketing</Link></NavItem>
                    <NavItem><Link className="homepage-header-linkfix" to="about">Contact</Link></NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
        )
    }
}

export default Header;
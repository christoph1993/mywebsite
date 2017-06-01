import React, { Component } from 'react';
import { Link } from 'react-router';

import {Button, Jumbotron, Grid, Row, Col, ControlLabel, Form, FormControl, FormGroup, Nav, Navbar, NavbarBrand, NavItem, Collapse} from 'react-bootstrap';

import BusinessHeader from './business-header.component.jsx';

class Business extends Component {
    render() {
        return (
            <div>
                <BusinessHeader />
                {this.props.children}
            </div>
        )
    }
}

export default Business;
                
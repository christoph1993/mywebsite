import React, { Component } from 'react';
import { Link } from 'react-router';

import {Button, Jumbotron, Grid, Row, Col, ControlLabel, Form, FormControl, FormGroup, Nav, Navbar, NavbarBrand, NavItem, Collapse} from 'react-bootstrap';

import ArtistHeader from './artist-header.component.jsx';

class Artist extends Component {
    render() {
        return (
            <div>
                <ArtistHeader />
                {this.props.children}
            </div>
        )
    }
}

export default Artist;
                
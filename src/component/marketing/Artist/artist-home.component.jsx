import React, { Component } from 'react';
import { Link } from 'react-router';

import {Button, Jumbotron, Grid, Row, Col, ControlLabel, Form, FormControl, FormGroup} from 'react-bootstrap';

class ArtistHome extends Component {
    render() {
        return (
            <div className="for-header showcase">
                <Jumbotron>
                    <h1>Welcome to your website</h1>
                    <p>Here to show off your excellent skills and talents as an artist</p>
                    <Link className="btn btn-default" to="/art/contact">Contact Us</Link>
                </Jumbotron>
            </div>
        )
    }
}

export default ArtistHome;
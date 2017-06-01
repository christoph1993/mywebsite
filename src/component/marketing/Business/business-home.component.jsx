import React, { Component } from 'react';
import { Link } from 'react-router';

import {Button, Jumbotron, Grid, Row, Col, ControlLabel, Form, FormControl, FormGroup} from 'react-bootstrap';

class BusinessHome extends Component {
    render() {
        return (
            <div className="for-header showcase">
                <Jumbotron>
                    <h1>Welcome to your companies website</h1>
                    <p>A website to help promote your business and products</p>
                    <Link className="btn btn-default" to="/market/business/contact">Contact Us</Link>
                </Jumbotron>
            </div>
        )
    }
}

export default BusinessHome;
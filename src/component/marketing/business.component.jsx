import React, { Component } from 'react';
import { Link } from 'react-router';

import {Button, Jumbotron, Grid, Row, Col, ControlLabel, Form, FormControl, FormGroup} from 'react-bootstrap';
import ScrollableAnchor from 'react-scrollable-anchor';

class Business extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <Jumbotron>
                    <h1>Welcome to your companies website</h1>
                    <p>A website to help promote your business and products</p>
                    <Button href="#businessContact">Contact Us</Button>
                </Jumbotron>

                <Grid>
                    <ScrollableAnchor id="businessContact">
                        <Row>
                            <Col sm={3}>
                                <p>Let your customer know your passion and dedication to your business</p>
                                <p><span class="glyphicon glyphicon-map-marker"></span>Business Location</p>
                                <p><span class="glyphicon glyphicon-phone"></span>+99 1421132518</p>
                                <p><span class="glyphicon glyphicon-envelope"></span>your@business.com</p>
                            </Col>
                            <Col sm={7}>
                                <Form horizontal>
                                    <FormGroup controlId="formhorizontalName">
                                        <Col componentClass={ControlLabel} sm={2}>
                                            Name
                                        </Col>
                                        <Col componentClass={ControlLabel} sm={10}>
                                            <FormControl type="text" placeholder="Your Name" />
                                        </Col>
                                    </FormGroup>
                                    
                                    <FormGroup controlId="formhorizontalEmail">
                                        <Col componentClass={ControlLabel} sm={2}>
                                            Email
                                        </Col>
                                        <Col componentClass={ControlLabel} sm={10}>
                                            <FormControl type="email" placeholder="Email" />
                                        </Col>
                                    </FormGroup>

                                    <FormGroup controlId="formhorizontalInfo" className="for-sidebar">
                                        <Col sm={10}>
                                            <FormControl componentClass="textarea" placeholder="What would you like to contact me about?" />
                                        </Col>
                                    </FormGroup>

                                    <FormGroup controlId="formhorizontalSubmit">
                                        <Col smOffset={2}>
                                            <Button type="submit">
                                                Email Me
                                            </Button>
                                        </Col>
                                    </FormGroup>
                                </Form>
                            </Col>
                        </Row>
                    </ScrollableAnchor>
                </Grid>

            </div>
        );
    }
}


export default Business;
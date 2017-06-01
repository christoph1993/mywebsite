import React, { Component } from 'react';
import { Link } from 'react-router';

import {Button, Jumbotron, Grid, Row, Col, ControlLabel, Form, FormControl, FormGroup, Glyphicon} from 'react-bootstrap';


class BusinessContact extends Component {
    render() {
        return(
            <div>
                <Grid>
                    <Row>
                        <Col sm={8}>
                            <h2>Like what we offer?</h2>
                            <h4><strong>Feel free to contact us below for any inquiries you may have</strong></h4>
                        </Col>
                        <Col sm={4}>
                            <Glyphicon glyph="envelope" className="logo"/>
                        </Col>
                    </Row>
                </Grid>

                <Grid>
                    <div>
                        <Row>
                            <Col sm={2}>
                                <p>Let your customer know your passion and dedication to your business</p>
                                <p><Glyphicon glyph="map-marker" />Business Location</p>
                                <p><Glyphicon glyph="phone" />+99 1421132518</p>
                                <p><Glyphicon glyph="envelope" />your@business.com</p>
                            </Col>
                            <Col sm={6}>
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
                    </div>
                </Grid>
            </div>
        );
    }
}

export default BusinessContact;
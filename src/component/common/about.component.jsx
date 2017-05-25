import React, { Component } from 'react';
import { Jumbotron, Grid, Row, Col, ControlLabel, Form, FormControl, FormGroup, Button } from 'react-bootstrap';

class About extends Component {
    render() {
        return (
            <Grid>
                <Jumbotron>
                    <h1>About ME and One Track Development</h1>
                </Jumbotron>
                <Row>
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
                </Row>
            </Grid>
        )
    }
}

export default About;
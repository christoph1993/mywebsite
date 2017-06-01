import React, { Component } from 'react';
import { Link } from 'react-router';

import {Button, Jumbotron, Grid, Row, Col, ControlLabel, Form, FormControl, FormGroup, Glyphicon} from 'react-bootstrap';

class BusinessAbout extends Component {
    render() {
        return (
            <div className="for-showcase-header showcase">
                <Grid>
                    <Row>
                        <Col sm={8}>
                            <h2>This is where you describe your business</h2>
                            <h4><strong>And let others know why your service is greater then everyone else</strong></h4>
                        </Col>
                        <Col sm={4}>
                            <Glyphicon glyph="thumbs-up" className="logo"/>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm={4}>
                            <Glyphicon glyph="list-alt" className="logo-right"/>
                        </Col>
                        <Col sm={8}>
                            <h2><strong>Let others know about your mission, values, and goals</strong></h2>
                            <p>This can be as long or as short as you believe is needed</p>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default BusinessAbout;
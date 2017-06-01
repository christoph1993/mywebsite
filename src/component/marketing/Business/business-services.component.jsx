import React, { Component } from 'react';
import { Link } from 'react-router';

import {Button, Jumbotron, Grid, Row, Col, Glyphicon} from 'react-bootstrap';

class BusinessHome extends Component {
    
    render() {
        return (
            <div className="for-showcase-header showcase">
                <Grid>
                    <Row>
                        <Col sm={3}>
                            <Glyphicon glyph="magnet" className="services"/>
                            <h2>Service one</h2>
                            <p>Here you describe each of your business's services.</p>
                        </Col>
                        <Col sm={3}>
                            <Glyphicon glyph="certificate" className="services"/>
                            <h2><strong>Service two</strong></h2>
                            <p>These should be in depth enough to explain what each service is and why it is important.</p>
                        </Col>
                        <Col sm={3}>
                            <Glyphicon glyph="globe" className="services"/>
                            <h2>Service three</h2>
                            <p>But short enough that there isn't large blocks of text.</p>
                        </Col>
                    </Row>  
                </Grid>

                <Grid>

                </Grid>
            </div>
        )
    }
}

export default BusinessHome;
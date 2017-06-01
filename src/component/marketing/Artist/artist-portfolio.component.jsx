import React, { Component } from 'react';
import { Link } from 'react-router';

import {Button, Jumbotron, Grid, Row, Col, ControlLabel, PageHeader, Image} from 'react-bootstrap';

class ArtistPortfolio extends Component {
    render() {
        return (
            <div>
                <header id="top" className="header">
                    <div className="center-text">
                        <PageHeader>Showcase your talents!</PageHeader>
                        <h3>The following pictures are of my cats.</h3>
                    </div>
                </header>

                <Grid>
                    <Row>
                        <Col lg={12}>
                            <h2>The three cats shown are Fynn, Lizzy and the Tiny Munchkin</h2>
                            <p>Two of these were adoption kitties that never left....</p>
                        </Col>
                    </Row>
                </Grid>

                <Grid>
                    <Row>
                        <Col md={7}>
                            <Image src="assets/001.jpg" alt="Cat" />
                        </Col>
                        <Col md={5}>
                            <h2>This is the tiny munchkin</h2>
                            <h4>Want to see more of him? Click here</h4>
                            <Button>View Munchkin</Button>
                        </Col>
                    </Row>

                    <Row>

                    </Row>

                    <Row>

                    </Row>
                </Grid>
            </div>
        )
    }
}

export default ArtistPortfolio;
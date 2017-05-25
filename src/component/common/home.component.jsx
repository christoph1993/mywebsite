import React, { Component } from 'react';

import { Jumbotron, Grid, Row, Col } from 'react-bootstrap';

class Home extends Component {
    render() {
        return (
            <Grid>
            <Jumbotron>
                <h1>Welcome to One Track Development</h1>
                <p>This is a simple website to tell you a little bit about me</p>
                <p>Why? Well, read on to find out</p>
            </Jumbotron>
            <Row>
                <Col sm={4}><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus est quam rem ducimus eos, ab illum consectetur voluptas. Dolores alias repellendus quibusdam error soluta earum inventore ut repellat debitis sequi.</p></Col>
                <Col sm={4}><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus est quam rem ducimus eos, ab illum consectetur voluptas. Dolores alias repellendus quibusdam error soluta earum inventore ut repellat debitis sequi.</p></Col>
                <Col sm={4}><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus est quam rem ducimus eos, ab illum consectetur voluptas. Dolores alias repellendus quibusdam error soluta earum inventore ut repellat debitis sequi.</p></Col>
            </Row>
            <Row>
                <Col sm={3}><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus est quam rem ducimus eos, ab illum consectetur voluptas. Dolores alias repellendus quibusdam error soluta earum inventore ut repellat debitis sequi.</p></Col>
                <Col sm={3}><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus est quam rem ducimus eos, ab illum consectetur voluptas. Dolores alias repellendus quibusdam error soluta earum inventore ut repellat debitis sequi.</p></Col>
                <Col sm={3}><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus est quam rem ducimus eos, ab illum consectetur voluptas. Dolores alias repellendus quibusdam error soluta earum inventore ut repellat debitis sequi.</p></Col>
                <Col sm={3}><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus est quam rem ducimus eos, ab illum consectetur voluptas. Dolores alias repellendus quibusdam error soluta earum inventore ut repellat debitis sequi.</p></Col>
            </Row>
            </Grid>
        )
    }
}

export default Home;
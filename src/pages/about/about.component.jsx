import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Profile from '../../assets/img/profile/profilepic.webp';
import Button from "react-bootstrap/Button";

import './about.style.css';

const About = () => {
    return (
        <div id="about">
            <div className="about">
                <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
                <Container>
                    <Row className="pt-3 pb-5 align-items-center">
                        {/* picture*/}

                        <Col xs={12} md={6}>
                            <Row className="justify-content-center mb-2 mr-2 ">
                                <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid />
                            </Row>
                        </Col>
                        {/* description*/}
                        <Col xs={12} md={6}>
                            <Row className=" align-items-start p-2 my-details rounded">
                                Hi there! I am <strong>&nbsp;Sini Ann :)</strong>
                <br />A passionate budding developer and a software enthusiast, born in Austria and brought up in India.
                  <br />
                  <br/>
                  In 2020, I successfully completed my Masters degree in International Software system Science with specialization in 'Service Oriented Architectures' from the University of Bamberg, Germany. I completed my Bachelors in Computer Science and engineering from Mahatma Gandi University in India.
                  <br />
                  <br/>
                  When it comes to woorking with the projects, my goal is always driven towards providing amazing experience with the best level of quality and service to them.
                  <br />
<br/>
                  I love learning about new technologies, what problems are they solving and How can I use them to build better and scalable products. Along with that, I also love to share the knowledge with other people .

                  <br /> <br />
                                <Col className="d-flex justify-content-center flex-wrap">
                                    <div>
                                        <a href="#contact">
                                            <Button className="m-2" variant="outline-primary">
                                                Let's talk
                        </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://drive.google.com/file/d/1wqHUllqNEjU4Mig178r-1bYi7jZUF4K_/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                            <Button className="m-2" variant="outline-success">
                                                My Resume
                        </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://github.com/siniann" target="_blank" rel="noopener noreferrer">
                                            <Button className="m-2" variant="outline-dark">
                                                GitHub
                        </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://linkedin.com/in/sini-ann" target="_blank" rel="noopener noreferrer">
                                            <Button className="m-2" variant="outline-info">
                                                LinkedIn
                        </Button>
                                        </a>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default About;
import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import Tilt from "react-tilt";

import L_INFY from "../../assets/img/experience/infosys.png";
import L_MEDIATAIN from "../../assets/img/experience/mediatain.png";

import "./experience.style.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={L_INFY} alt="Accenture logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Systems Engineer</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">Java Application Development and Support </strong>
                    <br />
                    <strong>Technology:</strong> Java,Java EE, Javascript, Angular, MS-SQL,Bootstrap, HTML, CSS,
                    <br />
                    <strong>Duration:</strong> Dec 2015 - July 2017
                    <br/>
                    <strong>Description</strong> 
                    <ul className="text-left">
                      <li><strong>Developed &amp; enhanced</strong> multiple features with customizability option across web application.</li>
                      <li>Responsible for <strong>Java application ownership &amp; maintenance</strong>  </li>
                      <li><strong>Code reviews &amp;  bug fixes</strong>  </li>
                      <li>Contibuted to <strong>Servlet based application development </strong> </li>
                      <li><strong>Performed</strong> SQL queries operations on multiple databases to generate data on client demands.</li>
                      <li>Developed <strong> Automation tasks</strong> to replace manual report generation</li>


                    </ul>
                    
                    
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
      <br/>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={L_MEDIATAIN} alt="Mediatain logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Student Software Developer</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">Software Developer(Full-time)</strong>
                    <br />
                    <strong>Technology:</strong> Javascript, React JS, Electron, Node js, BDD, TDD
                    <br />
                    <strong>Duration:</strong> September 2019 - November 2019
                    <br/>
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li><strong>Developed</strong> Desktop application with Electron js.</li>
                      <li><strong>Test Driven &amp; Behaviour Driven Development</strong> including code refactoring.
                      </li>
                      <li>Active participation in <strong>scrum</strong> (planning, retrospective, review, daily stand-up). 
                      </li>
                      <li><strong>Performed enhancements of components in website</strong> </li>
                     <li><strong>Co-created</strong> documentations for bestpractices to be used as a guide for new developers.</li> 

                    </ul>
                    
                    
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import web from "../../Assets/Projects/web.png";
import weather from "../../Assets/Projects/weather.png";
import pizza from "../../Assets/Projects/pizza.png";




function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects:</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={web}
              isBlog={false}
              title="FDM Employee Portal"
              description="An Employee Portal I worked on with my group mates in second year at university, I did most of the frontend and backend, consisting mainly of PHP and SQL queries to a database. Worked within an internal client from FDM, who gave us the requirements for the project."
              ghLink="https://github.com/ATKillz/fdmPortal"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather App"
              description="A group project I worked on with group mates, also in second year at university, using Preact/React. As part of our group software engineering project, it was a fun experience working with react for the first time and I enjoyed it a lot."
              ghLink="https://github.com/ATKillz/WeatherApp_"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pizza}
              isBlog={false}
              title="Pizza Restaurant Website"
              description="This was my personal project for A Level Computer Science, I worked closely with the restaurant to build the requirements and goals of the project. I implemented complicated frontend and backend communication through the use of advanced SQL queries. "
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

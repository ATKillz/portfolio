import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Footer from "../Footer";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi, I'm <strong className="main-name">Aseeb Tariq</strong>
              </h1>

              <h1 className="heading-name">
                A Final Year Computer Science Student at <strong className="main-name">Queen Mary University of London</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;

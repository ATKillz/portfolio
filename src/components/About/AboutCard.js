import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify"}}>
            I'm in the final year of my BSc Computer Science course at Queen Mary University of London.
            I grew up and live in East London, and recently just got my driving licence as well.
            At the moment, I'm working at TKMaxx as a part time associate on the weekends alongside
            university.
          </p>
          <p style={{ textAlign: "justify" }}>
            I did a year of Electronic Engineering at the University of Southampton, but I decided it
            was not the right direction for me and knew I wanted to get into software development since college.
            The transition to computer science was quite smooth as I had already coded as part of my A Level in computer science.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

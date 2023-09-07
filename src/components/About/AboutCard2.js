import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
            <h2 class="experience-heading">TKMaxx, Team Member/Associate</h2>
            <p class="experience-date">August 20, 2023 - Present</p>

            <h2 class="experience-heading">Burgerism, Kitchen Team Member</h2>
            <p class="experience-date">June 1, 2023 - July 28, 2023</p>

            <h2 class="experience-heading">Morrisons, Replenishment Team Member</h2>
            <p class="experience-date">November 26, 2022 - December 25, 2022</p>

            <h2 class="experience-heading">McDonald's, Night Team Member</h2>
            <p class="experience-date">December 8, 2021 - July 2, 2022</p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

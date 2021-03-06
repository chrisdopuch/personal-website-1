import React from "react";
import { MyCarousel } from "../Carousel/Carousel";
import { CodePen } from "../Playgrounds/CodePen";
import { Col, Row } from "react-bootstrap";
import styles from "../../styles/colors.scss";

function Home() {
  const linkStyle = {
    textDecoration: "underline",
    color: styles.accent,
  };
  const colStyle = {
    height: "50%",
  };

  return (
    <div id="home">
      <Row id="main-body">
        <Col style={colStyle}>
          <MyCarousel />
        </Col>
        <Col>
          <CodePen />
        </Col>
      </Row>
      <Row id="blurb">
        <Col>
          <p>
            Welcome to my personal website! I wanted to write enough React to
            have a place to mess around with javascript. I'll use my{" "}
            <a href="/personal" style={linkStyle}>
              Personal Tab
            </a>{" "}
            as a blog-esque place (eventually...) if you want to follow what I'm
            doing.
          </p>
          <p></p>
        </Col>
      </Row>
    </div>
  );
}

export default Home;

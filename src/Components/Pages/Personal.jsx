import React from "react";
import { MyCarousel } from "../Carousel/Carousel";
import { CodePen } from "../Playgrounds/CodePen";
import { Col, Row } from "react-bootstrap";

function Personal() {
  return (
    <Row id="main-body">
      <Col>
        <MyCarousel />
      </Col>
      <Col>
        <CodePen />
      </Col>
    </Row>
  );
}

export default Personal;
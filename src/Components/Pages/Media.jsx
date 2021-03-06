import React from "react";
import { MyCarousel } from "../Carousel/Carousel";
import { Col, Row } from "react-bootstrap";
import { Soundcloud } from "../SoundCloud";

function Media() {
  return (
    <Row id="main-body">
      <Col>
        <MyCarousel />
      </Col>
      <Col>
        <Soundcloud
          url={
            "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/306139629&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          }
        />
      </Col>
    </Row>
  );
}

export default Media;

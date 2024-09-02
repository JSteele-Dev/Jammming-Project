import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

function Tracks(props) {
  const passTrack = () => {
    props.onAdd(props.track);
  };
  const passTrackToRemove = () => {
    props.onRemoval(props.track);
  };

  return (
    <Container>
      <Row>
        <Col xs={4} md={4}>
          <Image src={props.track.artwork} thumbnail />
        </Col>
        <Col xs={6}>
          <Card>
            <Card.Body>
              <Card.Title>{props.track.name}</Card.Title>
              <hr />
              <Card.Text>
                {props.track.artist} | {props.track.album}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          {props.isRemoval && (
            <Button variant="secondary" className="position-relative top-50 start-50 translate-middle" onClick={passTrackToRemove}>
              {" "}
              -{" "}
            </Button>
          )}
          {!props.isRemoval && (
            <Button variant="secondary" className="position-relative top-50 start-50 translate-middle" onClick={passTrack}>
              {" "}
              +{" "}
            </Button>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Tracks;

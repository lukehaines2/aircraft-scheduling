import React from "react";
import { Row, Col } from "react-flexbox-grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane } from "@fortawesome/free-solid-svg-icons";

export const RotationTicket = ({chosenFlights, handleRemoveFlight}) => {
  // Sort by departure time
  const flights = chosenFlights.sort((a, b) => a.departuretime - b.departuretime);

  const onClick = (e) => {
    handleRemoveFlight(e.currentTarget.dataset.flight);
  };

  return (
    <React.Fragment>
      {flights.map((flight) => (
        <div key={flight.id} className="rotationTicket" data-flight={flight.id} onClick={onClick}>
          <div className="title">Flight: {flight.id}</div>
          <Row>
            <Col xs>
              <div>{flight.origin}</div>
              <div>{flight.readable_departure}</div>
            </Col>
            <Col xs>
              <FontAwesomeIcon icon={faPlane} size="2x" />
            </Col>
            <Col xs>
              <div>{flight.destination}</div>
              <div>{flight.readable_arrival}</div>
            </Col>
          </Row>
        </div>
      ))}
    </React.Fragment>
  )
}

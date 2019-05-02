import React from "react";
import { Row, Col } from "react-flexbox-grid";

import "./flights.scss";

export const Flights = props => {
  const { flightData } = props;

  return (
    <Col xs={12} sm={3} className="flightsContainer">
      <div className="sectionHeader">Flights</div>
      {flightData.map(flight => (
        <div key={flight.id} className="flightTicket">
          <div className="title">{flight.id}</div>
          <Row>
            <Col xs>
              <div>{flight.origin}</div>
              <div>{flight.readable_departure}</div>
            </Col>
            <Col xs>
              <div>{flight.destination}</div>
              <div>{flight.readable_arrival}</div>
            </Col>
          </Row>
        </div>
      ))}
    </Col>
  )
}

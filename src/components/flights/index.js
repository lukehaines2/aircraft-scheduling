import React from "react";
import { Row, Col } from "react-flexbox-grid";

import "./flights.scss";

export const Flights = props => {
  const { flightData, handleFlightClick } = props;
  // Sort by flight ID (alphanumeric)
  const flights = flightData.sort((a, b) => a.id - b.id);

  const onClick = (e) => {
    handleFlightClick(e.currentTarget.dataset.flight);
  };


  return (
    <Col xs={12} sm={3} className="flightsContainer">
      <div className="sectionHeader">Flights</div>
      <div className="ticketWrapper">
        {flights.map(flight => (
          <div key={flight.id} className="flightTicket" data-flight={flight.id} onClick={onClick}>
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
      </div>
    </Col>
  )
}

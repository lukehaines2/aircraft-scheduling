import React from "react";
import { Row, Col } from "react-flexbox-grid";

import { FlightHeader } from "./flightHeader";

import "./flights.scss";

export const Flights = props => {
  const { flightData, chosenFlights, handleFlightClick, handlePaginate } = props;

  let filteredFlights = flightData;
  // If we have chosenFlights, remove them from view (much like a Redux selector)
  // It's fair to say, that this would have been a lot easier using selectors!
  if (chosenFlights.length) {
    filteredFlights = hideChosen(flightData, chosenFlights);
  }
  // Sort by flight ID (alphanumeric)
  const flights = filteredFlights.sort((a, b) => a.id - b.id);

  const onClick = (e) => {
    handleFlightClick(e.currentTarget.dataset.flight);
  };


  return (
    <Col xs={12} sm={3} className="flightsContainer">
      <FlightHeader {...{handlePaginate}} />
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


// Util function to compare rotation and flight arrays
// It hides previously chosen flights (in the rotation col) from the flights column
// Note: without mutation or needing shared state in the parent container - (pageContainer)
const hideChosen = (flightData, chosenFlights) => {
  // https://stackoverflow.com/a/44204227
  const flights = new Set(flightData);
  const toRemove = new Set(chosenFlights);

  const difference = new Set([...flights].filter((i) => !toRemove.has(i)));
  return Array.from(difference)
}

import React, { useState } from "react";
import { Row, Col } from "react-flexbox-grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import "./flights.scss";

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

export const Flights = props => {
  const { flightData, chosenFlights, handleFlightClick, handlePaginate } = props;
  
  // HOOKS STATE ==========================
  const [pagCount, setCount] = useState(0);
  // HOOKS STATE ==========================

  let filteredFlights = flightData;
  // If we have chosenFlights, remove them from view (much like a Redux selector)
  // It's fair to say, that this would have been a lot easier using selectors!
  if (chosenFlights.length) {
    filteredFlights = hideChosen(flightData, chosenFlights);
  }

  // Sort by flight ID (alphanumeric)
  const flights = filteredFlights.sort((a, b) => a.id - b.id);


  // Bindings =========
  const onClick = (e) => {
    handleFlightClick(e.currentTarget.dataset.flight);
  };

  const paginate = () => {
    // Use hooks (gotta use variable cos useState is async)
    let count = pagCount + 25;
    setCount(count);
    handlePaginate(null, count);
  };

  const prevPagination = () => {
    // Use hooks (gotta use variable cos useState is async)
    let count = pagCount - 25;
    if (pagCount >= 25) {
      setCount(count);
      handlePaginate(null, count);
    }
  };
  // Bindings =========


  return (
    <Col xs={12} sm={3} className="flightsContainer">
      
      <div className="sectionHeader">
        <Row between="xs">
          <Col xs>
            <FontAwesomeIcon icon={faChevronLeft} size="xs" onClick={prevPagination} />
          </Col>
          <Col xs>
            <span>Flights</span>
          </Col>
          <Col xs>
            <FontAwesomeIcon icon={faChevronRight} size="xs" onClick={paginate} />
          </Col>
        </Row>
      </div>

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

import React from "react";

import "./flights.scss";

export const Flights = props => {
  const { flightData } = props;

  return (
    <div className="flightsContainer">
      {flightData.map(flight => (
        <div key={flight.id} className="flight">
          {flight.id} --> {flight.destination}
        </div>
      ))}
    </div>
  )
}

import React from "react";
import { Col } from "react-flexbox-grid";

import "./aircrafts.scss";

export const Aircrafts = props => {
  const { aircraftData, chosenFlights } = props;

  return (
    <Col xs={12} sm={3} className="aircraftsContainer">
      <div className="sectionHeader">Aircrafts</div>
      <div className="ticketWrapper">
        <div className="aircraftTicket">
          <div className="title">{aircraftData.ident}</div>
          {chosenFlights.length > 0 && 
            <div>Efficiency: {getEfficiency(chosenFlights)}%</div>
          }
        </div>
      </div>
    </Col>
  )
}


const getEfficiency = (chosenFlights) => {
  let coverage = 0;

  chosenFlights.map(flight => {
   return coverage = coverage + (flight.arrivaltime - flight.departuretime + (40 * 60));
  });

  const secondsIn24hr = 60 * 60 * 24;
  // Divide flight coverage (in Secs) by seconds in 24hrs
  coverage /= secondsIn24hr;
  return Math.round(coverage * 100).toString()
}

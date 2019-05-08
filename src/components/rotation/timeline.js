import React from "react";
import { Row, Col } from "react-flexbox-grid";

export const Timeline = props => {
  const { chosenFlights } = props;
  return (
    <Row>
      <Col xs>
        <div className="timelineLabels">
          <label>00:00</label>
          <label>12:00</label>
          <label>24:00</label>
        </div>
        <div className="timeline">
          {chosenFlights.map(flight => (
            <div key={flight.id} className="timeblock">
              <div className="scheduled"></div>
              <div className="turnaround"></div>
            </div>
          ))}
        </div>
      </Col>
    </Row>
  )
}


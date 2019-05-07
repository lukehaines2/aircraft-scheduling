import React from "react";
import { Row, Col } from "react-flexbox-grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane } from "@fortawesome/free-solid-svg-icons";

import "./rotation.scss";


export const Rotation = props => {
  const { chosenFlights, handleRemoveFlight } = props;

  return (
    <Col xs={12} sm={5} className="rotationContainer">
      <div className="sectionHeader">Rotation GABCD</div>
      <div className="ticketWrapper">
        {chosenFlights.length ? 
          <RotationTicket {...{chosenFlights, handleRemoveFlight}} />
          : <EmptyRotation />
        }
        <Row>
          <Col xs>
            <div className="timelineLabels">
              <label>00:00</label>
              <label>12:00</label>
              <label>24:00</label>
            </div>
            <div className="timeline">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  )
}

const RotationTicket = ({chosenFlights, handleRemoveFlight}) => {
  const onClick = (e) => {
    handleRemoveFlight(e.currentTarget.dataset.flight);
  };

  return (
    <React.Fragment>
      {chosenFlights.map((flight) => (
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

const EmptyRotation = () => {
  return (
    <div className="emptyRotation">
      <small>To view a rotation please start by choosing a flight from the flights panel</small>
    </div>
  )
}

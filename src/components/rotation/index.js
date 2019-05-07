import React from "react";
import { Col } from "react-flexbox-grid";

import { Timeline } from "./timeline";
import { RotationTicket } from "./rotationTicket";

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
        <Timeline />
      </div>
    </Col>
  )
}

// Could refactor this into rotationTicket to clean up L17-20
const EmptyRotation = () => {
  return (
    <div className="emptyRotation">
      <small>To view a rotation please start by choosing a flight from the flights panel</small>
    </div>
  )
}

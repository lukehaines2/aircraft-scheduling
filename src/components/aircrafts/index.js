import React from "react";
import { Col } from "react-flexbox-grid";

import "./aircrafts.scss";

export const Aircrafts = props => {
  const { aircraftData } = props;

  return (
    <Col xs={12} sm={3} className="aircraftsContainer">
      <div className="sectionHeader">Aircrafts</div>
      <div className="aircrafts">
        <div className="ident">Ident: {aircraftData.ident}</div>
        <div>Type: {aircraftData.type}</div>
      </div>
    </Col>
  )
}

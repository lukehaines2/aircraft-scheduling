import React from "react";
import { Col } from "react-flexbox-grid";

import "./aircrafts.scss";

export const Aircrafts = props => {
  const { aircraftData } = props;

  return (
    <Col xs={12} sm={3} className="aircraftsContainer">
      <div className="sectionHeader">Aircrafts</div>
      <div className="ticketWrapper">
        <div className="aircraftTicket">
          <div className="title">{aircraftData.ident}</div>
          <div>58%</div>
        </div>
      </div>
    </Col>
  )
}

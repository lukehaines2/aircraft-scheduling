import React from "react";
import { Row, Col } from "react-flexbox-grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane } from "@fortawesome/free-solid-svg-icons";

import "./rotation.scss";

const flights = [{"id":"AS1133","departuretime":54300,"arrivaltime":63600,"readable_departure":"15:05","readable_arrival":"17:40","origin":"LFSB","destination":"LPPR"},{"id":"AS1134","departuretime":43500,"arrivaltime":52200,"readable_departure":"12:05","readable_arrival":"14:30","origin":"LPPR","destination":"LFSB"},{"id":"AS1139","departuretime":42600,"arrivaltime":59700,"readable_departure":"11:50","readable_arrival":"16:35","origin":"LFSB","destination":"GCLP"}];

export const Rotation = props => {
  return (
    <Col xs={12} sm={5} className="rotationContainer">
      <div className="sectionHeader">Rotation GABCD</div>
      <div className="ticketWrapper">
        {flights.map((flight) => (
          <div key={flight.id} className="rotationTicket">
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

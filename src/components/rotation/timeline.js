import React from "react";
import { Row, Col } from "react-flexbox-grid";

export const Timeline = props => {
  return (
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
  )
}

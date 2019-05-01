import React from "react";
import { Col } from "react-flexbox-grid";

import "./rotation.scss";

export const Rotation = props => {
  return (
    <Col xs={12} sm={5} className="rotationContainer">
      <div className="sectionHeader">Rotation GABCD</div>
      <div>Timeline component</div>
    </Col>
  )
}

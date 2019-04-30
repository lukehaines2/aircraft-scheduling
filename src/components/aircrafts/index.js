import React from "react";
import { Grid, Row, Col } from 'react-flexbox-grid';

import "./aircrafts.scss";

export const Aircrafts = props => {
  const { aircraftData } = props;

  return (
    <div className="aircraftsContainer">
      <div className="sectionHeader">Aircrafts</div>
      <div className="aircrafts">
        <div className="ident">Ident: {aircraftData.ident}</div>
        <div>Type: {aircraftData.type}</div>
      </div>
    </div>
  )
}
     {/* <Grid fluid>
        <Row>
          <Col xs={12} sm={4}>
            Hello, world!
          </Col>
        </Row>
      </Grid>
*/}

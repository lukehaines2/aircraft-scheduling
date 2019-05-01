import React from "react";
import { Grid, Row } from 'react-flexbox-grid';

import AircraftContainer from "./aircraftContainer";
import FlightsContainer from "./flightsContainer";
import { Rotation } from "../components/rotation";

export default class PageContainer extends React.Component {
  render() {
    return (
      <div className="pageContainer">
        <div style={{textAlign:"center"}}>
          <h3>{new Date().toLocaleDateString('en-GB')}</h3>
        </div>
        <Grid fluid>
          <Row between="xs">
            <AircraftContainer />
            <Rotation />
            <FlightsContainer />
          </Row>
        </Grid>
      </div>
    )
  }
}

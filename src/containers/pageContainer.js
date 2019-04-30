import React from "react";

import AircraftContainer from "./aircraftContainer";
import FlightsContainer from "./flightsContainer";
import Rotation from "../components/rotation";

export default class PageContainer extends React.Component {
  render() {
    return (
      <div className="pageContainer">
        <div style={{textAlign:"center"}}>
          <h3>{new Date().toLocaleDateString('en-GB')}</h3>
        </div>
        <div className="aircraftWrapper">
          <AircraftContainer />
          <Rotation />
          <FlightsContainer />
        </div>
      </div>
    )
  }
}

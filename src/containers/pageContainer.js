import React from "react";
import { Grid, Row } from 'react-flexbox-grid';

import AircraftContainer from "./aircraftContainer";
import FlightsContainer from "./flightsContainer";
import { Rotation } from "../components/rotation";

export default class PageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenFlights: []
    };
    this.handleChosenFlight = this.handleChosenFlight.bind(this);
    this.handleRemoveFlight = this.handleRemoveFlight.bind(this);
  }

  handleChosenFlight(flight) {
    // Add chosen flight to the array, maintaing current state
    this.setState({
      chosenFlights: [...this.state.chosenFlights, flight]
    });
  }

  handleRemoveFlight(flight) {
    const { chosenFlights } = this.state;
    // Remove flight from chosenFlights using ID of flight clicked
    const newFlights = chosenFlights.filter(i => i.id !== flight);
    this.setState({
      chosenFlights: newFlights
    });
  }

  render() {
    const { chosenFlights } = this.state;
    
    return (
      <div className="pageContainer">
        <div style={{textAlign:"center"}}>
          <h3>{new Date().toLocaleDateString('en-GB')}</h3>
        </div>
        <Grid fluid>
          <Row between="xs">
            <AircraftContainer />
            <Rotation {...{chosenFlights}} handleRemoveFlight={this.handleRemoveFlight} />
            <FlightsContainer handleChosenFlight={this.handleChosenFlight} />
          </Row>
        </Grid>
      </div>
    )
  }
}

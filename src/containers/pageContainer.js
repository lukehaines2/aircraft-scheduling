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
    const { chosenFlights } = this.state;
    const lastEl = chosenFlights[chosenFlights.length - 1];
    // If the selected flight has an earlier departure time that lastElement, fire an alert but don't use blocking / prohibiting UI as the user may want to swap the "scheduled" flights around.
    if (lastEl && lastEl.departuretime > flight.departuretime) {
      alert("Please note: The last flight you selected has an earlier departure time than the flight preceeding it!");
    }
    // Add chosen flight to the array, maintaing current state
    this.setState({
      chosenFlights: [...chosenFlights, flight]
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
          <h4>{new Date().toLocaleDateString('en-GB')}</h4>
        </div>
        <Grid fluid>
          <Row between="xs">
            <AircraftContainer />
            <Rotation {...{chosenFlights}} handleRemoveFlight={this.handleRemoveFlight} />
            <FlightsContainer {...{chosenFlights}} handleChosenFlight={this.handleChosenFlight} />
          </Row>
        </Grid>
      </div>
    )
  }
}

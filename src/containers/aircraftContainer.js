import React from "react";

import { Aircrafts } from "../components/aircrafts";

export default class AircraftContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      aircraftData: []
    };
  }

  componentDidMount() {
    this.callAircraftApi();
  }

  callAircraftApi() {
    const url = "https://infinite-dawn-93085.herokuapp.com/aircrafts";
    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            aircraftData: result.data[0],
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, aircraftData } = this.state;
    const { chosenFlights } = this.props;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <Aircrafts {...{ aircraftData, chosenFlights }} />
      );
    }
  }
}

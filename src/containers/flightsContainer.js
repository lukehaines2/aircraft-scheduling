import React from "react";

import { Flights } from "../components/flights";

export default class FlightsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      flightData: []
    };
    this.handleFlightClick = this.handleFlightClick.bind(this);
  }

  componentDidMount() {
    this.callFlightApi();
  }

  callFlightApi(limit, offset) {
    let queryParams = [];
    queryParams.push(limit && `limit=${limit}`);
    queryParams.push(offset && `offset=${offset}`);
    const url = `https://infinite-dawn-93085.herokuapp.com/flights?${queryParams.join('&')}`;

    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            flightData: result.data,
            pagination: result.pagination
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

  handleFlightClick(flightId) {
    const { flightData } = this.state;
    const newFlights = flightData.filter(i => {
      if (i.id === flightId) {
        this.props.handleChosenFlight(i);
      }
      return i.id !== flightId
    });
    this.setState({
      flightData: newFlights
    });
  }

  render() {
    const { error, isLoaded, flightData } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <Flights {...{ flightData }} handleFlightClick={this.handleFlightClick} />
      );
    }
  }
}

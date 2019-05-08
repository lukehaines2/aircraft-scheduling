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
    this.handlePaginate = this.handlePaginate.bind(this);
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
    // Find full flight obj by id, and dispatch to parent to be used in rotation component
    flightData.map(i => i.id === flightId &&
      this.props.handleChosenFlight(i)
    );
  }

  handlePaginate(limit, offset) {
    this.callFlightApi(limit, offset);
  }

  render() {
    const { chosenFlights } = this.props;
    const { error, isLoaded, flightData } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <Flights {...{ flightData, chosenFlights }}
          handleFlightClick={this.handleFlightClick}
          handlePaginate={this.handlePaginate}
        />
      );
    }
  }
}

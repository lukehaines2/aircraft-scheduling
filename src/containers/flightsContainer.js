import React from "react";

export default class FlghtsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://infinite-dawn-93085.herokuapp.com/flights")
      .then(res => res.json())
      .then(
        (result) => {
          console.log('flight data', result);
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

  render() {
    const { error, isLoaded, flightData } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          {flightData.map(flight => (
            <div key={flight.id}>
              {flight.id} --> {flight.destination}
            </div>
          ))}
        </div>
      );
    }
  }
}

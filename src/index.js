import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import store from "./store";
import FlightsContainer from "./containers/flightsContainer";

import "./style/index.scss";


render(
  <Provider store={store}>
    <FlightsContainer />
  </Provider>,
  document.getElementById('root')
)

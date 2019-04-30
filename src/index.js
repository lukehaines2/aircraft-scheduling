import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import store from "./store";
import PageContainer from "./containers/pageContainer";

import "./style/index.scss";


render(
  <Provider store={store}>
    <PageContainer />
  </Provider>,
  document.getElementById('root')
)

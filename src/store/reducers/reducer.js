import { combineReducers } from "redux";

const allFlights = (state = {}, action) => {
  switch (action.type) {
    default:
      return state
  }
};

const appReducers = combineReducers({
  allFlights: allFlights,
});

export default appReducers

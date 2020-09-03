import { combineReducers } from "redux";
import visibilityFilter from "./visibilityFilter";

const createReducer = asyncReducers => {
  return combineReducers({
    visibilityFilter,
    ...asyncReducers
  });
};

export default createReducer;

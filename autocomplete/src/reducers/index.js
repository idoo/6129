import { combineReducers } from "redux";
import { searchReducer } from "./search";
import { historyReducer } from "./history";

const reducer = combineReducers({
  search: searchReducer,
  history: historyReducer
});

export { reducer };

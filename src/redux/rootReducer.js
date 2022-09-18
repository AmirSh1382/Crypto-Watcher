import { combineReducers } from "redux";

// Reducers
import coinsReducer from "./coinsData/coinsReducer";
import coinReducer from "./coinData/coinReducer";
import paginationReducer from "./pagiantion/paginationReducer";

const rootReducer = combineReducers({
  coinsState: coinsReducer,
  coinState: coinReducer,
  paginationState: paginationReducer,
});

export default rootReducer;
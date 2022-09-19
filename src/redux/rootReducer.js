// Redux
import { combineReducers } from "redux";

// Reducers
import coinsReducer from "./coinsData/coinsReducer";
import coinReducer from "./coinData/coinReducer";
import paginationReducer from "./pagiantion/paginationReducer";
import watchlistReducer from "./watchlist/watchlistReducer";

const rootReducer = combineReducers({
  coinsState: coinsReducer,
  coinState: coinReducer,
  paginationState: paginationReducer,
  watchlistState: watchlistReducer
});

export default rootReducer;
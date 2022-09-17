import { combineReducers } from "redux";

// Reducers
import coinsReducer from "./coins/coinsReducer";
// import coinDetailReducer from "./coindetail/coinDetailReducer";
// import coinChartReducer from "./coinchart/coinChartReducer";
import coinReducer from "./test/coinReducer";
import paginationReducer from "./pagiantion/paginationReducer";

const rootReducer = combineReducers({
    coinsState: coinsReducer,
    coinState: coinReducer,
    // coinDetailState: coinDetailReducer,
    // coinChartState: coinChartReducer,
    paginationState: paginationReducer
})

export default rootReducer
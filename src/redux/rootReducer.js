import { combineReducers } from "redux";

// Reducers
import coinsReducer from "./coins/coinsReducer";
import paginationReducer from "./pagiantion/paginationReducer";

const rootReducer = combineReducers({
    coinsState: coinsReducer,
    paginationState: paginationReducer
})

export default rootReducer
// Functions
import { addToWatchlist, removeFromWatchlist, getWatchlistCoinsIdFromLocalStorage, getWachlistCoinsData } from "../../helper/functions";

const initialState = {
  coinsId: [],
  coins: []
};

const watchlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_COIN_TO_WATCHLIST":
      return {
        ...addToWatchlist(state , action.payload)
      };

    case "REMOVE_FROM_WATCHLIST":
      return {
        ...removeFromWatchlist(state, action.payload)
      };

    case "GET_WATCHLIST_COINSID_FROM_LOCAL_STORAGE":
      return {
        ...state,
        ...getWatchlistCoinsIdFromLocalStorage()
      }

    case "GET_WATCHLIST_COINS_DATA":
      return {
        ...state,
        ...getWachlistCoinsData(action.payload.allCoins, action.payload.watchlistCoinsId)
      }

    case "TEST":
      console.log(state)
      return state;

    default:
      return state;
  }
};

export default watchlistReducer;
const ADD_COIN_TO_WATCHLIST = (coinId) => {
  return { type: "ADD_COIN_TO_WATCHLIST", payload: coinId };
};

const REMOVE_FROM_WATCHLIST = (coinId) => {
  return { type: "REMOVE_FROM_WATCHLIST", payload: coinId };
};

const GET_WATCHLIST_COINSID_FROM_LOCAL_STORAGE = () => {
  return { type: "GET_WATCHLIST_COINSID_FROM_LOCAL_STORAGE" }
}

const GET_WATCHLIST_COINS_DATA = (allCoins, watchlistCoinsId) => {
  return { type: "GET_WATCHLIST_COINS_DATA", payload: {allCoins, watchlistCoinsId} }
}

export { ADD_COIN_TO_WATCHLIST, REMOVE_FROM_WATCHLIST, GET_WATCHLIST_COINSID_FROM_LOCAL_STORAGE, GET_WATCHLIST_COINS_DATA };
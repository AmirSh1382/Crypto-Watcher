// To abbreviate a text
const shorten = text => {
  const splitedText = text.split(" ");
  const newText = splitedText[0];

  return newText;
};

// To set initial configs of pagiantion
const setPaginationConfigs = (state, coins) => {
  const coinsPerPage = state.coinsPerPage;

  // To set pages count based on coins array length
  const pagesCount = Math.ceil(coins.length / state.coinsPerPage);

  // To set first page of pagination
  const startIndex = 0;
  const endIndex = state.currentPage * coinsPerPage;

  // First page Coins
  const paginatedCoins = coins.slice(startIndex, endIndex);

  // to set Pagination btns count
  const paginationBtns = [];

  for (let i = 1; i <= pagesCount; i++) {
    paginationBtns.push(i);
  }

  return { coinsPerPage, pagesCount, paginatedCoins, coins, paginationBtns };
};

// // to slice the coins array for pagination based on the new page number
const setPaginatedItems = (state, page) => {
  const { coinsPerPage, coins } = state;

  const startIndex = page * coinsPerPage - coinsPerPage;
  const endIndex = page * coinsPerPage;

  const paginatedCoins = coins.slice(startIndex, endIndex);

  const currentPage = page;

  return { ...state, paginatedCoins, currentPage };
};

// // To check that the main coin exists in watchlist or not (based on coin ID)
const isInWatchlist = (state, coinId) => {
  const mainCoin = state.coinsId.find(coin => coin === coinId);

  return mainCoin ? true : false;
};

// To add a coin to watchlist based on its ID
const addToWatchlist = (state, coinId) => {
  if (!state.coinsId.find(coin => coin === coinId)) {
    state.coinsId.push(coinId);
  }

  setWatchlistCoinsIdToLocalStorage(state.coinsId);

  return { ...state };
};

// To remove a coin from watchlist based on its ID
const removeFromWatchlist = (state, coinId) => {
  const mainCoinIndex = state.coinsId.findIndex(coin => coin === coinId);

  if (mainCoinIndex >= 0) {
    state.coinsId.splice(mainCoinIndex, 1);
  }

  setWatchlistCoinsIdToLocalStorage(state.coinsId);

  return { ...state };
};

// To get watchlist coins data by comparing the allCoins array and watchistCoinsId
const getWachlistCoinsData = (allCoins, watchlistCoinsId) => {
  const coinsData = watchlistCoinsId.map(coinId => allCoins.find(coin => coin.id === coinId));

  return { coinsData };
};

// To get watchlist coins id from local storage
const getWatchlistCoinsIdFromLocalStorage = () => {
  // To set [] if there were no data in local storage (using Nullish)
  const coinsId = JSON.parse(localStorage.getItem("watchlist")) ?? [];

  return { coinsId };
};

// To set watchlist coins id in to local storage
const setWatchlistCoinsIdToLocalStorage = coins => {
    localStorage.setItem("watchlist", JSON.stringify(coins))
}

// To search coins based on the main coin Id that comes from search input
const searchCoins = (allCoins, mainCoinId) => {
  
  let searchedCoins = []

  if(mainCoinId.trim()){
    searchedCoins = allCoins.filter(coin => coin.id.toUpperCase().includes(mainCoinId.toUpperCase()))

    searchedCoins = searchedCoins.slice(0, 50)
  }

  return searchedCoins
}

export { searchCoins }
export { shorten, setPaginationConfigs, setPaginatedItems }
export { addToWatchlist, removeFromWatchlist, isInWatchlist }
export { getWatchlistCoinsIdFromLocalStorage, getWachlistCoinsData }
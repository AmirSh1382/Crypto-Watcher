// To abbreviate a text
const shorten = text => {
    const splitedText = text.split(" ")
    const newText = splitedText[0]

    return newText
}

// To set initial configs of pagiantion
const setPaginationConfigs = (state, coins) => {

    const coinsPerPage = state.coinsPerPage

    // To set pages count based on coins array length
    const pagesCount = Math.ceil(coins.length / state.coinsPerPage)

    // To set first page of pagination
    const startIndex = 0
    const endIndex = state.currentPage * coinsPerPage

    // First page Coins
    const paginatedCoins = coins.slice(startIndex, endIndex)

    // to set Pagination btns count
    const paginationBtns = []

    for(let i = 1; i <= pagesCount; i++){
        paginationBtns.push(i)
    }

    return { coinsPerPage, pagesCount, paginatedCoins, coins, paginationBtns }
}

// to slice the coins array for pagination based on the new page number
const setPaginatedItems = (state, page) => {

    const { coinsPerPage, coins } = state

    const startIndex = (page * coinsPerPage) - coinsPerPage
    const endIndex = (page * coinsPerPage)

    const paginatedCoins = coins.slice(startIndex, endIndex)

    const currentPage = page

    return { ...state, paginatedCoins,  currentPage }
}

const isInWatchlist = (state, coinId) => {
    console.log(state);
    const mainCoin = state.coinsId.find(coin => coin === coinId)

    return mainCoin ? true : false
}

const addToWatchlist = (state , coinId) => {
    
    if(!state.coinsId.find(coin => coin === coinId)){
        state.coinsId.push(coinId)
    }

    setWatchlistCoinsIdToLocalStorage(state.coinsId)
    
    return { ...state }
}

const removeFromWatchlist = (state, coinId) => {
    const mainCoinIndex = state.coinsId.findIndex(coin => coin === coinId)
    
    if(mainCoinIndex >= 0){
        state.coinsId.splice(mainCoinIndex , 1)
    }
    
    setWatchlistCoinsIdToLocalStorage(state.coinsId)
    
    return { ...state }
}

const getWachlistCoinsData = (allCoins, watchlistCoinsId) => {
    const coins = watchlistCoinsId.map(coinId => allCoins.find(coin => coin.id === coinId))
    
    return { coins }
}

const getWatchlistCoinsIdFromLocalStorage = () => {

    const coinsId = JSON.parse(localStorage.getItem("watchlist")) ?? []

    return { coinsId }
}

const setWatchlistCoinsIdToLocalStorage = coins => {
    localStorage.setItem("watchlist", JSON.stringify(coins))
}


export { shorten, setPaginationConfigs, setPaginatedItems }
export { addToWatchlist, removeFromWatchlist, isInWatchlist }
export { getWatchlistCoinsIdFromLocalStorage, getWachlistCoinsData }
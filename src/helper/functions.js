const shorten = (text) => {
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

    const paginationBtns = []

    for(let i = 1; i <= pagesCount; i++){
        paginationBtns.push(i)
    }

    return { coinsPerPage, pagesCount, paginatedCoins, coins, paginationBtns }
}

const setPaginatedItems = (state, page) => {

    const { coinsPerPage, coins } = state

    const startIndex = (page * coinsPerPage) - coinsPerPage
    const endIndex = (page * coinsPerPage)

    const paginatedCoins = coins.slice(startIndex, endIndex)

    const currentPage = page

    return { ...state, paginatedCoins,  currentPage }
}

export { shorten, setPaginationConfigs, setPaginatedItems }
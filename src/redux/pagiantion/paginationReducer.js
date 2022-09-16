// Functions
import { setPaginationConfigs, setPaginatedItems } from "../../helper/functions"

const initialState = {
    coinsPerPage: 50,
    currentPage: 0,
    paginatedCoins: [],
    pagesCount: 0,
    coins: [],
    paginationBtns: []
}

const paginationReducer = (state = initialState, action) => {
    switch(action.type){
        case "SET_CONFIGS":
            return {
                ...setPaginationConfigs(state, action.payload)
            }

        case "NEXT_PAGE":
            const nextPage = state.currentPage < state.pagesCount ? state.currentPage + 1 : state.currentPage
            return {
                ...setPaginatedItems(state, nextPage)
            }

        case "PREV_PAGE":
            const prevPage = state.currentPage > 1 ? state.currentPage - 1 : state.currentPage
            return {
                ...setPaginatedItems(state, prevPage)
            }

        case "SET_PAGE":
            return {
                ...setPaginatedItems(state, action.payload)
            }

        default:
            return state
    }
}

export default paginationReducer
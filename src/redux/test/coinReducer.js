const initialState = {
    coinId: "",
    loading: true,
    error: "",
    chartData: null,
    coinDetail: null,
    defaultChartDate: null,
}

const coinReducer = (state = initialState, action) => {
    switch(action.type){
        case "GET_COIN_DATA_SUCCESS":
            return {
                ...state,
                loading: false,
                coinId: action.payload.coinId,
                chartData: action.payload.chartData,
                coinDetail: action.payload.coinDetail,
                defaultChartDate: action.payload.chartData.daily,
            }

        case "GET_COIN_DATA_FAILURE":
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }

        case "CHANGE_CHART_DATE":
            return {
                ...state,
                defaultChartDate: action.payload
            }

        case "TEST":
            console.log(state)
            return {
                ...state
            }

        case "RESET_STATE":
            return {
                initialState
            }

        default:
            return state
    }
}

export default coinReducer
const initialState = {
    loading: false,
    coins: [],
    error: ""
}

const coinsReducer = (state = initialState, action) => {
    switch(action.type){
        case "GET_COINS_REQUEST":
            return{
                ...state,
                loading: true,
            }

        case "GET_COINS_SUCCESS":
            return {
                loading: false,
                coins: action.payload,
                error: ""
            }

        case  "GET_COINS_FAILURE":
            return {
                coins: [],
                loading: false,
                error: action.payload
            }

        default: 
            return state
    }
}

export default coinsReducer
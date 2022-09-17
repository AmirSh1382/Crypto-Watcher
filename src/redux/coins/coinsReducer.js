const initialState = {
    loading: false,
    coins: [],
    error: ""
}

const coinsReducer = (state = initialState, action) => {
    switch(action.type){
        case "GET_ALL_COINS_REQUEST":
            return{
                ...state,
                loading: true,
            }

        case "GET_ALL_COINS_SUCCESS":
            // console.log(action.payload);
            return {
                loading: false,
                coins: action.payload,
                error: ""
            }

        case "GET_ALL_COINS_FAILURE":
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
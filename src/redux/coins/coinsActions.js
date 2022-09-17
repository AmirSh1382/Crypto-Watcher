import axios from "axios";

const GET_COINS_REQUEST = () => {
  return { type: "GET_COINS_REQUEST" };
};

const GET_COINS_SUCCESS = coins => {
  return { type: "GET_COINS_SUCCESS", payload: coins};
};

const GET_COINS_FAILURE = error => {
    return { type: "GET_COINS_FAILURE", payload: error}
}

const fetchDataStart = () => {
    return async (dispatch) => {
        try {
            dispatch(GET_COINS_REQUEST())
            
            const response = await axios.get("api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false")
            const coins = response.data

            dispatch(GET_COINS_SUCCESS(coins))
        }catch(error) {
            dispatch(GET_COINS_FAILURE(error.message))
        }
    }
}

export { fetchDataStart };
import axios from "axios";

const getCoinDataRequest = (coinId) => {
    return async (dispatch) => {
        try {

            // Chart data for daily / weekly / monthly / yearly formats
            const dailyResponse = await axios.get(`api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=1`)
            const weeklyResponse = await axios.get(`api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=7`)
            const monthlyResponse = await axios.get(`api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=30`)
            const yearlyResponse = await axios.get(`api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=360`)
            
            // To set chart data foramts configs
            const dailyData = dailyResponse.data.prices.map(value => ( { x: value[0], y: value[1].toFixed(2) } ))
            const weeklyData = weeklyResponse.data.prices.map(value => ( { x: value[0], y: value[1].toFixed(2) } ))
            const monthlyData = monthlyResponse.data.prices.map(value => ( { x: value[0], y: value[1].toFixed(2) } ))
            const yearlyData = yearlyResponse.data.prices.map(value => ( { x: value[0], y: value[1].toFixed(2) } ))

            const chartData = {
                daily: {
                    data: dailyData,
                    format: "ha"
                },
                weekly: {
                    data: weeklyData,
                    format: "DD MMM"
                },
                monthly: {
                    data: monthlyData,
                    format: "MMM DD"
                },
                yearly: {
                    data: yearlyData,
                    format: "MMM YYYY"
                }
            }

            // Coin detail data
            const coinDetailResponse = await axios.get(`api/v3/coins/${coinId}?localization=false&tickers=false&market_data=true&community_data=true&developer_data=true&sparkline=false`)
            
            const coinDetail = coinDetailResponse.data

            dispatch({type: "GET_COIN_DATA_SUCCESS", payload: {
                chartData,
                coinDetail,
                coinId
            }})

        }catch (error) {

            dispatch({type: "GET_COIN_DATA_FAILURE", payload: {error}})

        }
    }
}

export default getCoinDataRequest
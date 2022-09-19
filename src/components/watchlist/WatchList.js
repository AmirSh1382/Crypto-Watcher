import React, { useEffect } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { GET_WATCHLIST_COINS_DATA } from '../../redux/watchlist/watchlistActions';

// Components
import Coin from '../shared/Coin';

const WatchList = () => {

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const watchlistState = useSelector(state => state.watchlistState)

    const coinsState = useSelector(state => state.coinsState)

    const { coinsId, coins } = watchlistState

    useEffect(() => {
        // to avoid happening an error when refreshing the page
        !coinsState.coins.length && navigate("/")

        dispatch(GET_WATCHLIST_COINS_DATA(coinsState.coins, coinsId));

        // eslint-disable-next-line
    }, [])
    
    return (
        <div className="max-w-5xl mx-auto w-full px-6 md:px-12 my-10">
            <div className="font-bold text-xl">Watchlist</div>

            <div className="mt-5 mb-12">
                {
                    coins.length ? coins.map(coin => <Coin key={coin.id} coin={coin} />) : "Watchlist is empty"
                }
            </div>
        </div>
    );
};

export default WatchList;
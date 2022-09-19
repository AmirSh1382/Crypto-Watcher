import React, { useEffect } from "react";

// Componetns
import SkeletonLoading from "./SkeletonLoading";
import Coin from "../shared/Coin";
import Pagination from "./Pagination";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { SET_PAGINATION_CONFIGS } from "../../redux/pagiantion/paginationActions";
import { GET_WATCHLIST_COINSID_FROM_LOCAL_STORAGE } from '../../redux/watchlist/watchlistActions';

const SpotMarket = () => {
  const dispatch = useDispatch();

  const coinsState = useSelector(state => state.coinsState);

  const { loading, error, coins } = coinsState;

  const paginationState = useSelector(state => state.paginationState);

  useEffect(() => {
    // To avoid setting configs several times
    !paginationState.paginatedCoins.length && dispatch(SET_PAGINATION_CONFIGS(coins));

    //To get watchlist coins id from local storage
    dispatch(GET_WATCHLIST_COINSID_FROM_LOCAL_STORAGE())

    // eslint-disable-next-line
  }, [coinsState]);

  // Error handling
  if (error) return (
    <div className="flex flex-1 items-center justify-center font-semibold">
      {error}
    </div>
  )

  // Loading
  if (loading) return <SkeletonLoading />

  return (
    <div className="max-w-5xl mx-auto w-full px-6 md:px-12 my-10">
      <div className="font-bold text-xl">Market</div>

        {/* Coins */}
        <div className="mt-5 mb-12">
          {paginationState.paginatedCoins.map(coin => <Coin key={coin.id} coin={coin} /> )}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center">
          <Pagination />
        </div>

    </div>
  );
};

export default SpotMarket;
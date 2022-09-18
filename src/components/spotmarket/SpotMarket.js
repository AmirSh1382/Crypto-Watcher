import React, { useEffect } from "react";

// Componetns
import SkeletonLoading from "./SkeletonLoading";
import Coin from "../shared/Coin";
import Pagination from "./Pagination";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { SET_PAGINATION_CONFIGS } from "../../redux/pagiantion/paginationActions";

const SpotMarket = () => {
  const dispatch = useDispatch();

  const coinsState = useSelector((state) => state.coinsState);

  const { loading, error, coins } = coinsState;

  const paginationState = useSelector((state) => state.paginationState);

  useEffect(() => {
    // To avoid setting configs several times
    !paginationState.paginatedCoins.length && dispatch(SET_PAGINATION_CONFIGS(coins));

    // eslint-disable-next-line
  }, [coinsState]);

  return (
    <div className="max-w-6xl mx-auto w-full px-6 md:px-12 my-10">
      <div className="font-bold text-xl">Market</div>

      {/* Skeleton Loading */}
      {loading && <SkeletonLoading />}

      {/* Error */}
      {error && <div> {error} </div>}

      {/* Coins & Pagination */}
      {coins.length !== 0 && (
        <>
          <div className="mt-5 mb-12">
            {paginationState.paginatedCoins.map((coin) => <Coin key={coin.id} coin={coin} /> )}
          </div>

          <div className="flex items-center justify-center">
            <Pagination />
          </div>
        </>
      )}
    </div>
  );
};

export default SpotMarket;
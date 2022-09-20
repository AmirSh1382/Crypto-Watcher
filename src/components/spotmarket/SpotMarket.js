import React, { useEffect, useState } from "react";

// Componetns
import SkeletonLoading from "./SkeletonLoading";
import Coin from "../shared/Coin";
import Pagination from "./Pagination";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { SET_PAGINATION_CONFIGS } from "../../redux/pagiantion/paginationActions";
import { GET_WATCHLIST_COINS_ID_FROM_LOCAL_STORAGE } from '../../redux/watchlist/watchlistActions';

// MUI
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

const SpotMarket = () => {
  const dispatch = useDispatch();

  const coinsState = useSelector(state => state.coinsState);

  const { loading, error, coins } = coinsState;

  const paginationState = useSelector(state => state.paginationState);

  const [ searchDisplay, setSearchDisplay ] = useState(false)

  const [ search, setSearch ] = useState("")

  const searchedCoins = coins.filter(coin => coin.id.toUpperCase().includes(search.toUpperCase()))

  useEffect(() => {
    // To avoid setting configs several times
    !paginationState.paginatedCoins.length && dispatch(SET_PAGINATION_CONFIGS(coins));

    //To get watchlist coins id from local storage
    dispatch(GET_WATCHLIST_COINS_ID_FROM_LOCAL_STORAGE())

    // eslint-disable-next-line
  }, [coinsState]);

  // Error handling
  if (error) return (
    <div className="flex items-center justify-center flex-1 font-semibold">
      {error}
    </div>
  )

  // Loading
  if (loading) return <SkeletonLoading />

  return (
    <div className="max-w-5xl mx-auto w-full px-6 md:px-12 my-10">
      <div className="flex justify-between items-center font-bold text-xl">
        <span>Market</span>

        <div className="overflow-hidden font-medium text-base text-center flex-1 mx-4 md:mx-10">
          {/* Search input */}
          <input 
            type="text" 
            value={search}
            onChange={event => setSearch(event.target.value)}
            placeholder="Search something..."
            className={`${!searchDisplay && "translate-x-full ml-5 opacity-0"} 
              border border-gray-500 rounded text-slate-300 outline-none w-full 
              transition during-100 bg-transparent focus:border-amber-300 px-2 py-1`
            }
          />
        </div>

        {/* Search Icon */}
        <div className="flex items-center [&>svg]:hover:text-amber-300 ">
          <SearchIcon 
            onClick={() => setSearchDisplay(true)} 
            sx={{display: `${searchDisplay && "none"}`,
              fontSize: "27px" ,cursor: "pointer"
            }}
          />
        </div>

        {/* Close Icon */}
        <div className="flex items-center [&>svg]:hover:text-amber-300">
          <CloseIcon 
            onClick={() => setSearchDisplay(false)}
            sx={{display: `${!searchDisplay && "none"}`,
              fontSize: "27px", cursor: "pointer"
            }}
          />
        </div>
      </div>

      {
        (searchedCoins.length > 0) && search.trim() && (
          // Searched coins
          <div className="mt-5 mb-12">
            {
              searchedCoins.map(coin => <Coin key={coin.id} coin={coin} />)
            }
          </div>
        )
      }

      {
        (searchedCoins.length === 0) && (
          <div className="font-semibold text-center text-xl my-12">
            Nothing found !
          </div>
        )
      }

      {
        !search.trim() && (
          <div>
            {/* Coins */}
            <div className="mt-5 mb-12">
              {paginationState.paginatedCoins.map(coin => <Coin key={coin.id} coin={coin} /> )}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center">
              <Pagination />
            </div>
          </div>
        )
      }
    </div>
  );
};

export default SpotMarket;
import React, { useEffect, useState } from 'react';

// Componetns
import SkeletonLoading from './SkeletonLoading';
import Coin from "../shared/Coin"
import Pagination from './Pagination';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { SET_PAGINATION_CONFIGS } from '../../redux/pagiantion/paginationActions';

// MUI Icons
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const SpotMarket = () => {

    const dispatch = useDispatch()

    const coinsState = useSelector(state => state.coinsState)

    const { loading, error, coins  } = coinsState

    const paginationState = useSelector(state => state.paginationState)

    const [ scrollY, setScrollY ] = useState(0)

    useEffect(() => {
        // To avoid setting configs several times after navigating
        !paginationState.paginatedCoins.length && dispatch(SET_PAGINATION_CONFIGS(coins))

    // eslint-disable-next-line
    },[coinsState])

    window.addEventListener("scroll", () => {
        setScrollY(window.scrollY)
    })

    return (
        <div className='max-w-6xl mx-auto w-full px-6 md:px-12 my-10' >
            <div className='font-bold text-xl'>
                Market
            </div>

            {/* Skeleton Loading */}
            { loading && <SkeletonLoading /> }
 
            {/* Error */}
            { error && <div> { error } </div> }

            {/* Coins & Pagination */}
            { coins.length !== 0 && (
                <>
                    {/* Coins */}
                    <div className='mt-5 mb-12'>
                        {
                            paginationState.paginatedCoins.map(coin => <Coin key={coin.id} coin={coin} />)
                        }
                    </div>
            
                    {/* Pagination */}
                    <div className='flex items-center justify-center'>
                        <Pagination />
                    </div>
                </>
            )}

            {/* to show scroll to top btn based on scrollY */}
            {
                scrollY > 600 && (
                    <button 
                        onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                        className='fixed text-white bottom-8 left-10 rounded-full bg-amber-300
                        text-zinc-900 p-1 cursor-pointer active:scale-75 transition duration-100'
                    >
                        <KeyboardArrowUpIcon />
                    </button>
                )
            }
        </div>
    );
};

export default SpotMarket;
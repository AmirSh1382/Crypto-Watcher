import React, { useEffect } from 'react';

// MUI Icons
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// Componetns
import SkeletonLoading from './SkeletonLoading';
import Coin from "../shared/Coin"

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { SET_CONFIGS, NEXT_PAGE, PREV_PAGE, SET_PAGE } from '../../redux/pagiantion/paginationActions';

const SpotMarket = () => {

    const dispatch = useDispatch()

    const coinsState = useSelector(state => state.coinsState)

    const paginationState = useSelector(state => state.paginationState)

    useEffect(() => {
        dispatch(SET_CONFIGS(coinsState.coins))
    },[coinsState, dispatch])

    if(coinsState.loading) return <SkeletonLoading />

    if(coinsState.error) return <div>{coinsState.error}</div>

    const changePage = (action) =>  {
        window.scrollTo({top: 0, behavior: 'smooth'})

        dispatch(action)
    }

    return (
        <div className='max-w-6xl mx-auto w-full px-6 md:px-12 my-10'>
            <div className='font-bold text-xl'>
                Market
            </div>

            <div className='mt-5 mb-12'>
                {
                    paginationState.paginatedCoins.map(coin => <Coin key={coin.id} coin={coin} />)
                }
            </div>

            <div className='flex items-center justify-center'>
                <button
                    onClick={() => changePage(PREV_PAGE())}
                    className={`${paginationState.currentPage === 1 && "opacity-70 cursor-default"} 
                    transition duration-100 hover:opacity-70 mr-1 active:scale-90`}
                    disabled={paginationState.currentPage === 1}
                >
                    <ArrowBackIosNewIcon sx={{fontSize: "32px",padding: "5px", border: "1px solid #fcd34d" , borderRadius: "50%"}} />
                </button>

                {
                    paginationState.paginationBtns.map(btn => (
                        <button 
                            key={btn}
                            onClick={() => changePage(SET_PAGE(btn))}
                            className={`${paginationState.currentPage === btn ? "bg-amber-300 text-black" : "text-amber-300"}
                            border border-amber-300 text-lg rounded-full transition duration-100 w-7 mx-1 hover:opacity-70
                            active:scale-90`}
                        >
                            {btn}
                        </button>
                    ))
                }

                <button 
                    onClick={() => changePage(NEXT_PAGE())}
                    className={`${paginationState.currentPage === paginationState.pagesCount && "opacity-70 cursor-default"} 
                    transition duration-100 hover:opacity-70 ml-1 active:scale-90`}
                    disabled={paginationState.currentPage === paginationState.pagesCount}
                >
                    <ArrowForwardIosIcon sx={{fontSize: "32px",padding: "5px", border: "1px solid #fcd34d" , borderRadius: "50%"}} />
                </button>
            </div>
        </div>
    );
};

export default SpotMarket;
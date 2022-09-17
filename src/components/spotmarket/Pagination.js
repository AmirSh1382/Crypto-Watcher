import React from 'react';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { NEXT_PAGE, PREV_PAGE, SET_PAGE } from '../../redux/pagiantion/paginationActions';

// MUI Icons
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const Pagination = () => {

    // Pagination state
    const paginationState = useSelector(state => state.paginationState)

    const { currentPage, pagesCount, paginationBtns } = paginationState

    const dispatch = useDispatch()

    // To change pagination page
    const changePage = (action , btn) =>  {
        dispatch(action)

        // To fix scroll to top bug
        if(btn === "PREV" && currentPage !== 1){
            window.scrollTo({top: 0, behavior: 'smooth'})
        } else if (btn === "NEXT" && currentPage !== pagesCount){
            window.scrollTo({top: 0, behavior: 'smooth'})
        } else if (btn === "NUMBER") {
            window.scrollTo({top: 0, behavior: 'smooth'})
        }
    }

    return (
        <>
            {/* PREV-BTN */}
            <button
                onClick={() => changePage(PREV_PAGE(), "PREV")}
                className={`${currentPage === 1 && "opacity-50 cursor-default"} 
                transition duration-100 hover:opacity-70 mr-1 active:scale-90`}
            >
                <ArrowBackIosNewIcon sx={{fontSize: "32px",padding: "5px", border: "1px solid #fcd34d" , borderRadius: "50%"}} />
            </button>

            {/* Number-BTNS */}
            {
                paginationBtns.map(btn => (
                    <button 
                        key={btn}
                        onClick={() => changePage(SET_PAGE(btn), "NUMBER")}
                        className={`${currentPage === btn ? "bg-amber-300 text-black" : "text-amber-300"}
                        border border-amber-300 text-lg rounded-full transition duration-100 px-2 py-0.8 mx-1 
                        hover:opacity-70 active:scale-90`}
                    >
                        {btn}
                    </button>
                ))
            }

            {/* NEXT-BTN */}
            <button 
                onClick={() => changePage(NEXT_PAGE(), "NEXT")}
                className={`${currentPage === pagesCount && "opacity-50 cursor-default"} 
                transition duration-100 hover:opacity-70 ml-1 active:scale-90`}
            >
                <ArrowForwardIosIcon sx={{fontSize: "32px",padding: "5px", border: "1px solid #fcd34d" , borderRadius: "50%"}} />
            </button>
        </>
    );
};

export default Pagination;
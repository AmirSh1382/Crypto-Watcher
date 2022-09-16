import React, { useEffect } from 'react';

import SpotMarket from "./spotmarket/SpotMarket"
import WatchList from './watchlist/WatchList';
import AboutProject from './aboutproject/AboutProject';

// React-router-dom
import { Routes, Route } from 'react-router-dom';

// Redux
import { useDispatch } from 'react-redux';
import { fetchDataStart } from "../redux/coins/coinsActions"

const Landing = () => {
    
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchDataStart())
    }, [dispatch]) 

    return (
        <Routes>
            <Route path='/' element={<SpotMarket /> } />
            <Route path='watchlist' element={<WatchList /> } />
            <Route path='aboutproject' element={<AboutProject /> } />
        </Routes>
    );
};

export default Landing;
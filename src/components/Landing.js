import React, { useEffect } from "react";

// Components
import SpotMarket from "./spotmarket/SpotMarket";
import WatchList from "./watchlist/WatchList";
import AboutProject from "./aboutproject/AboutProject";
import CoinDetail from "./shared/CoinDetail";

// React-router-dom
import { Routes, Route, Navigate } from "react-router-dom";

// Redux
import { useDispatch } from "react-redux";
import { getAllCoins } from "../redux/coinsData/coinsActions";

const Landing = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCoins());

    // eslint-disable-next-line
  }, []);

  return (
    <Routes>
      <Route path="/spotmarket" element={<SpotMarket />} />
      <Route path="/watchlist" element={<WatchList />} />
      <Route path="/aboutproject" element={<AboutProject />} />
      <Route path="/spotmarket/coindetail/:id" element={<CoinDetail />} />
      <Route path="/watchlist/coindetail/:id" element={<CoinDetail /> } />
      <Route path="/" element={<Navigate to="/spotmarket" /> } />
    </Routes>
  );
};

export default Landing;
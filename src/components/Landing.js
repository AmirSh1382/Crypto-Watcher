import React, { useEffect } from "react";

// Components
import SpotMarket from "./spotmarket/SpotMarket";
import WatchList from "./watchlist/WatchList";
import AboutProject from "./aboutproject/AboutProject";
import CoinDetail from "./shared/CoinDetail";

// React-router-dom
import { Routes, Route } from "react-router-dom";

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
      <Route path="/" element={<SpotMarket />} />
      <Route path="watchlist" element={<WatchList />} />
      <Route path="aboutproject" element={<AboutProject />} />
      <Route path="/coindetail/:id" element={<CoinDetail />} />
    </Routes>
  );
};

export default Landing;
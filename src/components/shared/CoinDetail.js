import React, { useEffect } from "react";

// Componetns
import ChartElement from "./ChartElement";

// React-router-dom
import { useParams } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { getCoinDataRequest } from "../../redux/coinData/coinActions";
import { RESET_STATE } from "../../redux/coinData/coinActions";

const CoinDetail = () => {

  // Coin id
  const { id } = useParams();

  const dispatch = useDispatch();
  const coinState = useSelector((state) => state.coinState);

  const { coinId, chartData, defaultChartDate, coinDetail, error } = coinState;

  useEffect(() => {
    dispatch(RESET_STATE());
    dispatch(getCoinDataRequest(id));

    // eslint-disable-next-line
  }, []);

  if (error) return (
    <div className="flex flex-1 items-center justify-center font-semibold">
      {error}
    </div>
  )

  if (!defaultChartDate && !chartData && !coinDetail) return <div>Loaing</div>;

  return (
    <div className="max-w-6xl w-full mx-auto my-10 px-3 md:px-12">
      <ChartElement
        coinId={coinId}
        chartData={chartData}
        defaultChartDate={defaultChartDate}
      />
    </div>
  );
};

export default CoinDetail;
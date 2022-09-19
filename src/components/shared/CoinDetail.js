import React, { useEffect } from "react";

// Componetns
import ChartElement from "./ChartElement";
import Loading from "./Loading"

// React-router-dom
import { useParams } from "react-router-dom";

// MUI Icons
import MovingIcon from '@mui/icons-material/Moving';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

// Redux
import { useSelector, useDispatch } from "react-redux";
import { getCoinDataRequest } from "../../redux/coinData/coinActions";
import { RESET_STATE } from "../../redux/coinData/coinActions";

// Momnet js
import moment from "moment";

const CoinDetail = () => {

  // Coin id
  const { id } = useParams();

  const dispatch = useDispatch();

  const coinState = useSelector(state => state.coinState);

  const { chartData, defaultChartDate, coinData, error } = coinState;

  useEffect(() => {
    // To scroll to top on load
    window.scrollTo({top: 0, behavior: "smooth"})

    dispatch(RESET_STATE());
    dispatch(getCoinDataRequest(id));

    // eslint-disable-next-line
  }, []);
  
  if (error) return (
    <div className="flex flex-1 items-center justify-center font-semibold">
      {error}
    </div>
  )

  if (!defaultChartDate && !chartData && !coinData) return <Loading /> ;

  const { image, market_data } = coinData

  const { 
    current_price,
    market_cap,
    market_cap_change_percentage_24h,
    price_change_percentage_24h,
    circulating_supply, max_supply,
    market_cap_rank,
    total_supply,
    ath,
    atl,
    ath_date,
    atl_date,
    ath_change_percentage,
    atl_change_percentage,
  } = market_data

  return (
    <div className="max-w-6xl w-full mx-auto my-10 px-3 md:px-12">

      <div className="flex items-center flex-col">
        {/* Img */}
        <img className="w-20 md:w-28" src={image.large} alt={id} />
        {/* Current price */}
        <div className="text-3xl mt-4 ">
          ${current_price.usd.toFixed(2).toLocaleString()}
        </div>
        {/* Price change percentage (24h) */}
        <div className={`${price_change_percentage_24h < 0 ? "text-rose-700" : "text-emerald-500"}
            text-lg font-semibold mt-3`
          }
        >
          {price_change_percentage_24h > 0 ? <MovingIcon /> : <TrendingDownIcon />}
          &nbsp;
          {price_change_percentage_24h.toFixed(2)}% 
          <span> (24h)</span>
        </div>
      </div>

      {/* Chart */}
      <div>
        <ChartElement />
      </div>

      <div className="max-w-xl divide-y divide-stone-800 mx-auto">
        {/* Rank */}
        <div className="px-5 py-3">
          <div className="text-sm text-slate-400 mb-1">Rank</div>
          <div className="font-semibold">#{market_cap_rank}</div>
        </div>

        {/* Market Cap */}
        <div className="flex items-center justify-between px-5 py-3">
          <div>
            <div className="text-sm text-slate-400 mb-1">
              Market Cap
            </div>
            <div className="font-semibold">
              ${market_cap.usd.toLocaleString()}
            </div>
          </div>
          <div className={`${market_cap_change_percentage_24h < 0 ? "text-rose-700" : "text-emerald-500"}`}>
            {market_cap_change_percentage_24h > 0 ? <MovingIcon /> : <TrendingDownIcon />}
            &nbsp;
            {market_cap_change_percentage_24h.toFixed(2)}%
          </div>
        </div>

        {/* All time high */}
        <div className="flex items-center justify-between px-5 py-3">
          <div>
            <div className="text-xs md:text-sm text-slate-400 mb-1">
              All Time High 
              ({moment(ath_date.usd).format("MMMMDD,YYYY")})
            </div>
            <div className="font-semibold">
              ${ath.usd.toLocaleString()}
            </div>
          </div>
          <div className={`${ath_change_percentage.usd < 0 ? "text-rose-700" : "text-emerald-500"}`}>
            {ath_change_percentage.usd > 0 ? <MovingIcon /> : <TrendingDownIcon />}
            &nbsp;
            {ath_change_percentage.usd.toFixed(2)}%
          </div>
        </div>

        {/* All time low */}
        <div className="flex items-center justify-between px-5 py-3">
          <div>
            <div className="text-xs md:text-sm text-slate-400 mb-1">
              All Time Low 
              ({moment(atl_date.usd).format("MMMMDD,YYYY")})
            </div>
            <div className="font-semibold">
              ${atl.usd.toLocaleString()}
            </div>
          </div>
          <div className={`${atl_change_percentage.usd < 0 ? "text-rose-700" : "text-emerald-500"}`}>
            {atl_change_percentage.usd > 0 ? <MovingIcon /> : <TrendingDownIcon />}
            &nbsp;
            {atl_change_percentage.usd.toFixed(2)}%
          </div>
        </div>

        {/* Circulating supply */}
        <div className="px-5 py-3">
          <div className="text-slate-400 text-sm mb-1">Circulating Supply</div>
          <div>
            <span className="font-semibold">
              {circulating_supply.toLocaleString()}
            </span>
            <span className="text-xs text-slate-400"> tokens</span>
          </div>
        </div>

        {/* Max supply */}
        {
          max_supply && (
            <div className="px-5 py-3">
              <div className="text-slate-400 text-sm mb-1">
                Max Supply
              </div>
              <div className="font-semibold">
                {max_supply.toLocaleString()}
              </div>
            </div>
          )
        }

        {/* Total supply */}
        {
          total_supply && (
            <div className="px-5 py-3">
              <div className="text-slate-400 text-sm mb-1">
                Total Supply
              </div>
              <div>
                {total_supply.toLocaleString()}
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default CoinDetail;
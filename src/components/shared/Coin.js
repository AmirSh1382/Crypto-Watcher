import React from "react";

// MUI Icons
import MovingIcon from '@mui/icons-material/Moving';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

// Functions
import { shorten } from "../../helper/functions";

const Coin = ({ coin }) => {

  const {name, symbol, image, total_volume, current_price, market_cap, price_change_percentage_24h} = coin

  return (
    <div className={`bg-gradient-to-r cursor-pointer from-black rounded ${price_change_percentage_24h > 0 ? "to-green": "to-red" } mb-3`}>
      <div className="flex justify-between items-center px-5 py-3">
        <div className="flex items-center flex-1">
          <img className="mr-3" src={image} width="40px" alt={name} />
          <div>
            <div>{symbol.toUpperCase()} <span className="text-sm text-slate-500	">/{shorten(name)}</span></div>
            <div className="text-slate-500 text-xs">Vol: {(total_volume / 1000000).toFixed(2)}M</div>
          </div>  
        </div>

        <div className="flex-1 text-center hidden md:block text-slate-300">
          ${(market_cap / 1000000).toFixed(2).toLocaleString()}M
        </div>

        <div className="flex-1">
          <div className={`${price_change_percentage_24h < 0 ? "text-rose-700" : "text-emerald-500"} text-end`}>
            {price_change_percentage_24h}
            {price_change_percentage_24h > 0 ? <MovingIcon /> : <TrendingDownIcon color="" />}
          </div>
          <div className="text-slate-500 text-sm text-end">
            ${current_price.toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coin;
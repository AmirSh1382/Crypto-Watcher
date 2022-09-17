import React, { useEffect } from 'react';

// Componetns
import ChartElement from './ChartElement';

// React-router-dom
import { useParams } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import getCoinDataRequest from '../../redux/test/coinActions';

const CoinDetail = () => {

    const dispatch = useDispatch()
    const test = useSelector(state => state.coinState)

    const { chartData, defaultChartDate, coinDetail, coinId } = test

    // Coin id
    const { id } = useParams()

    useEffect(() => {
        dispatch({type: "RESET_STATE"})
        dispatch(getCoinDataRequest(id))

        // eslint-disable-next-line
    }, [])

    if (!defaultChartDate && !coinDetail) return <div>Loaing</div>

    return (
        <div className='max-w-6xl w-full mx-auto my-10 px-3 md:px-12'>
            <ChartElement coinId={coinId} chartData={chartData} defaultChartDate={defaultChartDate} />
        </div>
    );
};

export default CoinDetail;
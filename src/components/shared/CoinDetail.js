import React from 'react';

// React-router-dom
import { useParams } from 'react-router-dom';

const CoinDetail = () => {

    const { id } = useParams()

    console.log(id);

    return (
        <div>
            CoinDetail
        </div>
    );
};

export default CoinDetail;
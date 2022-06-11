import React from 'react';
import stocks from './stock-data';

const Stock = (props) => {
    return (
        <div>
            <h2> Name: {stocks.name}</h2>
            <h3>Price: {stocks.lastPrice}</h3>
        </div>
    )
    }
export default Stock
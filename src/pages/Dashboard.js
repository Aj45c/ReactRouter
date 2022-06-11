import React from "react";
import {Link} from 'react-router-dom';
import theData from './stock-data';

const Dash = (props) => {
    const theData = props.theData.map((d,index) => {
        return (
        <Link key = {index} to = {`/stocks/${d.symbol}`}>
            <li> {d.name} </li>
        </Link>
        )
    });
    return ( 
    <ul> {theData} </ul>
    )
}

export default Dash;
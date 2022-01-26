import React, { useState } from 'react';
import './Input.css';

export default function Input({ setSymbol }) {
    const [inputValue, setInputValue] = useState();


    return (
        <div id='input'>
            <label id='Symbol'>Enter Stock Ticker Symbol:</label>
            <input id='enterTicker' onChange={e => setInputValue(e.target.value)} name="tickerInput"></input>
            <button id='update' onClick={() => setSymbol(inputValue)}>Update</button>
        </div>
    )
}

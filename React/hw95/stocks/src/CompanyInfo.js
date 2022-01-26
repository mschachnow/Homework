import React, { useEffect, useState } from 'react';
import './CompanyInfo.css';


export default function CompanyInfo({ symbol }) {
    const [stockInfo, setStockInfo] = useState();

    useEffect(() => {
        (async () => {
            try {
                console.log(symbol);
                const r = await fetch(`https://finnhub.io/api/v1/stock/profile?symbol=${symbol}&token=sandbox_c7oakniad3idf06mq6b0`);

                if (!r.ok) {
                    console.log(r);
                    throw new Error(`${r.status} ${r.statusText || ' - failed to load'}`);
                }
                const stockInfo = await r.json();
                setStockInfo(stockInfo);

            } catch (e) {
                console.error(e);
            }
        })();
    }, [symbol])
    if (!stockInfo) {
        return 'Loading...';
    }
    return (
        <>
            <header id='companyName'>{stockInfo.name}</header>
            <div id='ticker'>{stockInfo.ticker}</div>
            <div id='description'>{stockInfo.description}</div>

        </>
    )
}

import React from 'react';
import { Chart } from "react-google-charts";

const LinearChart = (props) => {
    const { items, totalCurrentCash, totalCurrentCrypto, totalCurrentMetals, totalCurrentWallet } = props;
    items.sort((obj1, obj2) => {
        if (obj1.purchaseDate < obj2.purchaseDate) {
            return -1;
        } else {
            return 1;
        }
    })
    const timeX = ['2020-03', '2020-05', '2020-10'];
    const cashValues = [2000, 2500, 2400];
    const cryptoValues = [5000, 5500, 5400]
    return (
        <div className="linear-chart_container">
            <Chart
                width={'1000px'}
                height={'400px'}
                chartType="LineChart"
                loader={<div>Loading Chart</div>}
                data={[
                    ['x', 'Gotówka', 'Metale Szlachetne'],
                    timeX,
                    cashValues,
                    cryptoValues
                ]}
                options={{
                    hAxis: {
                        title: 'Czas',
                    },
                    vAxis: {
                        title: 'Wartość (PLN)',
                    },
                    series: {
                        1: { curveType: 'function' },
                    },
                }}
                rootProps={{ 'data-testid': '2' }}
            />
        </div>
    )
}

export default LinearChart;
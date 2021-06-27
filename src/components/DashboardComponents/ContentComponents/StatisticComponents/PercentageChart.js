import React from 'react'
import { Chart } from "react-google-charts";


const PercentageChart = (props) => {
    const percentCash = parseFloat(((props.totalCurrentCash / props.totalCurrentWallet) * 100).toFixed(2))
    const percentCrypto = parseFloat(((props.totalCurrentCrypto / props.totalCurrentWallet) * 100).toFixed(2))
    const percentMetals = parseFloat(((props.totalCurrentMetals / props.totalCurrentWallet) * 100).toFixed(2))
    return (
        <div className="pie-chart_container">

            <Chart
                height={'400px'}
                width={'500px'}
                chartType="PieChart"
                loader={<div>Ładowanie wykresu</div>}
                data={[
                    ['Aktywo', 'podział procentowy'],
                    ['Gotówka', percentCash],
                    ['Kryptowaluty', percentCrypto],
                    ['Metale szlachetne', percentMetals]
                ]}
                options={{
                    title: ''
                }}
                rootProps={{ 'data-testedid': '1' }}
            />

        </div>
    )
}
export default PercentageChart;
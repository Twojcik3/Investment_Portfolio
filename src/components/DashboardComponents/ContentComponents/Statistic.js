import React from 'react';
import { PieChart, Pie, Tooltip, Sector, Cell, ResponsiveContainer } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`%`}
        </text>
    );
};
const Statistic = (props) => {
    const percentCash = parseFloat(((props.totalCurrentCash / props.totalCurrentWallet) * 100).toFixed(2))
    const percentCrypto = parseFloat(((props.totalCurrentCrypto / props.totalCurrentWallet) * 100).toFixed(2))
    const percentMetals = parseFloat(((props.totalCurrentMetals / props.totalCurrentWallet) * 100).toFixed(2))

    const data = [
        { name: 'Gotówka', value: percentCash },
        { name: 'Kryptowaluty', value: percentCrypto },
        { name: 'Metale Szlachetne', value: percentMetals }
    ]


    return (
        <div className="Statistic">
            <div className="Wallet-parts">
                <h4>Podział portfela</h4>
                <div className="pie-chart_container">
                    <ResponsiveContainer>
                        <PieChart height={500} width={500}>
                            <Pie
                                data={data}
                                cx="300"
                                cy="150"
                                outerRadius={150}
                                fill="#8884d8"
                                dataKey="value"

                            >
                                <Cell fill={COLORS[0]} label={data[0].name} />
                                <Cell fill={COLORS[1]} label={data[1].name} />
                                <Cell fill={COLORS[2]} label={data[2].name} />

                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <div className="Wallet-change">
                <h4>Wartość portfela</h4>
                <div className="linear-chart_container">
                    <h5>Wykres</h5>
                </div>
            </div>
        </div>
    )
}

export default Statistic;
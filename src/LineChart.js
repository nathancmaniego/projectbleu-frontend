'use client';

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

const rainfallData = [
    {
        name: 'Jan',
        retain: 4000,
        release: 2400,
    },
    {
        name: 'Feb',
        retain: 3000,
        release: 2100,
    },
    {
        name: 'Mar',
        retain: 2000,
        release: 3100,
    },
    {
        name: 'Apr',
        retain: 4000,
        release: 2400,
    },
    {
        name: 'May',
        retain: 4000,
        release: 2400,
    },
    {
        name: 'Jun',
        retain: 4000,
        release: 2400,
    },
    {
        name: 'Jul',
        retain: 4000,
        release: 2400,
    },
    {
        name: 'Aug',
        retain: 4000,
        release: 2400,
    },
    {
        name: 'Sept',
        retain: 4000,
        release: 2400,
    },
    {
        name: 'Oct',
        retain: 4000,
        release: 2400,
    },
    {
        name: 'Nov',
        retain: 4000,
        release: 2400,
    },
    {
        name: 'Dec',
        retain: 4000,
        release: 2400,
    },
];

const LineChartComponent = () => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart
                width={500}
                height={300}
                data={rainfallData}
                margin={{
                    right: 30,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Line type="monotone" dataKey="retain" stroke="#3b82f6" />
                <Line type="monotone" dataKey="release" stroke="#8b5cf6" />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default LineChartComponent;

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
                <p className="text-medium text-lg">{label}</p>
                <p className="text-sm text-blue-400">
                    Retain:
                    <span className="ml-2">{payload[0].value}</span>
                </p>
                <p className="text-sm text-indigo-400">
                    Release:
                    <span className="ml-2">{payload[1].value}</span>
                </p>
            </div>
        );
    }
};
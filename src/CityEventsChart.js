import React, { useState, useEffect, useCallback } from 'react';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const CityEventsChart = ({ allLocations, events }) => {
  const [data, setData] = useState([]);

  const getData = useCallback(() => {
    const chartData = allLocations.map((location) => {
      const count = events.filter((event) => event.location === location).length;
      const city = location.split(/, | - /)[0];
      return { city, count };
    });
    return chartData;
  }, [allLocations, events]);

  useEffect(() => {
    const chartData = getData();
    setData(chartData);
  }, [getData]);

  return (
    <ResponsiveContainer width="99%" height={400}>
      <ScatterChart
        margin={{
          top: 20,
          right: 20,
          bottom: 60,
          left: -30,
        }}
      >
        <CartesianGrid />
        <YAxis type="number" dataKey="count" name="Number of events" allowDecimals={false} />
        <XAxis
          type="category"
          dataKey="city"
          name="City"
          angle={60}
          interval={0}
          tick={{ dx: 20, dy: 40, fontSize: 14 }}
        />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Scatter name="A school" data={data} fill="#8884d8" />
      </ScatterChart>
    </ResponsiveContainer>
  );
};

export default CityEventsChart;
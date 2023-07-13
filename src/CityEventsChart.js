import React, { useState, useEffect, useCallback } from 'react';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
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
    <div className="data-vis-wrapper">
      <ScatterChart
        width={800}
        height={400}
        margin={{
          top: 20,
          right: 20,
          bottom: 60,
          left: -30
        }}
      >
        <CartesianGrid stroke="var(--tertiary-color)" />
        <XAxis
          type="category"
          dataKey="city"
          name="City"
          angle={60}
          interval={0}
          tick={{ dx: 20, dy: 40, fontSize: 14 }}
          stroke="var(--tertiary-color)"
        />
        <YAxis
          type="number"
          dataKey="count"
          name="Number of events"
          allowDecimals={false}
          stroke="var(--tertiary-color)"
        />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Scatter data={data} fill="var(--chart-color-1)" />
      </ScatterChart>
    </div>
  );
};

export default CityEventsChart;
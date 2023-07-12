import React, { useState, useEffect, useCallback } from 'react';
import {
  PieChart,
  Pie,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const EventGenresChart = ({ events }) => {
  const [data, setData] = useState([]);

  const getData = useCallback(() => {
    const genreCounts = {};

    events.forEach((event) => {
      const { genre } = event;

      if (genreCounts[genre]) {
        genreCounts[genre] += 1;
      } else {
        genreCounts[genre] = 1;
      }
    });

    const chartData = Object.keys(genreCounts).map((genre) => ({
      name: genre,
      value: genreCounts[genre],
    }));

    return chartData;
  }, [events]);

  useEffect(() => {
    const chartData = getData();
    setData(chartData);
  }, [getData]);

  return (
    <ResponsiveContainer width="99%" height={400}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
        />
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default EventGenresChart;

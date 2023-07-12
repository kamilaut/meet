import React, { useState, useEffect, useCallback } from 'react';
import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const EventGenresChart = ({ events }) => {
  const [data, setData] = useState([]);

  const getData = useCallback(() => {
    const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'Angular'];

    const chartData = genres.map((genre) => {
      const filteredEvents = events.filter((event) => event.summary.includes(genre));
      return {
        name: genre,
        value: filteredEvents.length,
      };
    });

    return chartData;
  }, [events]);

  useEffect(() => {
    const chartData = getData();
    setData(chartData);
  }, [getData]);

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    outerRadius,
    percent,
    index,
  }) => {
    const RADIAN = Math.PI / 180;
    const radius = outerRadius;
    const x = cx + radius * Math.cos(-midAngle * RADIAN) * 1.07;
    const y = cy + radius * Math.sin(-midAngle * RADIAN) * 1.07;
    const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'Angular'];
    return percent ? (
      <text
        x={x}
        y={y}
        fill="#8884d8"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {`${genres[index]} ${(percent * 100).toFixed(0)}%`}
      </text>
    ) : null;
  };

  return (
    <ResponsiveContainer width="99%" height={400}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          fill="#8884d8"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={150}
        />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default EventGenresChart;

import React, { useState, useEffect, useCallback } from 'react';
import { PieChart, Pie, Tooltip } from 'recharts';

const EventGenresChart = ({ events }) => {
  const [data, setData] = useState([]);

  const getData = useCallback(() => {
    const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'Angular'];

    const chartData = genres.map((genre) => {
      const filteredEvents = events.filter((event) => event.summary.includes(genre));
      return {
        name: genre,
        value: filteredEvents.length
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
    index
  }) => {
    const RADIAN = Math.PI / 180;
    const radius = outerRadius;
    const x = cx + radius * Math.cos(-midAngle * RADIAN) * 1.07;
    const y = cy + radius * Math.sin(-midAngle * RADIAN) * 1.07;
    const genres = ['React', 'JS', 'Node', 'jQuery', 'Angular'];
    return percent ? (
      <text
        x={x}
        y={y}
        fontSize="12px"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {`${genres[index]} ${(percent * 100).toFixed(0)}%`}
      </text>
    ) : null;
  };

  return (
    <div className="data-vis-wrapper">
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          dataKey="value"
          fill="var(--chart-color-2)"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={100}
        />
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default EventGenresChart;

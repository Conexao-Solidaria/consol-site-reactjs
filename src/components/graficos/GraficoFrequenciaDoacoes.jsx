import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Apr 2022', frequency: 3 },
  { name: 'May 2022', frequency: 5 },
  { name: 'Jun 2022', frequency: 2 },
  { name: 'Jul 2022', frequency: 8 },
  { name: 'Aug 2022', frequency: 6 },
  // Adicione mais dados conforme necessário
  { name: 'Apr 2024', frequency: 4 },
];

const FrequencyChart = () => (
  <ResponsiveContainer width="100%" height={300}>
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5, right: 30, left: 20, bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="Frequência de doações por mês" fill="#8884d8" />
    </BarChart>
  </ResponsiveContainer>
);

export default FrequencyChart;

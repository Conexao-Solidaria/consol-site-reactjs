import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const GraficoFrequenciaDoacoes = () => {
  // Dados fictícios para os últimos 6 meses
  const data = [
    { month: 'Maio', donations: 25 },
    { month: 'Junho', donations: 40 },
    { month: 'Julho', donations: 30 },
    { month: 'Agosto', donations: 50 },
    { month: 'Setembro', donations: 20 },
    { month: 'Outubro', donations: 60 },
  ];

  return (
    <ResponsiveContainer width="80%" height={275}>
      <BarChart data={data} margin={{ top: 10, right: 89, left: 0, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" label={{ value: 'Mês', position: 'insideBottom', offset: -5 }} />
        <YAxis label={{ value: 'Doações', angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Bar dataKey="donations" fill="#003366" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default GraficoFrequenciaDoacoes;
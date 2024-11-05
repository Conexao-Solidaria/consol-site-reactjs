import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const GraficoIdade = ({ distribuicaoIdades }) => {
  // Calcula o total de membros
  const totalMembros = Object.values(distribuicaoIdades).reduce((acc, curr) => acc + curr, 0);

  // Cria o array de dados com a porcentagem de cada faixa etária
  const data = [
    { name: 'Entre 0 - 12', value: distribuicaoIdades.zeroDoze, percentage: (distribuicaoIdades.zeroDoze / totalMembros) * 100 },
    { name: 'Entre 13 - 25', value: distribuicaoIdades.trezeVinteCinco, percentage: (distribuicaoIdades.trezeVinteCinco / totalMembros) * 100 },
    { name: 'Entre 25 - 60', value: distribuicaoIdades.vinteCincoSessenta, percentage: (distribuicaoIdades.vinteCincoSessenta / totalMembros) * 100 },
    { name: '60+', value: distribuicaoIdades.maisSessenta, percentage: (distribuicaoIdades.maisSessenta / totalMembros) * 100 },
  ];

  const COLORS = ['#EB4C46', '#104892', '#DEE8EC', '#A9A9A9'];
  const RADIAN = Math.PI / 180;

  // Função para renderizar a label com a porcentagem e borda preta
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="black"
        stroke="black"
        strokeWidth={1}
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {`${data[index].percentage.toFixed(0)}%`}
      </text>
    );
  };

  return (
    <ResponsiveContainer width="100%" height="80%">
      <PieChart>
        <Tooltip
          formatter={(value) => `${value}`}
          cursor={{ fill: 'rgba(0, 0, 0, 0.1)' }}
        />
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default GraficoIdade;

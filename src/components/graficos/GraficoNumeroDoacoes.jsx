import React from "react";
import { LineChart, Line, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";

const GraficoNumeroDoacoes = ({ data }) => {
    if(data == undefined && data == null){
        return <div>Sem dados para exibir</div>
    } 

  const doacoesMes = Object.keys(data).map((mes) => ({
    mes,
    qtdDoacoes: data[mes],
  }));

  return (
    <ResponsiveContainer width="100%" height="80%">
      <LineChart data={doacoesMes}>
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="mes" />
        <YAxis domain={[0, 'dataMax + 5']} />
        <Tooltip
          labelFormatter={(label) => `Mês: ${label}`}
          formatter={(value) => [`${value}`, "Quantidade de doações"]}
        />
        <Line type="monotone" dataKey="qtdDoacoes" stroke="#8884d8" dot={{ r: 5 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default GraficoNumeroDoacoes;

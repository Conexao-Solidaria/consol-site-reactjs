import React from "react";
import { LineChart, Line, ResponsiveContainer, CartesianGrid, XAxis, YAxis } from "recharts";

const GraficoNumeroDoacoes = (data) => {
  // const doacoesMes = data.data((item) => ({
  //   mes: item.mes,
  //   qtdDoacoes: item.qtdDoacoes,
  // }));

  return (
    <ResponsiveContainer width="100%" height="80%">
      <LineChart data={data}>
        <Line type="monotone" dataKey="qtdDoacoes" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="mes" />
        <YAxis />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default GraficoNumeroDoacoes;

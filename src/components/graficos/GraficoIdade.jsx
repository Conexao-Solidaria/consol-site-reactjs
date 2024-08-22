import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const GraficoIdade = () => {
  const data = {
    labels: ['de 0 a 12 anos', 'de 12 a 20 anos', 'de 20 a 60 anos', 'Mais de 60 anos'],
    datasets: [
      {
        label: 'Idades',
        data: [15, 40, 12, 5],
        backgroundColor: [
          '#AEC6CF',
          '#77DD77',
          '#FFB347',
          '#C9A9F9',
        ],
        borderColor: [
          '#AEC6CF',
          '#77DD77',
          '#FFB347',
          '#C9A9F9',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: 'Distribuição de Idades',
      },
    },
  };

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems:'center'}}>
      <Doughnut data={data} options={options}  />
    </div>
  );
};

export default GraficoIdade;
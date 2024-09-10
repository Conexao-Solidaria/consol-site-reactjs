import Rotas from "./routes";
import React from 'react';
import EditarDonatario from './pages/editarDonatario/EditarDonatario';


const App = () => {
  const options = ['Solteiro', 'Casado', 'União Estável', 'Viúvo'];

  const handleSelect = (value) => {
    console.log('Opção selecionada:', value);
  };

  return (
    <div>
      <EditarDonatario options={options} onSelect={handleSelect} />
    </div>
  );

  return <Rotas />;
};

export default App;

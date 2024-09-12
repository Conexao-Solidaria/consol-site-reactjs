import Rotas from "./routes";
import React from 'react';
import EditarDonatario from './pages/editarDonatario/EditarDonatario';

const App = () => {
  const handleSelect = (value) => {
    console.log('Opção selecionada:', value);
  };

  return (
    <div>
      <EditarDonatario
        optionsEstadoCivil={['Solteiro', 'Casado', 'União Estável', 'Viúvo']}
        optionsEscolaridade={['Analfabeto','Analfabeto Funcional', 'Educação Infantil', 'Fundamental', 'Médio', 'Superior', 'Pós-Graduação']}
        optionsTrabalhando={['Sim', 'Não']}
        onSelect={handleSelect}
      />
    </div>
  );

  return <Rotas />;
};

export default App;

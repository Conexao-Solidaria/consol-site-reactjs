import Rotas from "./routes";
import React from 'react';

const App = () => {
  const handleSelect = (value) => {
    console.log('Opção selecionada:', value);
  };

  return <Rotas />;
};

export default App;

import React, { useState } from "react";
import NavBar from "../../components/navBar/NavBar";
import Head from "../../components/head/Head";
import style from "./PesquisaDoacao.module.css";
import iconCrianca from "../../utils/assets/icon_Crianca.png";
import iconDoacoes from "../../utils/assets/icon_doacoes_azul.png";
import ListaDoacoes from "../../components/doacoes/ListaDoacoes";
import iconLupa from "../../utils/assets/icon_lupa.png";


const PesquisaDoacao = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  const vetorMockup = [
    {
      categoria: "Alimento",
      data: "10/09/2024",
      hora: "14h30",
      nomeCompleto: "João da Silva",
      descricao: "Doação de cesta básica contendo 5kg de arroz, 2kg de feijão, 1L de óleo, 1kg de açúcar, e 1 pacote de café.",
      endereco: "Rua das Flores 123",
      complemento: "Centro - SP",
      telefone: "+55 11 2345-6789",
      celular: "+55 11 91234-5678",
      email: "joao.silva@example.com"
    },
    {
      categoria: "Higiene",
      data: "08/09/2024",
      hora: "09h45",
      nomeCompleto: "Maria Oliveira",
      descricao: "Doação de 10 kits de higiene com sabonetes, pastas de dente, escovas de dente e papel higiênico.",
      endereco: "Avenida Brasil 456",
      complemento: "Jardins - RJ",
      telefone: "+55 21 3456-7890",
      celular: "+55 21 98765-4321",
      email: "maria.oliveira@example.com"
    },
    {
      categoria: "Vestuário",
      data: "05/09/2024",
      hora: "16h00",
      nomeCompleto: "Carlos Mendes",
      descricao: "Doação de 20 peças de roupas, incluindo calças, camisetas, casacos e roupas infantis.",
      endereco: "Rua dos Andradas 789",
      complemento: "Bela Vista - MG",
      telefone: "+55 31 4567-8901",
      celular: "+55 31 99876-5432",
      email: "carlos.mendes@example.com"
    },
    {
      categoria: "Alimento",
      data: "03/09/2024",
      hora: "11h20",
      nomeCompleto: "Ana Pereira",
      descricao: "Doação de 3 cestas básicas contendo arroz, feijão, macarrão, óleo, açúcar, sal e café.",
      endereco: "Rua dos Pinhais 321",
      complemento: "Vila Nova - PR",
      telefone: "+55 41 5678-9012",
      celular: "+55 41 91234-6789",
      email: "ana.pereira@example.com"
    },
    {
      categoria: "Limpeza",
      data: "02/09/2024",
      hora: "10h15",
      nomeCompleto: "Lucas Silva",
      descricao: "Doação de produtos de limpeza como detergente, desinfetante, água sanitária, esponjas e sabão em barra.",
      endereco: "Alameda Santos 654",
      complemento: "Campo Belo - SP",
      telefone: "+55 11 6789-0123",
      celular: "+55 11 93456-7890",
      email: "lucas.silva@example.com"
    }
  ];

  return (
    <>
      <div className={style.container}>
        <NavBar />
        <div className={style.containerHead}>
          <Head />

          <div className={style.containerConteudo}>

            <div className={style.containerBarraPesquisa}>
              <p><b>Pesquisar Doações Realizadas:</b></p>
              <div className={style.inputBarraPesquisa}>
                <input type="text"
                  placeholder='Pesquisar doação'
                  value={query}
                  onChange={handleInputChange}
                />
                <button onClick={handleSearch}><img src={iconLupa} alt="icone de pesquisar" style={{ width: "20px", height: "20px" }} /></button>
              </div>
            </div>

            <div className={style.containerListaDoacoes}>

              <div className={style.filtroMaisAdicionaDoacao}>
                <div className={style.containerFiltros}>
                  <p>Filtrar por: </p>
                  <button>filtros</button>
                  <p>Filtros:</p>
                  <button>00h00</button>
                  <button>DD mm YYYY</button>


                </div>
                <div className={style.containerAdicionarDoacao}>
                  <button>+ Adicionar Doação</button>
                </div>
              </div>
              <div className={style.line}>‎‎‎‎‎‎‎‎ㅤ</div>

              <div className={style.containerDoacao}>
                {vetorMockup && vetorMockup.map((data, index) => (
                  <div key={index} >
                    <ListaDoacoes data={data} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default PesquisaDoacao;

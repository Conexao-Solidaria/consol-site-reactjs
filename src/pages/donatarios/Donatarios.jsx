import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import NavBar from "../../components/navBar/NavBar";
import Head from "../../components/head/Head";
import style from "./Donatarios.module.css";
import DonatarioDetalhes from "../../components/detalhesLista/donatarioDetalhes/DonatarioDetalhes"
import BotaoPadrao from "../../components/botoes/BotaoPadrao";
import api from "../../api";

function Donatarios() {
	const [query, setQuery] = useState('');
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [sortedData, setSortedData] = useState(null);
	

	const handleInputChange = (event) => {
		setQuery(event.target.value);
	};

	const sortData = () => {
		if (data && data.data) {
			const sortedList = [...data.data].sort((a, b) =>
				a.nome.localeCompare(b.nome)
			);
			setSortedData(sortedList);
		}
	};

	useEffect(() => {
		if (sortedData && sortedData.length > 0) {
			const elementoLista = document.getElementById("listagem");
			elementoLista.innerHTML = ''; // Clear previous content

			for (let i = 0; i < sortedData.length; i++) {
				const div = document.createElement('div');
				ReactDOM.render(<DonatarioDetalhes nome={sortedData[i].nome} telefone1={sortedData[i].telefone1} />, div);
				elementoLista.appendChild(div);
			}
		} else if (data && data.data && data.data.length > 0) {
			const elementoLista = document.getElementById("listagem");
			elementoLista.innerHTML = ''; // Clear previous content

			for (let i = 0; i < data.data.length; i++) {
				const div = document.createElement('div');
				ReactDOM.render(<DonatarioDetalhes nome={data.data[i].nome} telefone1={data.data[i].telefone1} />, div);
				elementoLista.appendChild(div);
			}
		}
	}, [data, sortedData]);



	// Função para renderizar donatários manualmente após os dados estarem disponíveis
	useEffect(() => {
		if (data && data.data && data.data.length > 0) {
			const elementoLista = document.getElementById("listagem");
			const listaDonatarios = data.data;

			// Limpa o conteúdo anterior da div, se houver
			elementoLista.innerHTML = '';

			// Renderizando manualmente os elementos com um loop for
			for (let i = 0; i < listaDonatarios.length; i++) {
				const div = document.createElement('div'); // Cria uma div para cada donatário
				ReactDOM.render(<DonatarioDetalhes nome={listaDonatarios[i].nome} telefone1={listaDonatarios[i].telefone1} />, div);
				elementoLista.appendChild(div); // Adiciona a div à lista
			}
		}
	}, [data]);

	const yourConfig = {
		headers: {
			Authorization: "Bearer " + "eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJqb2FvQGV4YW1wbGUuY29tIiwiaWF0IjoxNzI3OTA0NjA3LCJleHAiOjE3MzE1MDQ2MDd9.Gbaz5Xy3PFzqjKNw4e_d0kWyubXu88uJGUTh-_eOdqKY62lWSnPjK1iiwjhZ1ba-"
		}
	}

	useEffect(() => {
		// Fetch data from the API
		async function fetchData() {
			try {
				const response = await api.get("/titulares", yourConfig);
				setData(response);
			}
			catch (error) {
				console.error('Error fetching data:', error);
			}
			finally {
				setLoading(false); // Set loading to false when the data is ready
			}
		}

		fetchData(); // Call the function to fetch data when the component mounts
	}, []);

	if (loading) {
		// Show a loading indicator or placeholder until the data is loaded
		return <div>Loading...</div>;
	}


	return <>
		<div className={style.container}>
			<div className={style.navbarContainer}>
				<NavBar />
			</div>
			<div className={style.containerGeral}>
				<div className={style.containerHead}>
					<Head />
				</div>
				<div className={style.containerConteudo}>
					<div className={style.containerPesquisa}>
						<h2>Pesquisar Donatário:</h2>
						<input type="text" placeholder="Pesquisar Donátario" />
					</div>
					<div className={style.containerDonatarios}>
						<div className={style.containerFiltro}>
							<div className={style.filtros}>
								<p>Filtar por:</p>
								<span> Nome </span>
								<p>Filtros:</p>
								<BotaoPadrao texto="Nome ordem alfabética" onClick={() => {
									sortData()
								}} />
							</div>
							<div className={style.botoes}>
								<BotaoPadrao texto="+ Cadastrar Família" to="/cadastrar-familia" />
								<BotaoPadrao texto="+ Cadastrar Donatário" to="/cadastrar-donatario" />
							</div>
						</div>
						<div className={style.containerLista} id="listagem">
						</div>
					</div>
				</div>
			</div>
		</div>
	</>;
}

export default Donatarios;

import React, { useState, useEffect } from 'react';
import NavBar from "../../components/navBar/NavBar";
import Head from "../../components/head/Head";
import style from "./PesquisaDoacao.module.css";
import ListaDoacoes from "../../components/doacoes/ListaDoacoes";
import iconLupa from "../../utils/assets/icon_lupa.png";
import { useNavigate } from "react-router-dom";
import api from "../../api";



const PesquisaDoacao = ({ onSearch }) => {
	const navigate = useNavigate();

	const cadastroDoacao = () => {
		navigate("/cadastro-doacao")
	}

	const [query, setQuery] = useState('');
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);

	const handleInputChange = (event) => {
		setQuery(event.target.value);
	};

	const handleSearch = () => {
		onSearch(query);
	};

	const yourConfig = {
		headers: {
			Authorization: "Bearer " + sessionStorage.getItem("token")
		}
	}


	useEffect(() => {
		// Fetch data from the API
		async function fetchData() {
			try {
				const response = await api.get("/doacoes", yourConfig);
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
		console.log("teste")
		// Show a loading indicator or placeholder until the data is loaded
		return <div>Loading...</div>;
	}

	return (
		<>
			<div className={style.container}>
				<NavBar />
				<div className={style.containerHead}>
					<Head />

					<div className={style.containerConteudo}>

						<div className={style.containerBarraPesquisa}>
							<p><b>Pesquisar por nome donatario:</b></p>
							<div className={style.inputBarraPesquisa}>
								<input type="text" />
								<button value={"PESQUISAR"}>PESQUISAR</button>
							</div>
						</div>

						<div className={style.containerListaDoacoes}>

							<div className={style.filtroMaisAdicionaDoacao}>
								<div className={style.containerFiltros}>
									<p>Filtros data:</p>
									<input type="date" id="inputData" />
								</div>
								<div className={style.containerAdicionarDoacao}>
									<button onClick={cadastroDoacao}>+ Adicionar Doação</button>
								</div>
							</div>
							<div className={style.line}>‎‎‎‎‎‎‎‎ㅤ</div>
							{
								data.data && data.data.map((data, index) => (
									<div key={index} >
										<ListaDoacoes data={data} />
									</div>
								))
							}
							<div className={style.containerDoacao}>
							</div>
						</div>
					</div>
				</div>
			</div >
		</>
	)
}

export default PesquisaDoacao;

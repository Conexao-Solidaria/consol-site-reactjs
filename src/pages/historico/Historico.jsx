import React, { useState, useEffect } from 'react';
import NavBar from "../../components/navBar/NavBar";
import Head from "../../components/head/Head";
import style from "./Historico.module.css";
import BarChart from '../../components/graficos/GraficoFrequenciaDoacoes';
import ListaDoacoes from '../../components/doacoes/ListaDoacoes';
import api from "../../api";
import { useNavigate } from 'react-router-dom';

const Historico = () => {
	const navigate = useNavigate();
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [newDonation, setNewDonation] = useState(0);
	const [startDate, setStartDate] = useState('');
	const [endDate, setEndDate] = useState('');

	const yourConfig = {
		headers: {
			Authorization: "Bearer " + sessionStorage.getItem("token"),
			"Content-Type": "application/json",
		},
	};

	const fetchData = async (url) => {
		try {
			let contador = 0;
			const response = await api.get(url, yourConfig);
			setData(response);

			response.data.forEach(responseU => {
				let date = new Date(responseU.dataDoacao);
				let dateNow = new Date();
				if (
					(dateNow.getMonth() - 1 === date.getMonth() && dateNow.getFullYear() === date.getFullYear()) ||
					(dateNow.getMonth() === date.getMonth() && dateNow.getFullYear() === date.getFullYear())
				) {
					contador += 1;
				}
			});
			setNewDonation(contador);
		}
		catch (error) {
			console.error('Error fetching data:', error);
		}
		finally {
			setLoading(false);
		}
	};

	const handleDateChange = () => {
		if (startDate && endDate) {
			fetchData(`/doacoes/filtro/por-periodo?dataInicio=${startDate}&dataFim=${endDate}`);
		}
	};

	useEffect(() => {
		if (sessionStorage.getItem("token") == null && sessionStorage.getItem("user") == undefined) {
			navigate("/login");
		}
		fetchData("/doacoes");
	}, []);

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<>
			<div className={style.container}>
				<NavBar />
				<div className={style.containerHead}>
					<Head />
					<div className={style.containerConteudo}>
						<div className={style.containerGeral}>
						<div className={style.containerFiltro}>
								<input 
									type="date" 
									value={startDate} 
									onChange={(e) => setStartDate(e.target.value)} 
								/>
								<input 
									type="date" 
									value={endDate} 
									onChange={(e) => setEndDate(e.target.value)} 
								/>
								<button onClick={handleDateChange}>Filtro por período</button>
							</div>
							<div className={style.containerCard}>
								<BarChart donations={data.data} />
							</div>
						</div>

						<div className={style.containerListas}>
							<div className={style.containerKpiHistorico}>
								<div className={style.kpiHistorico}>
									<p>{newDonation} Novas Doações</p>
								</div>
							</div>

							{data.data && data.data.map((data, index) => (
								<div key={index}>
									<ListaDoacoes data={data} />
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Historico;

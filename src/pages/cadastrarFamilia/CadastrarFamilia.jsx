import React from 'react';
import NavBar from "../../components/navBar/NavBar";
import Head from "../../components/head/Head";
import style from "./CadastrarFamilia.module.css";
import image from "../../utils/assets/familia1.png";
import api from '../../api';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import InputPadrao from "../../components/inputs/InputPadrao";
import ComboBox from "../../components/comboBox/ComboBox";
import { toast } from 'react-toastify';


const CadastroFamilia = () => {
	const [nome, setNome] = useState("");
	const [rg, setRg] = useState("");
	const [cpf, setCpf] = useState("");
	const [dataNasc, setDataNasc] = useState("");
	const [celular, setCelular] = useState("");
	const [telefone, setTelefone] = useState("");
	const [ocupacao, setOcupacao] = useState("");

	const [renda, setRenda] = useState("");
	const [numeroCasa, setNumeroCasa] = useState("");
	const [cep, setCep] = useState("");
	const [nomeFamilia, setNomeFamilia] = useState("");

	const [estadoCivil, setEstadoCivil] = useState("");
	const optEstadoCivil = ["Solteiro(a)", "Casado(a)", "Divorciado(a)", "Viúvo(a)", "Separado(a)"];

	const [escolaridade, setEscolaridade] = useState("");
	const optEscolaridade = [
		"Ensino Fundamental Incompleto",
		"Ensino Fundamental Completo",
		"Ensino Médio Incompleto",
		"Ensino Médio Completo",
		"Ensino Técnico",
		"Ensino Superior Incompleto",
		"Ensino Superior Completo",
		"Pós-graduação",
		"Mestrado",
		"Doutorado"
	];

	const [trabalhando, isTrabalhando] = useState("");
	const optTrabalhando = ["Selecione", "Sim", "Não"];

	const [familiaOptions, setFamiliaOptions] = useState([]);

	const navigate = useNavigate();

	useEffect(() => {
		if (sessionStorage.getItem("token") == null && sessionStorage.getItem("user") == undefined) {
			navigate("/login")
		}
	})

	async function cadastrarFamilia() {
		if (
			nomeFamilia !== "" &&
			cep !== "" &&
			numeroCasa !== "" &&
			parseFloat(renda) > 0
		) {
			const yourConfig = {
				headers: {
					'Authorization': "Bearer " + sessionStorage.getItem("token"),
					'Content-Type': 'application/json'
				}
			}

			let today = new Date();
			let dd = String(today.getDate()).padStart(2, '0');
			let mm = String(today.getMonth() + 1).padStart(2, '0');
			let yyyy = today.getFullYear();

			today = yyyy + '-' + mm + '-' + dd;

			const bodyDoacao = {
				"nome": nomeFamilia,
				"cep": cep,
				"numeroCasa": numeroCasa,
				"renda": renda,
				"dataCadastro": today
			}

			try {
				var resposta = await api.post(`familias`, bodyDoacao, yourConfig);
				cadastrarDonatario(resposta.data)
			}

			catch (error) {
				console.error('Error updating flag:', error);
				alert('Valores inválidos')
			}
		}
		else {
			alert("Preencha todos os campos");
		}
	}

	async function cadastrarDonatario(familia) {

		let telefone1Real = celular;
		telefone1Real = telefone1Real.replace(/\D/g, '');
		telefone1Real = telefone1Real.replace(" ", '');
		let telefone2Real = telefone;
		telefone2Real = telefone2Real.replace(/\D/g, '');
		telefone2Real = telefone2Real.replace(" ", "");
		let rgReal = rg.replace(/\D/g, '');
		rgReal = rgReal.replace(" ", '');
		let cpfReal = cpf.replace(/\D/g, '');
		cpfReal = cpfReal.replace(" ", '');
		let dateNascReal = dataNasc.split('/').reverse().join('-');

		const donatarioData = {
			nome,
			rg: rgReal,
			cpf: cpfReal,
			dataNascimento: dateNascReal,
			telefone1: telefone1Real,
			telefone2: telefone2Real,
			ocupacao,
			estadoCivil,
			escolaridade,
			trabalhando: trabalhando === "Sim" ? 1 : 0,
			idFamilia: familia.id
		};

		if (
			donatarioData.cpf &&
			donatarioData.nome &&
			donatarioData.dataNascimento &&
			donatarioData.telefone1 &&
			donatarioData.telefone2 &&
			donatarioData.ocupacao &&
			donatarioData.estadoCivil &&
			donatarioData.escolaridade &&
			donatarioData.trabalhando !== undefined
		) {
			const yourConfig = {
				headers: {
					'Authorization': "Bearer " + sessionStorage.getItem("token"),
					'Content-Type': 'application/json'
				}
			};

			try {
				await api.post(`/titulares`, donatarioData, yourConfig);
				toast.done("Cadastro de família e primeiro donatário feito")
				sessionStorage.setItem("idFamilia", familia.id)
				navigate("/cadastrar-donatario")
			} catch (error) {
				console.error('Error submitting data:', error);
			}
		} else {
			alert("Preencha todos os campos");
		}
	}

	return (
		<>
			<div className={style.container}>
				<NavBar />
				<div className={style.containerHead}>
					<Head />

					<div className={style.containerConteudo}>
						<div className={style.containerCadastro}>
							<div className={style.containerTituloCadastro}>
								<div className={style.containerTitulo}>
									<p>Cadastrar Familia</p>
								</div>
							</div>
							<div className={style.containerInfosCadastro}>
								<div className={style.containerFormularioCadastro}>
									<div className={style.formLine}>
										<InputPadrao
											className={style.nomeCompleto}
											label="Nome da família:"
											placeholder="Nome"
											onlyLetters={true}
											value={nomeFamilia}
											onChange={(value) => setNomeFamilia(value)}
											id={"nomeFamilia"}
										/>
										<InputPadrao
											className={style.nomeCompleto}
											label="Renda:"
											placeholder="R$000,000,00"
											onlyLetters={false}
											value={renda}
											onChange={(value) => setRenda(value)}
											id={"renda"}
										/>
									</div>
									<div className={style.formLine}>
										<InputPadrao
											className={style.nomeCompleto}
											label="Número da casa:"
											placeholder="Número"
											onlyLetters={false}
											value={numeroCasa}
											onChange={(value) => setNumeroCasa(value)}
											id={"numeroCasa"}
										/>
										<InputPadrao
											className={style.nomeCompleto}
											label="CEP:"
											placeholder="cep"
											onlyLetters={false}
											value={cep}
											onChange={(value) => setCep(value)}
											id={"cep"}
										/>
									</div>
									<h3 className={style.tituloCadastro}>Cadastrar Titular</h3>
									<div className={style.formLine}>
										<InputPadrao
											className={style.nomeCompleto}
											label="Nome Completo:"
											placeholder="Nome Completo"
											onlyLetters={true}
											value={nome}
											onChange={(value) => setNome(value)}
											id={"nome"}
										/>
										<InputPadrao
											className={style.dataNascimento}
											label="Data de Nascimento:"
											placeholder="DD/MM/YYYY"
											mask="99/99/9999"
											value={dataNasc}
											onChange={(value) => setDataNasc(value)}
											id={"dataNascimento"}
										/>
									</div>
									<div className={style.formLine}>
										<InputPadrao
											className={style.rg}
											label="RG:"
											placeholder="__.___.___-_"
											mask="99.999.999-9"
											value={rg}
											onChange={(value) => setRg(value)}
											id={"RG"}
										/>
										<InputPadrao
											className={style.cpf}
											label="CPF:"
											placeholder="___.___.___-__"
											mask="999.999.999-99"
											value={cpf}
											onChange={(value) => setCpf(value)}
											id={"cpf"}
										/>
									</div>
									<div className={style.formLine}>
										<ComboBox
											className={style.estadoCivil}
											label="Estado Civil:"
											defaultOption="Selecione"
											options={optEstadoCivil}
											value={estadoCivil}
											onChange={(e) => setEstadoCivil(e.target.value)}
											id={"estadoCivil"}
										/>
										<ComboBox
											className={style.escolaridade}
											label="Escolaridade:"
											defaultOption="Selecione"
											options={optEscolaridade}
											value={escolaridade}
											onChange={(e) => setEscolaridade(e.target.value)}
											id={"escolaridade"}
										/>
										<ComboBox
											className={style.trabalhando}
											label="Trabalhando?"
											options={optTrabalhando}
											value={trabalhando}
											onChange={(e) => isTrabalhando(e.target.value)}
											id={"trabalhando"}
										/>
									</div>
									<div className={style.formLine}>
									<InputPadrao
											className={style.ocupacao}
											label="Ocupação:"
											placeholder="Ocupação"
											value={ocupacao}
											onChange={(value) => setOcupacao(value)}
											id={"ocupacao"}
										/>
										<InputPadrao
											className={style.celular}
											label="Celular:"
											placeholder="(__) _____-____"
											mask="(99) 99999-99"
											value={celular}
											onChange={(value) => setCelular(value)}
											id={"celular"}
										/>
										<InputPadrao
											className={style.telefone}
											label="Telefone:"
											placeholder="(__) _____-____"
											mask="(99) 99999-99"
											value={telefone}
											onChange={(value) => setTelefone(value)}
											id={"telefone"}
										/>
									</div>
									<div className={style.ContainerBotao}>
										<button className={style.botao} onClick={() => {
											cadastrarFamilia();
										}}>
											Adicionar
										</button>
									</div>
								</div>
								<div className={style.containerImagemCadastro}>
									<div className={style.containerImage}>
										{<img src={image} alt="Família se abraçando'" />}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>

	);
};
export default CadastroFamilia;

import modalStyle from "../modal/Modal.module.css";
import style from "./DoacaoCompleta.module.css";
import iconDoacoes from "../../utils/assets/icon_doacoes_azul.png";
import iconPerfil from "../../utils/assets/icon_perfil_usuario.png";
import { toast } from "react-toastify";
import api from "../../api";
import { React, useEffect, handleClose } from "react";
import { useNavigate } from "react-router-dom";

const DoacaoCompleta = ({ data, isVisible, onClose }) => {
	const navigate = useNavigate();
	var mostrarEdit = false

	async function handleDelete(id) {
		const yourConfig = {
			headers: {
				'Authorization': "Bearer " + sessionStorage.getItem("token"),
				'Content-Type': "application/json"
			}
		}

		try {
			const response = await api.delete(`doacoes/${id}`, yourConfig);
			toast.success("Doacao apagada com sucesso!");
			onClose();
			window.location.reload();
		}
		
		catch (error) {
			console.error('Error deletando doacao:', error);
		}
	}

	async function handleEdit(id) {
		if(mostrarEdit == false){
			document.getElementById("descricaoDoacao").style.display = "none";
			document.getElementById("descricaoDoacaoEdit").style.display = "block";
			mostrarEdit = true;
			return;
		}

		const yourConfig = {
			headers: {
				'Authorization': "Bearer " + sessionStorage.getItem("token"),
				'Content-Type': "application/json"
			}
		}

		const requestBody = {
			'descricao': document.getElementById("descricaoDoacaoEdit").value
		}

		try {
			const response = await api.put(`doacoes/atualizar-descricao/${id}`, requestBody, yourConfig);

			toast.success("Descricao atualizada com sucesso!");
			document.getElementById("descricaoDoacao").innerHTML = response.data.descricao;


			document.getElementById("descricaoDoacao").style.display = "block";
			document.getElementById("descricaoDoacaoEdit").style.display = "none";


			mostrarEdit = false;
		}
		
		catch (error) {
			console.error('Error deletando doacao:', error);
		}
	}

	// Fetch data from the API
	async function handleFlag(id) {
		const yourConfig = {
			headers: {
				'Authorization': "Bearer " + sessionStorage.getItem("token"),
				'Content-Type': "application/json"
			}
		}

		const requestBody = {
			'flagDoacaoEntregue': 1
		}

		try {
			console.log(id)
			const response = await api.put(`doacoes/atualizar-flag/${id}`, requestBody, yourConfig);
		}

		catch (error) {
			console.error('Error updating flag:', error);
		}
	}


	if (!isVisible) return null;
	return (
		<>
			<div className={modalStyle.modal}
				style={{ display: "flex", width: "90vw" }}>
				<div className={modalStyle.modalHeader} onClick={onClose}>
					<b>X</b>
				</div>
				<div className={modalStyle.line}>
					<div className={modalStyle.background}>
						<div className={style.linha}>
							<div className={modalStyle.content}>
								<div className={modalStyle.titulo}>
									<h1>Mais informacoes da doacao</h1>
								</div>
								<div className={style.informacaoDoacaoCompleta}>
									<div className={style.modalImagem}
										style={{ maxWidth: '5vw' }}>
										<img
											src={iconDoacoes}
											style={{
												width: '100%',
												height: '100%',
											}}
											alt='Icone de Doações'></img>
									</div>
									<div className={style.coluna}>
										<p>Horario:
											<br /><b>{data.dataDoacao.split('T')[1]}</b></p>
										<p>Data:
											<br />{data.dataDoacao.split('T')[0]}</p>
									</div>
									<div className={style.coluna}>
										<p>Status doação:
											<br /><b>{data.flagDoacaoEntregue}</b>
										</p>
									</div>
									<div className={style.coluna}>
										<br />
										<button onClick={() => handleDelete(data.id)}>
											Apagar doação	
										</button>
									</div>
									<div className={style.coluna}>
										<br /><button style={{ backgroundColor: '#6C9BD9' }} onClick={ () => {
											console.log(data.id)
											handleFlag(data.id)
											}}>Mudar status</button>
									</div>
								</div>
							</div>
						</div>
						<div className={style.linha}>
							<div className={style.coluna}>
								<div className={modalStyle.content}>
									<div className={modalStyle.titulo}>
										<h1>Mais informacoes da doacao</h1>
									</div>
									<div className={style.donatarioBeneficiado}>
										<div className={style.colunaImagem}>
											<div className={style.modalImagem}
												style={{ width: '10vw' }}>
												<img
													src={iconPerfil}
													style={{
														width: '100%',
														height: '100%',
													}}
													alt='Icone de Doações'></img>
											</div>
										</div>
										<div className={style.coluna}>
											<p>Nome:
												<br /><b>{data.donatario.nome}</b></p>
										</div>
									</div>
								</div>
								<div className={modalStyle.content}>
									<div className={modalStyle.titulo}>
										<h1>Contatos do Donatario</h1>
									</div>
									<div className={style.contatoDonatario}>
										<div className={modalStyle.coluna}>
											<p>Telefone:
												<br /><b>{data.donatario.telefone1}</b>
											</p>
											<p>Celular:
												<br /><b>{data.donatario.telefone2}</b>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className={modalStyle.content}>
								<div className={modalStyle.titulo}>
									<h1>Descricao da Doacao</h1>
								</div>
								<div className={style.descricaoDoacao}>
									<br />
										<p id="descricaoDoacao">{data.descricao}</p>
										
										<br></br>
										<textarea id="descricaoDoacaoEdit" style={{display: "none"}}>

										</textarea>
									</div>
								<div className={style.divBotao} onClick={() => handleEdit(data.id)}>
									<button>Editar Descricao</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div >
		</>
	);
}

export default DoacaoCompleta;

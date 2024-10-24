import modalStyle from "../modal/Modal.module.css";
import style from "./DoacaoCompleta.module.css";
import iconDoacoes from "../../utils/assets/icon_doacoes_azul.png";
import iconPerfil from "../../utils/assets/icon_perfil_usuario.png";
import { toast } from "react-toastify";
import api from "../../api";
import { React, useEffect, handleClose } from "react";

const DoacaoCompleta = ({ data, isVisible, onClose }) => {
	const handleDelete = () => {
		api.delete(data.id)
			.then(() => {
				handleClose();
			})

		toast.success("Doacao apagada com sucesso!");
		onClose();
	}

	const handleEdit = () => {
		api.put()
		toast.success("Doacao editada com sucesso!");
		onClose();
	}

	// Fetch data from the API
	async function handleFlag(id) {
		const yourConfig = {
			headers: {
				'Authorization': "Bearer " + "eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJqb2FvQGV4YW1wbGUuY29tIiwiaWF0IjoxNzI3OTk1MDIwLCJleHAiOjE3MzE1OTUwMjB9.gkDsEDCQ4gE7Ls1XDHCFpoqKlGQsofe0pOcqVsMwYmFexkDzgLYY-NuaS4pDS_Zn",
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
										<br /><button>Apagar doação</button>
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
									<br />{data.descricao}</div>
								<div className={style.divBotao}>
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

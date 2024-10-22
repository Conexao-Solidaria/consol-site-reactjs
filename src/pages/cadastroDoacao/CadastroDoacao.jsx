import React from 'react';
import NavBar from "../../components/navBar/NavBar";
import Head from "../../components/head/Head";
import style from "./CadastroDoacao.module.css";
import image from "../../utils/assets/foto-cadastro-doacao.png";
import api from "../../api";


const CadastroDoacao = () => {
	var infoInput = null,
		dropdown = null;


	function aparecerDropdown(){
		infoInput = document.getElementById('dropdown');
		infoInput.style.display = "block";
	}

	async function executarBusca(){
		infoInput = document.getElementById('inputNome');

		if(infoInput.value.length > 0){
			const yourConfig = {
				headers: {
					'Authorization': "Bearer " + sessionStorage.getItem("token"),
				}
			}

			try {
				const response = await api.get(`titulares/filtro/por-nome?nome=${infoInput.value}`, yourConfig);
				dropdown = document.getElementById('dropdown');
				dropdown.innerHTML = "";
	
				for (var i = 0 ; i <= response.data.length - 1 ; i++){
					var opt = document.createElement('option');
	
					opt.value = response.data[i].id;
					opt.innerHTML = response.data[i].nome;
	
					dropdown.appendChild(opt);
				}
			}
			
			catch (error) {
				console.error('Error updating flag:', error);
			}
		}
	}

	async function cadastrarDoacao() {
		const elementoDropDown = document.getElementById('dropdown');
		const areaTexto = document.getElementById('areaDescricao');

		if(elementoDropDown.value != null && areaTexto.value.length > 0){
			const yourConfig = {
				headers: {
					'Authorization': "Bearer " + "eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJqb2FvQGV4YW1wbGUuY29tIiwiaWF0IjoxNzI4NDA5MzQ0LCJleHAiOjE3MzIwMDkzNDR9.Hd-dTzDW4s7hoMHz584ZIPm2pCa3F0snHHQ-O7-Px1CBEwZcHnlIR-ceTLkx6zaJ",
					'Content-Type': 'application/json'
				}
			}
			const bodyDoacao = {
				"descricao": areaTexto.value,
				"dataDoacao": "2024-07-07 14:25:04"
			}

			try {
				await api.post(`doacoes/titular/${elementoDropDown.value}/instituicao/1`, bodyDoacao, yourConfig);
				alert("DOAÇÃO CRIADA")
			}
			
			catch (error) {
				console.error('Error updating flag:', error);
			}
		}
		else{
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

                        <div className={style.containerGeral}>
                            <div className={style.containerCard}>
                                <h3>Pesquisar doações realizadas</h3>
                                <input className={style.inputDoacao} type="text" placeholder='Pesquisar doação' />
                            </div>
                        </div>

                        <div className={style.containerCadastro}>
                            <div className={style.containerTituloCadastro}>
                                <div className={style.containerTitulo}>
                                    <p>Cadastrar Doação</p>
                                </div>
                            </div>

                            {/* <div className={style.line}>‎‎‎‎‎‎‎‎ㅤ</div> */}

                            <div className={style.containerInfosCadastro}>
                                <div className={style.containerFormularioCadastro}>
                                    <div className={style.campo2Formulario}>
                                        <span>Quem está recebendo a doação?</span>
                                        <input className={style.inputLinha2} id="inputNome" placeholder='Pesquisar Titular' type="text" />
										<select id='dropdown' style={{
											display: "none"
										}}>
											
										</select>
										<br />
										<button className={style.botao} onClick={() => {
											aparecerDropdown();
											executarBusca();
											}}>Pesquisar</button>
									</div>
                                    <div className={style.campo3Formulario}>
                                        <span>Descrição:</span>
                                        <textarea className={style.inputLinha3} placeholder='Descrição' type="text" id="areaDescricao" />
                                    </div>
                                    <div className={style.ContainerBotao}>
										<button onClick={() => {
											cadastrarDoacao();
										}}  className={style.botao}>Adicionar</button>
									</div>
                                </div>
                                <div className={style.containerImagemCadastro}>
                                    <div className={style.containerImage}>
                                        <img src={image} alt="Itens de uma cesta básica'" />
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
export default CadastroDoacao;
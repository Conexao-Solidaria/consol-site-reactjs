import React from 'react';
import NavBar from "../../components/navBar/NavBar";
import Head from "../../components/head/Head";
import style from "./CadastrarFamilia.module.css";
import image from "../../utils/assets/familia1.png";
import api from '../../api';


const CadastroFamilia = () => {

    async function cadastrarFamilia() {
		const nome = document.getElementById('nome');
        const cep = document.getElementById('cep');
        const numeroCasa = document.getElementById('numeroCasa');
        const renda = document.getElementById('renda');

		if(
            nome.value!== "" &&
            cep.value !== "" &&
            numeroCasa.value !== "" &&
            renda.value > 0
        ){
			const yourConfig = {
				headers: {
					'Authorization': "Bearer " + "eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJqb2FvQGV4YW1wbGUuY29tIiwiaWF0IjoxNzI4NDA5MzQ0LCJleHAiOjE3MzIwMDkzNDR9.Hd-dTzDW4s7hoMHz584ZIPm2pCa3F0snHHQ-O7-Px1CBEwZcHnlIR-ceTLkx6zaJ",
					'Content-Type': 'application/json'
				}
			}

			const bodyDoacao = {
				"nome": nome.value,
                "cep": cep.value,
                "numeroCasa": numeroCasa.value,
                "renda": renda.value
			}

			try {
				await api.post(`familias`, bodyDoacao, yourConfig);
				alert("DOAÇÃO CRIADA")
			}
			
			catch (error) {
				console.error('Error updating flag:', error);
                alert('Valores inválidos')
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
                        <div className={style.containerCadastro}>
                            <div className={style.containerTituloCadastro}>
                                <div className={style.containerTitulo}>
                                    <p>Cadastrar Familia</p>
                                </div>
                            </div>
                            <div className={style.containerInfosCadastro}>
                                <div className={style.containerFormularioCadastro}>
                                    <div className={style.campo3Formulario}>
                                        <span>Nome:</span>
                                        <input className={style.inputLinha3} placeholder='Nome' type="text" id="nome" />
                                    </div>

                                    <div className={style.campo2Formulario}>
                                        <span>CEP:</span>
                                        <input className={style.inputLinha2} placeholder='CEP' type="text" id="cep" />
                                    </div>

                                    <div className={style.campo1Formulario}>
                                        <div>
                                            <span>Número da casa:</span>
                                            <input className={style.inputLinha1} placeholder='Número' type="text" id="numeroCasa" />
                                        </div>
                                        <div>
                                            <span>Renda:</span>
                                            <input className={style.inputLinha1} placeholder='R$000,000,00' type="text" id="renda" />
                                        </div>
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
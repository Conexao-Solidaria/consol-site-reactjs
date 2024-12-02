import React, { useState, useEffect } from 'react';
import NavBar from "../../components/navBar/NavBar";
import Head from "../../components/head/Head";
import style from "./EditarFamilia.module.css";
import { useNavigate } from 'react-router-dom';
import image from "../../utils/assets/familia1.png";
import api from '../../api';
import InputPadrao from '../../components/inputs/InputPadrao';
import { toast } from 'react-toastify';

const EditarFamilia = () => {
	const navigate = useNavigate();

	useEffect(() => {
        if (sessionStorage.getItem("token") == null && sessionStorage.getItem("user") == undefined) {
            navigate("/login");
        } else {
            buscarDadoFamilia();
        }
    }, []);

    const [nome, setNome] = useState('');
    const [cep, setCep] = useState('');
    const [numeroCasa, setNumeroCasa] = useState('');
    const [renda, setRenda] = useState('');

    const buscarDadoFamilia = async () => {
        const yourConfig = {
            headers: {
                Authorization: "Bearer " + sessionStorage.getItem("token"),
                "Content-Type": "application/json",
            },
        };

        try {
            const response = await api.get(
                `/familias/${sessionStorage.getItem("idFamiliaEdicao")}`,
                yourConfig,
            );
            let dados = response.data;
            
            setNome(dados.nome)
            setCep(dados.cep)
            setNumeroCasa(dados.numeroCasa)
            setRenda(dados.renda)
        } catch (error) {
            console.log("Erro ao buscar familia: ", error);
        }
    };

    const validarCampos = () => {
        if (!nome || !cep || !numeroCasa || !renda) {
            alert("Todos os campos são obrigatórios.");
            return false;
        }
        else if (!/^[0-9]{5}-?[0-9]{3}$/.test(cep)) {
            alert("CEP inválido. Use o formato 12345-678.");
            return false;
        }
        else if (parseFloat(renda) <= 0) {
            alert("A renda deve ser um valor maior que zero.");
            return false;
        }
        return true;
    };

    const editarFamilia = async () => {
        if (!validarCampos()) return;

        const yourConfig = {
            headers: {
                'Authorization': "Bearer " + sessionStorage.getItem("token"),
                'Content-Type': 'application/json'
            }
        };

        const today = new Date().toISOString().split('T')[0];

        const bodyDoacao = {
            nome,
            cep,
            numeroCasa,
            renda
        };

        try {
            await api.put(`familias/${sessionStorage.getItem("idFamiliaEdicao")}`, bodyDoacao, yourConfig);
            toast.success("DADOS DE FAMILIA ATUALIZADOS")
        }
        catch (error) {
            console.error('Erro ao salvar os dados:', error.response?.data || error.message);
            toast.error(`Erro ao atualizar a família: ${error.response?.data?.message || 'Valores inválidos'}`);
        }
    };
    
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
                                    <p>Editar Família</p>
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
											value={nome}
											onChange={(value) => setNome(value)}
											id={"nome"}
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

                                    <div className={style.ContainerBotao}>
                                        <button className={style.botao} onClick={editarFamilia}>
                                            Editar
                                        </button>
                                    </div>
                                </div>
                                <div className={style.containerImagemCadastro}>
                                    <div className={style.containerImage}>
                                        <img src={image} alt="Família se abraçando" />
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

export default EditarFamilia;


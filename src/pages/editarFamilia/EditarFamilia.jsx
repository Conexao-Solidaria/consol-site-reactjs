import React, { useState, useEffect } from 'react';
import NavBar from "../../components/navBar/NavBar";
import Head from "../../components/head/Head";
import style from "./EditarFamilia.module.css";
import { useNavigate } from 'react-router-dom';
import image from "../../utils/assets/familia1.png";
import api from '../../api';

const EditarFamilia = () => {
	const navigate = useNavigate();

	useEffect(() => {
		if (sessionStorage.getItem("token") == null && sessionStorage.getItem("user") == undefined) {
			navigate("/login")
		}
	})

    const [nome, setNome] = useState('');
    const [cep, setCep] = useState('');
    const [numeroCasa, setNumeroCasa] = useState('');
    const [renda, setRenda] = useState('');

    useEffect(() => {
        if (sessionStorage.getItem("token") == null && sessionStorage.getItem("user") === undefined) {
            navigate("/");
        }
    }, [navigate]);

    const validarCampos = () => {
        if (!nome || !cep || !numeroCasa || !renda) {
            alert("Todos os campos são obrigatórios.");
            return false;
        }
        if (!/^[0-9]{5}-?[0-9]{3}$/.test(cep)) {
            alert("CEP inválido. Use o formato 12345-678.");
            return false;
        }
        if (parseFloat(renda) <= 0) {
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

        // Gerando a data atual no formato YYYY-MM-DD
        const today = new Date().toISOString().split('T')[0];

        const bodyDoacao = {
            nome,
            cep,
            numeroCasa,
            renda,
            dataCadastro: today
        };

        try {
            await api.post(`familias`, bodyDoacao, yourConfig);
            alert("Família atualizada com sucesso!");
            navigate("/");
        } catch (error) {
            console.error('Erro ao salvar os dados:', error.response?.data || error.message);
            alert(`Erro ao atualizar a família: ${error.response?.data?.message || 'Valores inválidos'}`);
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
                                    <div className={style.campo3Formulario}>
                                        <span>Nome:</span>
                                        <input
                                            className={style.inputLinha3}
                                            placeholder='Nome'
                                            type="text"
                                            value={nome}
                                            onChange={(e) => setNome(e.target.value)}
                                        />
                                    </div>

                                    <div className={style.campo2Formulario}>
                                        <span>CEP:</span>
                                        <input
                                            className={style.inputLinha2}
                                            placeholder='CEP'
                                            type="text"
                                            value={cep}
                                            onChange={(e) => setCep(e.target.value)}
                                        />
                                    </div>

                                    <div className={style.campo1Formulario}>
                                        <div>
                                            <span>Número da casa:</span>
                                            <input
                                                className={style.inputLinha1}
                                                placeholder='Número'
                                                type="text"
                                                value={numeroCasa}
                                                onChange={(e) => setNumeroCasa(e.target.value)}
                                            />
                                        </div>
                                        <div>
                                            <span>Renda:</span>
                                            <input
                                                className={style.inputLinha1}
                                                placeholder='R$000,000,00'
                                                type="text"
                                                value={renda}
                                                onChange={(e) => setRenda(e.target.value)}
                                            />
                                        </div>
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


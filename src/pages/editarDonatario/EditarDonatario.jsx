import React from "react";
import NavBar from "../../components/navBar/NavBar";
import Head from "../../components/head/Head";
import style from "./EditarDonatario.module.css";
import FotoFamilia from "../../utils/assets/foto-familia.png";
import InputPadrao from "../../components/inputs/InputPadrao";
import { useState } from "react";
import BotaoPadrao from "../../components/botoes/BotaoPadrao";
import ComboBox from "../../components/comboBox/ComboBox";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import api from "../../api";
import { toast } from "react-toastify";

const CadastrarDonatario = () => {
    const [nome, setNome] = useState("");
    const [dataNasc, setDataNasc] = useState("");
    const [celular, setCelular] = useState("");
    const [telefone, setTelefone] = useState("");
    const [ocupacao, setOcupacao] = useState("");
    const [cpf, setCpf] = useState("");
    const [rg, setRg] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (sessionStorage.getItem("token") == null && sessionStorage.getItem("user") == undefined) {
            navigate("/login");
        } else {
            buscaDadosDonatario();
        }
    }, []);


    const buscaDadosDonatario = async () => {
        const yourConfig = {
            headers: {
                Authorization: "Bearer " + sessionStorage.getItem("token"),
                "Content-Type": "application/json",
            },
        };

        try {
            const response = await api.get(
                `/titulares/${sessionStorage.getItem("idDonatarioEdicao")}`,
                yourConfig,
            );
            let dados = response.data;
            setNome(dados.nome);
            setCpf(dados.cpf)
            setRg(dados.rg)

            const date = new Date(dados.dataNascimento);
            const formattedDate = date.toLocaleDateString("pt-BR", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
            });

            setDataNasc(formattedDate);
            setCelular(dados.telefone1);
            setTelefone(dados.telefone2);
            setEstadoCivil(dados.estadoCivil + "(a)");
            setEscolaridade(dados.escolaridade);
            isTrabalhando(dados.trabalhando ? "Sim" : "Não");
            setOcupacao(dados.ocupacao)
        } catch (error) {
            console.log("Erro ao buscar titular: ", error);
        }
    };

    const [estadoCivil, setEstadoCivil] = useState("");
    const optEstadoCivil = [
        "Solteiro(a)",
        "Casado(a)",
        "Divorciado(a)",
        "Viúvo(a)",
        "Separado(a)"
    ];

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
    const optTrabalhando = ["Sim", "Não"];

    async function handleSubmit() {
        let donatarioData = {
            nome,
            rg,
            cpf,
            dataNascimento: dataNasc.split('/').reverse().join('-'),
            telefone1: telefone,
            telefone2: celular,
            ocupacao,
            estadoCivil,
            escolaridade,
            trabalhando: trabalhando === "Sim" ? 1 : 0
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
                await api.put(`/titulares/${sessionStorage.getItem("idDonatarioEdicao")}`, donatarioData, yourConfig);
                toast.success("Donatario atualizado")
            }
            catch (error) {
                console.error('Error submitting data:', error);
            }
        } else {
            alert("Preencha todos os campos");
        }
    }

    return (
        <>
            <div className={style.container}>
                <div className={style.navbarContainer}>
                    <NavBar />
                </div>
                <div className={style.containerGeral}>
                    <div className={style.containerHead}>
                        <Head />
                    </div>
                    <div className={style.containerConteudo}>
                        <div className={style.tituloPagina}>
                            <p>Editar Donatário</p>
                            <hr />
                        </div>
                        <div className={style.containerFormulario}>
                            <div className={style.formulario}>
                                <div className={style.formLine} id={style.formLine1}>
                                    <InputPadrao
                                        className={style.nomeCompleto}
                                        label="Nome Completo:"
                                        placeholder="Nome Completo"
                                        onlyLetters={true}
                                        value={nome}
                                        onChange={(value) => setNome(value)}
                                    />
                                </div>
                                <div className={style.formLine} id={style.formLine1}>
                                    <InputPadrao
                                        className={style.nomeCompleto}
                                        label="CPF"
                                        placeholder="CPF"
                                        onlyLetters={false}
                                        value={cpf}
                                        onChange={(value) => setCpf(value)}
                                    />
                                    <InputPadrao
                                        className={style.nomeCompleto}
                                        label="RG"
                                        placeholder="RG"
                                        onlyLetters={false}
                                        value={rg}
                                        onChange={(value) => setRg(value)}
                                    />
                                </div>
                                <div className={style.formLine} id={style.formLine3}>
                                    <InputPadrao
                                        className={style.dataNascimento}
                                        label="Data de Nascimento:"
                                        placeholder="DD/MM/YYYY"
                                        mask="99/99/9999"
                                        value={dataNasc}
                                        onChange={(value) => setDataNasc(value)}
                                    />
                                    <ComboBox
                                        className={style.estadoCivil}
                                        label="Estado Civil:"
                                        defaultOption="Selecione"
                                        options={optEstadoCivil}
                                        value={estadoCivil}
                                        onChange={(e) => setEstadoCivil(e.target.value)}
                                    />
                                    <ComboBox
                                        className={style.escolaridade}
                                        label="Escolaridade:"
                                        defaultOption="Selecione"
                                        options={optEscolaridade}
                                        value={escolaridade}
                                        onChange={(e) => setEscolaridade(e.target.value)}
                                    />
                                </div>
                                <div className={style.formLine} id={style.formLine4}>
                                    <InputPadrao
                                        className={style.celular}
                                        label="Celular:"
                                        placeholder="(__) _____-____"
                                        mask="(99) 99999-99"
                                        value={celular}
                                        onChange={(value) => setCelular(value)}
                                    />
                                    <InputPadrao
                                        className={style.telefone}
                                        label="Telefone:"
                                        placeholder="(__) _____-____"
                                        mask="(99) 99999-99"
                                        value={telefone}
                                        onChange={(value) => setTelefone(value)}
                                    />
                                </div>
                                <div className={style.formLine} id={style.formLine5}>
                                    <ComboBox
                                        className={style.trabalhando}
                                        label="Trabalhando?"
                                        options={optTrabalhando}
                                        value={trabalhando}
                                        onChange={(e) => isTrabalhando(e.target.value)}
                                    />
                                    <InputPadrao
                                        className={style.ocupacao}
                                        label="Ocupação:"
                                        placeholder="Ocupação"
                                        value={ocupacao}
                                        onChange={(value) => setOcupacao(value)}
                                    />
                                </div>
                                <div className={style.formLine} id={style.formLine7}>
                                    <BotaoPadrao texto="Atualizar" onClick={() => {
                                        handleSubmit()
                                    }
                                    } />
                                </div>
                            </div>
                            <div className={style.imagem}>
                                <img src={FotoFamilia} alt="Foto de uma familia unida" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CadastrarDonatario;

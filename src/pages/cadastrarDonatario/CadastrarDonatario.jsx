import React from "react";
import NavBar from "../../components/navBar/NavBar";
import Head from "../../components/head/Head";
import style from "./CadastrarDonatario.module.css";
import FotoFamilia from "../../utils/assets/familiares_image.png";
import InputPadrao from "../../components/inputs/InputPadrao";
import { useState } from "react";
import BotaoPadrao from "../../components/botoes/BotaoPadrao";
import ComboBox from "../../components/comboBox/ComboBox";
import api from "../../api";

const CadastrarDonatario = () => {
    const [nome, setNome] = useState("");
    const [rg, setRg] = useState("");
    const [cpf, setCpf] = useState("");
    const [dataNasc, setDataNasc] = useState("");
    const [celular, setCelular] = useState("");
    const [telefone, setTelefone] = useState("");
    const [ocupacao, setOcupacao] = useState("");
    const [familia, setFamilia] = useState("");



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

    async function executarBusca() {
        var infoInput = document.getElementById('inputNome');

        if (infoInput.value.length > 0) {
            const yourConfig = {
                headers: {
                    'Authorization': "Bearer " + sessionStorage.getItem("token"),
                }
            }

            try {
                const response = await api.get(`familias/filtro/por-nome?nome=${infoInput.value}`, yourConfig);
                var dropdown = document.getElementById('dropdown');
                dropdown.innerHTML = "";

                for (var i = 0; i <= response.data.length - 1; i++) {
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
                            <p>Cadastrar Donatário</p>
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
                                        id={"nome"}
                                    />
                                </div>
                                <div className={style.formLine} id={style.formLine2}>
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
                                <div className={style.formLine} id={style.formLine3}>
                                    <InputPadrao
                                        className={style.dataNascimento}
                                        label="Data de Nascimento:"
                                        placeholder="DD/MM/YYYY"
                                        mask="99/99/9999"
                                        value={dataNasc}
                                        onChange={(value) => setDataNasc(value)}
                                        id={"dataNascimento"}
                                    />
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
                                </div>
                                <div className={style.formLine} id={style.formLine4}>
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
                                <div className={style.formLine} id={style.formLine5}>
                                    <ComboBox
                                        className={style.trabalhando}
                                        label="Trabalhando?"
                                        options={optTrabalhando}
                                        value={trabalhando}
                                        onChange={(e) => isTrabalhando(e.target.value)}
                                        id={"trabalhando"}
                                    />
                                    <InputPadrao
                                        className={style.ocupacao}
                                        label="Ocupação:"
                                        placeholder="Ocupação"
                                        value={ocupacao}
                                        onChange={(value) => setOcupacao(value)}
                                        id={"ocupacao"}
                                    />
                                </div>
                                <div className={style.formLine} id={style.formLine6}>
                                    <InputPadrao
                                        className={style.familia}
                                        label="A qual familía pertence?"
                                        placeholder="Nome da Família"
                                        value={familia}
                                        onChange={(value) => setFamilia(value)}
                                        id={"familia"}
                                    />
                                </div>
                                <div className={style.formLine} id={style.formLine7}>
                                    <BotaoPadrao texto="Cadastrar" />
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
    );
};

export default CadastrarDonatario;
import React, { useState } from 'react';
import NavBar from "../../components/navBar/NavBar";
import Head from "../../components/head/Head";
import style from "./EditarDonatario.module.css";
import FotoFamilia from "../../utils/assets/foto-familia.png";

const EditarDonatario = ({ optionsEstadoCivil, optionsEscolaridade,optionsTrabalhando, onSelect }) => {
    const [selectedOptionEstadoCivil, setSelectedOptionEstadoCivil] = useState('');
    const [selectedOptionEscolaridade, setSelectedOptionEscolaridade] = useState('');
    const [selectedOptionTrabalhando, setSelectedOptionTrabalhando] = useState('');

    const handleEstadoCivilChange = (event) => {
        setSelectedOptionEstadoCivil(event.target.value);
        onSelect(event.target.value);
    };

    const handleEscolaridadeChange = (event) => {
        setSelectedOptionEscolaridade(event.target.value);
        onSelect(event.target.value);
    };

    const handleTrabalhandoChange = (event) => {
        setSelectedOptionTrabalhando(event.target.value);
        onSelect(event.target.value);
    };

    return (
        <>
            <div className={style.container}>
                <NavBar />
                <div className={style.containerHead}>
                    <Head />

                    <div className={style.containerConteudo}>
                        <div className={style.tituloPagina}>
                            <p>Editar Donatário</p>
                        </div>
                        <div className={style.line}>‎‎‎‎‎‎‎‎ㅤ</div>

                        <div className={style.containerFormularioImg}>
                            <div className={style.formulario}>
                                <div className={style.formulario1}>
                                    <div className={style.nome}>
                                        <p>Nome Completo:</p>
                                        <input type="text" placeholder="Nome Completo" />
                                    </div>
                                </div>

                                <div className={style.formulario2}>
                                    <div className={style.rg}>
                                        <p>RG:</p>
                                        <input type="text" placeholder="XX.XXX.XXX-XX" />
                                    </div>

                                    <div className={style.cpf}>
                                        <p>CPF:</p>
                                        <input type="text" placeholder="XXX.XXX.XXX-XX" />
                                    </div>
                                </div>

                                <div className={style.formulario3}>
                                    <div className={style.dataNasc}>
                                        <p>Data de Nascimento:</p>
                                        <input type="text" placeholder="DD/MM/YYYY" />
                                    </div>

                                    <div className={style.estadoCivil}>
                                        <p>Estado Civil:</p>
                                        <select name="estadoCivil" onChange={handleEstadoCivilChange}>
                                            <option value="">Selecione uma opção</option>
                                            {optionsEstadoCivil.map((option, index) => (
                                                <option key={index} value={option}>
                                                    {option}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className={style.escolaridade}>
                                        <p>Escolaridade:</p>
                                        <select name="escolaridade" onChange={handleEscolaridadeChange}>
                                            <option value="">Selecione uma opção</option>
                                            {optionsEscolaridade.map((option, index) => (
                                                <option key={index} value={option}>
                                                    {option}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className={style.formulario4}>
                                    <div className={style.celular}>
                                        <p>Celular:</p>
                                        <input type="text" placeholder="(XX) XXXX-XXXX" />
                                    </div>

                                    <div className={style.telefone}>
                                        <p>Telefone:</p>
                                        <input type="text" placeholder="(XX) XXXX-XXXX" />
                                    </div>
                                </div>

                                <div className={style.formulario5}>
                                    <div className={style.trabalhando}>
                                        <p>Trabalhando?</p>
                                        <select name="trabalhando" onChange={handleTrabalhandoChange}>
                                            <option value="">Selecione uma opção</option>
                                            {optionsTrabalhando.map((option, index) => (
                                                <option key={index} value={option}>
                                                    {option}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className={style.ocupacao}>
                                        <p>Ocupação:</p>
                                        <input type="text" placeholder="Ocupacao" />
                                    </div>
                                </div>

                                <div className={style.formulario6}>
                                <div className={style.familiaPertence}>
                                        <p>A qual família pertence?:</p>
                                        <input type="text" placeholder="Nome da familia" />
                                    </div>
                                </div>

                                <div className={style.botaoAtualizar}>
                                    <button>Atualizar</button>
                                </div>
                            </div>

                            <div className={style.fotoFamilia}>
                                <img src={FotoFamilia} alt="foto familia feliz" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EditarDonatario;

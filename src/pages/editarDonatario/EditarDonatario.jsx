import React, { useState } from 'react';
import NavBar from "../../components/navBar/NavBar";
import Head from "../../components/head/Head";
import style from "./EditarDonatario.module.css";
import FotoFamilia from "../../utils/assets/foto-familia.png";

const EditarDonatario = ({ options, onSelect }) => {

    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
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
                                        <input type="text"
                                            placeholder='Nome Completo' />
                                    </div>

                                </div>

                                <div className={style.formulario2}>
                                    <div className={style.rg}>
                                        <p>RG:</p>
                                        <input type="text"
                                            placeholder='XX.XXX.XXX-XX' />
                                    </div>

                                    <div className={style.cpf}>
                                        <p>CPF:</p>
                                        <input type="text"
                                            placeholder='XXX.XXX.XXX-XX' />
                                    </div>

                                </div>

                                <div className={style.formulario3}>
                                    <div className={style.dataNasc}>
                                        <p>Data de Nascimento:</p>
                                        <input type="text"
                                            placeholder='DD/MM/YYYY' />
                                    </div>

                                    <div className={style.estadoCivil}>
                                        <p>Estado Civil:</p>
                                        <select name={selectedOption} onChange={handleChange}>
                                            <option value="" disabled>Selecione uma opção</option>
                                            {options.map((option, index) => (
                                                <option key={index} value={option}>
                                                    {option}
                                                </option>
                                            ))}
                                        </select>
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

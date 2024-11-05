import React, { useEffect, useState } from "react";
import NavBar from "../../components/navBar/NavBar";
import Head from "../../components/head/Head";
import style from "./CadastrarDonatario.module.css";
import FotoFamilia from "../../utils/assets/familiares_image.png";
import InputPadrao from "../../components/inputs/InputPadrao";
import BotaoPadrao from "../../components/botoes/BotaoPadrao";
import ComboBox from "../../components/comboBox/ComboBox";
import api from "../../api";
import { useNavigate } from "react-router-dom";

const CadastrarDonatario = () => {
    const [nome, setNome] = useState("");
    const [rg, setRg] = useState("");
    const [cpf, setCpf] = useState("");
    const [dataNasc, setDataNasc] = useState("");
    const [celular, setCelular] = useState("");
    const [telefone, setTelefone] = useState("");
    const [ocupacao, setOcupacao] = useState("");
    const [familia, setFamilia] = useState("");
	const navigate = useNavigate();

	if (sessionStorage.getItem("token") == null && sessionStorage.getItem("user") == undefined){
		navigate("/")
	}
    
    const [estadoCivil, setEstadoCivil] = useState("");
    const optEstadoCivil = ["Solteiro(a)", "Casado(a)", "Divorciado(a)", "Viúvo(a)", "Separado(a)"];

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
    const optTrabalhando = ["Selecione", "Sim", "Não"];
    
    const [familiaOptions, setFamiliaOptions] = useState([]);

    const fetchFamilias = async () => {
        const yourConfig = {
            headers: {
                'Authorization': "Bearer " + sessionStorage.getItem("token"),
            },
        };

        try {
            const response = await api.get("/familias", yourConfig);
            if (Array.isArray(response.data)) {
                setFamiliaOptions(response.data);
            } else {
                console.error('Expected an array but received:', response.data);
            }
        } catch (error) {
            console.error('Error fetching families:', error);
        }
    };

    useEffect(() => {
        fetchFamilias(); // Fetch all families on component mount
    }, []);

    async function handleSubmit() {
        const selectedFamilia = familia; // ID of the selected family
        
        let telefone1Real = celular;
        telefone1Real = telefone1Real.replace(/\D/g, ''); // Remove non-numeric characters
        telefone1Real = telefone1Real.replace(" ", ''); // Remove non-numeric characters
        let telefone2Real = telefone;
        telefone2Real = telefone2Real.replace(/\D/g, ''); // Remove non-numeric characters
        telefone2Real = telefone2Real.replace(" ", ""); // Reformat the phone number
        let rgReal = rg.replace(/\D/g, ''); // Remove non-numeric characters
        rgReal = rgReal.replace(" ", ''); // Remove non-numeric characters
        let cpfReal = cpf.replace(/\D/g, ''); // Remove non-numeric characters
        cpfReal = cpfReal.replace(" ", ''); // Remove non-numeric characters
        let dateNascReal = dataNasc.split('/').reverse().join('-');

        
        // Create an object with all the input values
        const donatarioData = {
            nome,
            rg: rgReal,
            cpf: cpfReal,
            dataNascimento: dateNascReal,
            telefone1: telefone1Real,
            telefone2: telefone2Real,
            ocupacao,
            estadoCivil,
            escolaridade,
            trabalhando: trabalhando === "Sim" ? 1 : 0,
            idFamilia: selectedFamilia
        };


        // Check if all required fields are filled
        if (
            donatarioData.cpf &&
            donatarioData.nome &&
            donatarioData.dataNascimento &&
            donatarioData.telefone1 &&
            donatarioData.telefone2 &&
            donatarioData.ocupacao &&
            donatarioData.estadoCivil &&
            donatarioData.escolaridade &&
            donatarioData.trabalhando !== undefined &&
            donatarioData.idFamilia
        ) {
            console.log(donatarioData);
            const yourConfig = {
                headers: {
                    'Authorization': "Bearer " + sessionStorage.getItem("token"),
                    'Content-Type': 'application/json'
                }
            };
    
            try {
                await api.post(`/titulares`, donatarioData, yourConfig);
                alert("DOAÇÃO CRIADA");
            } catch (error) {
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
                            <p>Cadastrar Donatário</p>
                            <hr />
                        </div>
                        <div className={style.containerFormulario}>
                            <div className={style.formulario}>
                                <div className={style.formLine}>
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
                                <div className={style.formLine}>
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
                                <div className={style.formLine}>
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
                                <div className={style.formLine}>
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
                                <div className={style.formLine}>
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

                                <select id='dropdown' value={familia} onChange={(e) => setFamilia(e.target.value)}>
                                    <option value="" disabled>Selecione a família</option>
                                    {familiaOptions.map((familia) => (
                                        <option key={familia.id} value={familia.id}>
                                            {familia.nome}
                                        </option>
                                    ))}
                                </select> 
                                <br />
                                <div className={style.formLine}>
                                    <BotaoPadrao texto="Cadastrar" onClick={() => {
                                        handleSubmit();
                                    }} />
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
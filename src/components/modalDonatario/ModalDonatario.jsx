import modalStyle from "../modal/Modal.module.css";
import style from "./ModalDonatario.module.css";
import iconPerfil from "../../utils/assets/icon_perfil_usuario.png";
import iconFechar from "../../utils/assets/fechar.png";
import { toast } from "react-toastify";
import api from "../../api";
import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BotaoPadrao from "../botoes/BotaoPadrao";
import ListaDoacoes from "../doacoes/ListaDoacoes";

const ModalDonatario = ({ data, isVisible, onClose }) => {
    const [dataDonatario, setDataDonatario] = useState();
    const [dataDoacoes, setDataDoacoes] = useState([]);
    const navigate = useNavigate();

    const buscaDadosDonatario = async () => {
        const yourConfig = {
            headers: {
                Authorization: "Bearer " + sessionStorage.getItem("token"),
                "Content-Type": "application/json",
            },
        };

        try {
            const response = await api.get(
                `/titulares/${data.id}`,
                yourConfig,
            );

            setDataDonatario(response.data);
        } catch (error) {
            console.log("Erro ao buscar titular: ", error);
        }
    };

    const buscaDadosDoacoes = async () => {
        const yourConfig = {
            headers: {
                Authorization: "Bearer " + sessionStorage.getItem("token"),
                "Content-Type": "application/json",
            },
            params: {
                nome: data.nome,
            },
        };

        try {
            const response = await api.get(`/doacoes/por-nome`, yourConfig);
            setDataDoacoes(response.data);
        } catch (error) {
            console.log("Erro ao buscar doacoes: ", error);
        }
    };

    async function handleDelete(id) {

        if (JSON.parse(sessionStorage.getItem("usuario")).coordenador != 1) {
            toast.error("Você não tem permissão para ver a tela de acessos")
            return;
        }

        const yourConfig = {
            headers: {
                Authorization: "Bearer " + sessionStorage.getItem("token"),
                "Content-Type": "application/json",
            },
        };

        try {
            await api.delete(`titulares/${id}`, yourConfig);
            toast.success("Donatario apagado com sucesso!");
            onClose();
            window.location.reload();
        } catch (error) {
            console.error("Error deletando donatario:", error);
        }
    }

    useEffect(() => {
        if (isVisible && data) {
            buscaDadosDonatario();
            buscaDadosDoacoes();
        }
    }, [isVisible, data]);

    const formatarCPF = (cpf) => {
        if (!cpf) return "";

        const digitos = cpf.replace(/\D/g, "");

        if (digitos.length !== 11) return cpf;

        return `${digitos.slice(0, 3)}.${digitos.slice(3, 6)}.${digitos.slice(6, 9)}-${digitos.slice(9)}`;
    };

    const formatarRG = (rg) => {
        if (!rg) return "";

        const rgBruto = rg.replace(/\D/g, "");

        if (rgBruto.length === 9) {
            return `${rgBruto.slice(0, 2)}.${rgBruto.slice(2, 5)}.${rgBruto.slice(5, 8)}-${rgBruto.slice(8)}`;
        }

        return rgBruto;
    };

    const formatarData = (dateString) => {
        if (!dateString) return "";

        const date = new Date(dateString);

        if (isNaN(date)) return dateString;

        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear();

        return `${day}/${month}/${year}`;
    };

    const editar = (id) => {
        sessionStorage.setItem("idDonatarioEdicao", id)
        navigate("/editar-donatario")
    }

    const editarFamilia = (id) => {
        console.log(id)
        sessionStorage.setItem("idFamiliaEdicao", id)
        navigate("/editar-familia")
    }

    if (!isVisible) return null;
    return (
        <>
            <div
                className={modalStyle.modal}
                style={{ display: "flex", width: "90vw" }}
            >
                <div className={modalStyle.modalHeader}>
                    <img
                        src={iconFechar}
                        alt=""
                        className={modalStyle.iconFechar}
                        onClick={onClose}
                    />
                </div>
                <div className={modalStyle.line}>
                    <div className={modalStyle.background}>
                        <div className={style.linha}>
                            <div className={modalStyle.content}>
                                <div className={modalStyle.titulo}>
                                    <h1>Informações adicionais do donatário</h1>
                                </div>
                                <div className={style.informacaoModalDonatario}>
                                    <div className={style.areaDonatario}>
                                        <img
                                            src={iconPerfil}
                                            alt="Icone de Perfil"
                                            className={style.icon}
                                        />
                                        <div className={style.infoWrapper}>
                                            <div className={modalStyle.info}>
                                                <p>Nome:</p>
                                                <b>{data.nome}</b>
                                            </div>

                                        </div>
                                    </div>
                                    <div className={style.botoes}>
                                        <BotaoPadrao
                                            texto="Editar Donatário"
                                            onClick={() => editar(data.id)}
                                        />

                                        <BotaoPadrao
                                            texto="Editar Família"
                                            onClick={() => editarFamilia(data.familia.id)}
                                        />

                                        <BotaoPadrao
                                            texto="Apagar Donatário"
                                            onClick={() => handleDelete(data.id)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Informações de contatos do donatário */}
                        <div className={style.linha}>
                            <div className={style.coluna}>
                                <div className={modalStyle.content}>
                                    <div className={modalStyle.titulo}>
                                        <h1>Contatos</h1>
                                    </div>
                                    <div className={style.infoContainer}>
                                        <div className={style.infoWrapper}>
                                            <div className={modalStyle.info}>
                                                <p>Telefone:</p>
                                                <b>
                                                    {data?.telefone1
                                                        ? (() => {
                                                            const tel = data.telefone1;
                                                            const formattedTel = `(${tel.slice(0, 2)}) ${tel.slice(2, 7)}-${tel.slice(7)}`;
                                                            return formattedTel;
                                                        })()
                                                        : "Não disponível"}
                                                </b>
                                            </div>
                                            <div className={modalStyle.info}>
                                                <p>Celular:</p>
                                                <b>
                                                    {data?.telefone2
                                                        ? (() => {
                                                            const tel = data.telefone2;
                                                            const formattedTel = `(${tel.slice(0, 2)}) ${tel.slice(2, 7)}-${tel.slice(7)}`;
                                                            return formattedTel;
                                                        })()
                                                        : "Não disponível"}
                                                </b>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={modalStyle.content}>
                                    <div className={modalStyle.titulo}>
                                        <h1>Dados pessoais</h1>
                                    </div>
                                    <div className={style.infoContainer}>
                                        <div className={style.infoWrapper}>
                                            <div className={modalStyle.info}>
                                                <p>CPF:</p>
                                                <b>{formatarCPF(dataDonatario?.cpf)}</b>
                                            </div>
                                            <div className={modalStyle.info}>
                                                <p>Data de Nascimento:</p>
                                                <b>{formatarData(dataDonatario?.dataNascimento)}</b>
                                            </div>
                                            <div className={modalStyle.info}>
                                                <p>RG:</p>
                                                <b>{formatarRG(dataDonatario?.rg)}</b>
                                            </div>
                                            <div className={modalStyle.info}>
                                                <p>Estado Civil:</p>
                                                <b>{dataDonatario?.estadoCivil}</b>
                                            </div>
                                            <div className={modalStyle.info}>
                                                <p>Trabalhando:</p>
                                                <b>{dataDonatario?.trabalhando ? "Sim" : "Não"}</b>
                                            </div>
                                            <div className={modalStyle.info}>
                                                <p>Escolaridade:</p>
                                                <b>{dataDonatario?.escolaridade}</b>
                                            </div>
                                            <div className={modalStyle.info}>
                                                <p>Ocupação:</p>
                                                <b>{dataDonatario?.ocupacao}</b>
                                            </div>
                                            <div className={modalStyle.info}>
                                                <p>Família:</p>
                                                <b>{dataDonatario?.familia.nome}</b>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={modalStyle.content}>
                                <div className={modalStyle.titulo}>
                                    <h1>Doações recebidas</h1>
                                </div>
                                <div className={style.doacaoWrapper}>
                                    {Array.isArray(dataDoacoes) && dataDoacoes.length > 0 ? (
                                        dataDoacoes.map((item, index) => (
                                            <div key={index}>
                                                <ListaDoacoes data={item} />
                                            </div>
                                        ))
                                    ) : (
                                        <p>Nenhuma doação encontrada.</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ModalDonatario;

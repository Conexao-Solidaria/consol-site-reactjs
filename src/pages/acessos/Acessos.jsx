import React, { useState, useEffect } from 'react';
import style from "./Acessos.module.css";
import NavBar from "../../components/navBar/NavBar";
import Head from "../../components/head/Head";
import api from "../../api";
import { toast } from "react-toastify";

const Acessos = () => {
	const navigate = useNavigate();
	
	useEffect(() => {
		if (sessionStorage.getItem("token") == null && sessionStorage.getItem("user") == undefined) {
			navigate("/")
		}
	})
    const [usuarios, setUsuarios] = useState([]);
    const [loading, setLoading] = useState(true);
    const yourConfig = {
        headers: {
            'Authorization': "Bearer " + sessionStorage.getItem("token")
        }
    }

    const fetchUsuarios = async () => {
        try {
            const response = await api.get("/usuarios", yourConfig);
            setUsuarios(response.data);
        } catch (error) {
            console.error("Erro ao buscar usuários:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsuarios();
    }, []);

    const handleAccept = async (id) => {
        try {
            const flagAceitar = {
                flagAprovado: 1
            }
            await api.put(`/usuarios/atualizar-flag/${id}`, flagAceitar, yourConfig);
            toast.success(`Acesso aceito para o usuário com ID: ${id}`);
            setUsuarios(usuarios.filter(usuario => usuario.id !== id));
        } catch (error) {
            console.error("Erro ao aceitar acesso:", error);
        }
    };

    const handleReject = async (id) => {
        try {
            const flagRecusar = {
                flagAprovado: 0
            }
            await api.put(`/usuarios/atualizar-flag/${id}`, flagRecusar, yourConfig);
            toast.error(`Acesso negado para o usuário com ID: ${id}`);
            setUsuarios(usuarios.filter(usuario => usuario.id !== id));
        } catch (error) {
            console.error("Erro ao recusar acesso:", error);
        }
    };

    if (loading) {
        return <div>Carregando...</div>;
    }

    return (
        <div className={style.container}>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            <NavBar />
            <div className={style.main}>
                <div className={style.containerHead}>
                    <Head />
                </div>
                <div className={style.pesquisa}>
                    <span className={style.tituloTexto}>Pesquisar Usuários:</span>
                    <input type="text" placeholder="Pesquisar Usuário" />
                </div>
                <div className={style.gerenciar}>
                    <div className={style.gerenciarTitulo}>
                        <div className={style.titulo}>
                            <span className={style.tituloTexto}>Controle de Acessos</span>
                        </div>
                        <hr className="hr" />
                    </div>
                    <div className={style.cartoes}>
                        {usuarios.map((usuario, index) => (
                            <div key={index} className={style.cartao}>
                                <div>
                                    <h2>{usuario.nomeUsuario}</h2>
                                    <span>{usuario.email}</span>
                                </div>
                                <div>
                                    <button
                                        className={style.button1}
                                        onClick={() => handleAccept(usuario.idUsuario)}
                                    >
                                        <i className="material-icons">arrow_forward</i> Aceitar
                                    </button>
                                    <button
                                        className={style.button2}
                                        onClick={() => handleReject(usuario.idUsuario)}
                                    >
                                        <i className="material-icons">close</i> Negar
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Acessos;

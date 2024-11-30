import React, { useState, useEffect } from 'react';
import style from "./Acessos.module.css";
import NavBar from "../../components/navBar/NavBar";
import Head from "../../components/head/Head";
import api from "../../api";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';

const Acessos = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("token") == null && sessionStorage.getItem("user") == undefined) {
      navigate("/login");
    }
    else if (JSON.parse(sessionStorage.getItem("user")).coordenador != 1) {
      toast.error("Você não tem permissão para ver a tela de acessos")
      navigate("/");
    }
  });

  const [usuarios, setUsuarios] = useState([]);
  const [usuariosDentroSistema, setUsuariosDentroSistema] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const yourConfig = {
    headers: {
      'Authorization': "Bearer " + sessionStorage.getItem("token"),
    },
  };

  const fetchUsuarios = async () => {
    try {
      const response = await api.get("/usuarios", yourConfig);
      let usuariosFora = [];
      let usuariosDentro = [];

      response.data.map(usuario => {
        if (usuario.idUsuario == JSON.parse(sessionStorage.getItem("user")).userId) {

        } else if (usuario.flagAprovado === 1) {
          usuariosDentro.push(usuario);
        } else {
          usuariosFora.push(usuario);
        }
      });

      setUsuariosDentroSistema(usuariosDentro);
      setUsuarios(usuariosFora);

      setSearchTerm("");
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
    } finally {
      setLoading(false);
    }
  };

  const teste = (id) => {
    console.log(document.getElementById(id).checked);
  };

  useEffect(() => {
    fetchUsuarios();
  }, []);

  const handleAccept = async (id) => {
    try {
      let bodyRequi = null;
      if (document.getElementById(id).checked) {
        bodyRequi = {
          flagAprovado: 1,
          coordenador: 1
        };
        await api.put(`/usuarios/atualizar-flag-coordenador/${id}`, bodyRequi, yourConfig);
      } else {
        bodyRequi = { flagAprovado: 1 };
        await api.put(`/usuarios/atualizar-flag/${id}`, bodyRequi, yourConfig);
      }

      toast.success(`Acesso aceito para o usuário com ID: ${id}`);
      fetchUsuarios();
    } catch (error) {
      console.error("Erro ao aceitar acesso:", error);
    }
  };

  const handleReject = async (id) => {
    try {
      const flagRecusar = { flagAprovado: 0 };
      await api.put(`/usuarios/atualizar-flag/${id}`, flagRecusar, yourConfig);
      toast.error(`Acesso negado para o usuário com ID: ${id}`);
      fetchUsuarios();
    } catch (error) {
      console.error("Erro ao recusar acesso:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/usuarios/${id}`, yourConfig);
      toast.error(`Acesso negado para o usuário com ID: ${id}`);
      fetchUsuarios();
    } catch (error) {
      console.error("Erro ao recusar acesso:", error);
    }
  };

  const filteredUsuarios = usuarios.filter(usuario =>
    usuario.nomeUsuario.toLowerCase().includes(searchTerm.toLowerCase()) ||
    usuario.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredUsuariosDentro = usuariosDentroSistema.filter(usuario =>
    usuario.nomeUsuario.toLowerCase().includes(searchTerm.toLowerCase()) ||
    usuario.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      <div className={style.container}>
        <NavBar />
        <div className={style.main}>
          <div className={style.containerHead}>
            <Head />
          </div>
          <div className={style.pesquisa}>
            <span className={style.tituloTexto}>Pesquisar Usuários:</span>
            <input
              type="text"
              placeholder="Pesquisar Usuário"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className={style.gerenciar}>
            <div className={style.gerenciarTitulo}>
              <div className={style.titulo}>
                <span className={style.tituloTexto}>Controle de Acessos Pendentes</span>
              </div>
              <hr className="hr" />
            </div>
            <div className={style.cartoes}>
              {filteredUsuarios.map((usuario, index) => (
                <div key={index} className={style.cartao}>
                  <div>
                    <h2>{usuario.nomeUsuario}</h2>
                    <span>{usuario.email}</span>
                  </div>
                  <div className={style.buttons}>
                    <button
                      className={style.button1}
                      onClick={() => handleAccept(usuario.idUsuario)}
                    >
                      <i className="material-icons">arrow_forward</i> Aceitar
                    </button>
                    <div className={style.checkboxDiv}>
                      <input type="checkbox" id={usuario.idUsuario} />
                      <span>Como administrador?</span>
                    </div>
                    <button
                      className={style.button2}
                      onClick={() => handleDelete(usuario.idUsuario)}
                    >
                      <i className="material-icons">close</i> Negar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={style.gerenciar}>
            <div className={style.titulo}>
              <span className={style.tituloTexto}>Controle de Acessos Dentro do Sistema</span>
            </div>
            <div className={style.cartoes}>
              {filteredUsuariosDentro.map((usuario, index) => (
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
                      <i className="material-icons">close</i> Retirar acesso
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Acessos;

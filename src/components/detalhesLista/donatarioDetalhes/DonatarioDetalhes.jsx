import React from "react";
import style from "./DonatarioDetalhes.module.css";
import iconPerfil from "../../../utils/assets/icon_perfil_usuario.png";
import ModalDonatario from "../../modalDonatario/ModalDonatario";

const DonatarioDetalhes = ({ key, dados }) => {
    const [isModalDonatario, setIsModalDonatario] = React.useState(false);

    const handleModalDonatario = () => {
        setIsModalDonatario(!isModalDonatario);
    };

    return (
        <>
            <div className={style.container} onClick={handleModalDonatario}>
                <div className={style.donatarioDetalhes}>
                    <div className={style.iconContainer}>
                        <img src={iconPerfil} alt="Profile Icon" />
                    </div>
                    <div className={style.contentContainer}>
                        <span>{dados.nome}</span>
                        <p>Donatário</p>
                        <p>CPF: {dados.cpf}</p>
                        <p>RG: {dados.rg}</p>
                    </div>
                </div>
                <div className={style.enderecoDetalhes}>
                    <span>{dados.telefone1} | {dados.telefone2}</span>
                    <p>Telefone | Celular</p>
                </div>
            </div>
            <ModalDonatario
                data={dados}
                isVisible={isModalDonatario}
                onClose={handleModalDonatario}
            />
        </>
    );
};

export default DonatarioDetalhes;

import style from "./DonatarioDetalhes.module.css"
import iconPerfil from "../../../utils/assets/icon_perfil_usuario.png"

const DonatarioDetalhes = (nome, endereco, numeroCasa) => {
  return (
  <>
    <div className={style.container}>
      <div className={style.donatarioDetalhes}>
        <div className={style.iconContainer}>
          <img src={iconPerfil} alt="" />
        </div>
        <div className={style.contentContainer}>
          <span>Nome Sobrenome</span>
          <p>Donatário</p>
        </div>
      </div>
      <div className={style.enderecoDetalhes}>
        <span>Rua Exemplo 000, complemento</span>
        <p>Bairro- Estado</p>
      </div>
    </div>
  </>
  )
}

export default DonatarioDetalhes;

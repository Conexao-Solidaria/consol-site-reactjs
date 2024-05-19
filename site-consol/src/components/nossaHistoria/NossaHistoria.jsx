import react from "react";
import styles from "../nossaHistoria/NossaHistoria.module.css";
import imgPessoasUnidas from "../../utils/assets/imgPessoasUnidas"

const NossaHistoria = () => {
    return(
        <>
            <NossaHistoria/>
            <div className={styles=["nossaHistoria"]}>
                <div className={styles["imgPessoasUnidas"]}>
                    <img src={imgPessoasUnidas} alt="pessoas unidas" />
                </div>
                <div className={styles["texto"]}>
                    <h1>
                        Nossa História
                    </h1>
                    <h4>
                    A história do nosso projeto começa em fevereiro de 2024, na primeira aula de PI (projeto de pesquisa e inovação) do segundo ano de Ciências da Computação, onde todos nós passamos a integrar o grupo 7, que mais tarde decidimos que viraríamos a ConSol.
                    <br />
                    </h4>
                    <h3>
                    Mas afinal, por que chamamos ConSol?
                    </h3>
                    <h4>
                    Esse nome partir da definição do tema do nosso projeto, esse projeto teria que atender uma das ODs da ONU.
                    <br />
                    </h4>
                    <h3>
                    O que são ODs da ONU?
                    </h3>
                    <h4>
                    As ODs significa Objetivos de Desenvolvimento Sustentável.
                    <br />
                    </h4>
                    <h3>
                    E o que significa ConSol e que ODs são atendidas com esse projeto?
                    </h3>
                    <h4>
                    ConSol significa Conexão Solidaria, e nossa ideia é atender as ODS 1 e 2, que são Erradicação da pobreza e Fome zero e agricultura sustentável, respectivamente.
                    </h4>
                </div>
            </div>
        </>
    );
}
export default NossaHistoria;
import Agir from '../../assets/img/agir.png'
import Styles from '../como_agir/css/comoagir.module.css'
export default function ComoAgir() {
    return (
        <section className={Styles.comoagir}>
            <div className={Styles.comoagir_info}>
                <div className={Styles.comoagir_text}>
                    <h2 className={Styles.tema04}>
                        PASSE DA INFORMAÇÃO À AÇÃO
                    </h2>
                    <h2 className={Styles.comoagir_titulo}>
                        COMO AGIR
                    </h2>
                    <p className={Styles.comoagir_descricao}>
                        Informação que fica no papel não protege ninguém. Veja onde denunciar, como ajudar quem sofre e o que você pode fazer no dia a dia.
                    </p>
                </div>

                <div className={Styles.comoagir_img}>
                    <img src={Agir} alt="ComoAgir"></img>
                </div>
            </div>
        </section>
    )
}
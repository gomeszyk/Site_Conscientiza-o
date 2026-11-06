import { Link } from 'react-router-dom'
import Styles from './css/comoagirld.module.css'
export default function ComoAgirLd() {
    return(
        <section className={Styles.comoagir}>
            <div className={Styles.comoagir_texto}>
                <h2 className={Styles.comoagir_titulo}>
                    O SILÊNCIO PROTEGE QUEM AGRIDE.
                </h2>
                <h2 className={Styles.comoagir_titulo2}>
                    A INFORMAÇÃO PROTEGE QUEM SOFRE.
                </h2>
            </div>

            <div className={Styles.comoagir_botao}>
                <Link to="/como-agir" className={Styles.comoagir_link}>
                    Veja como agir
                </Link>
            </div>
        </section>
    )
}
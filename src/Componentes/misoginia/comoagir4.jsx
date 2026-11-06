import { Link } from 'react-router-dom'
import Styles from '../misoginia/css/comoagir4.module.css'
export default function ComoAgir4() {
    return (
        <section className={Styles.comoagir4}>
            <div className={Styles.comoagir4_texto2}>
                <h2 className={Styles.comoagir4_titulo}>
                    O SILÊNCIO PROTEGE QUEM AGRIDE.
                </h2>
                <h2 className={Styles.comoagir4_titulo2}>
                    A INFORMAÇÃO PROTEGE QUEM SOFRE.
                </h2>
            </div>

            <div className={Styles.comoagir4_botao}>
                <Link to="/como-agir" className={Styles.comoagir4_link}>
                    Veja como agir
                </Link>
            </div>
        </section>
    )
}
import Styles from '../homofobia/css/comoagir5.module.css'
export default function ComoAgir5() {
    return (
        <section className={Styles.comoagir5}>
            <div className={Styles.comoagir5_texto2}>
                <h2 className={Styles.comoagir5_titulo}>
                    O SILÊNCIO PROTEGE QUEM AGRIDE.
                </h2>
                <h2 className={Styles.comoagir5_titulo2}>
                    A INFORMAÇÃO PROTEGE QUEM SOFRE.
                </h2>
            </div>

            <div className={Styles.comoagir5_botao}>
                <a href="/como-agir" className={Styles.comoagir5_link}>
                    Veja como agir
                </a>
            </div>
        </section>
    )
}
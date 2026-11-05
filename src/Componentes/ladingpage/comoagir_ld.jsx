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
                <a href="/como-agir" className={Styles.comoagir_link}>
                    Veja como agir
                </a>
            </div>
        </section>
    )
}
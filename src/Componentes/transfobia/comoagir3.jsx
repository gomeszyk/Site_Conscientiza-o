import Styles from '../transfobia/css/comoagir3.module.css'
export default function ComoAgir3() {
    return (
        <section className={Styles.comoagir3}>
            <div className={Styles.comoagir3_texto2}>
                <h2 className={Styles.comoagir3_titulo}>
                    O SILÊNCIO PROTEGE QUEM AGRIDE.
                </h2>
                <h2 className={Styles.comoagir3_titulo2}>
                    A INFORMAÇÃO PROTEGE QUEM SOFRE.
                </h2>
            </div>

            <div className={Styles.comoagir3_botao}>
                <a href="#" className={Styles.comoagir3_link}>
                    Veja como agir
                </a>
            </div>
        </section>
    )
}
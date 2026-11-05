import Styles from '../racismo/css/comoagir2.module.css'
export default function ComoAgir2() {
    return(
        <section className={Styles.comoagir2}>
                    <div className={Styles.comoagir2_texto2}>
                        <h2 className={Styles.comoagir2_titulo}>
                            O SILÊNCIO PROTEGE QUEM AGRIDE.
                        </h2>
                        <h2 className={Styles.comoagir2_titulo2}>
                            A INFORMAÇÃO PROTEGE QUEM SOFRE.
                        </h2>
                    </div>
        
                    <div className={Styles.comoagir2_botao}>
                        <a href="/como-agir" className={Styles.comoagir2_link}>
                            Veja como agir
                        </a>
                    </div>
                </section>
    )
}
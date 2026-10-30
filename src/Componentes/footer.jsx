import Styles from './css/footer.module.css'
export default function Footer() {
    return (
        <footer>
            <div className={Styles.frase}>
                <h2 className={Styles.frase_h2}>
                    Sem Medo de Ser
                </h2>

                <p className={Styles.frase_p}>
                    Quatro lutas, uma só voz.
                    Entender. Sentir. Agir.
                </p>
            </div>
        </footer>
    )

}
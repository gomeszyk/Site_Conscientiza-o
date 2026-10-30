import Styles from './css/repertorio.module.css'
import Repertorios from '../assets/img/Frame 14.png'
export default function Repertorio() {
    return (
        <section className={Styles.repertorio}>
            <div className={Styles.repertorio_texto}>
                <h2 className={Styles.repertorio_titulo}>
                    REPERTÓRIO QUE ATRAVESSA
                </h2>

                <p className={Styles.repertorio_paragrafo}>
                    Música, livro e cinema ajudam a sentir o que os números não mostram. Do rap ao samba, a arte brasileira sempre falou do que a sociedade preferia calar.
                </p>
            </div>

            <div className={Styles.repertorio_imagem}>
                <img src={Repertorios} alt="Imagem de repertório" />
            </div>
        </section >
        
    )
}
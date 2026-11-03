import Penha from '../../assets/img/img_misoginia.png'
import Styles from '../misoginia/css/misoginia.module.css'
export default function Misoginia() {
    return (
        <section className={Styles.misoginia}>
            <div className={Styles.misoginia_info}>
                <div className={Styles.misoginia_text}>
                    <h2 className={Styles.tema03}>
                        TEMA 03
                    </h2>
                    <h2 className={Styles.misoginia_titulo}>
                        MISOGINIA
                    </h2>
                    <p className={Styles.misoginia_descricao}>
                        Não é só a piada de mau gosto. É o desprezo pelas mulheres, que pode escalar do comentário ao controle, do assédio à violência e ao feminicídio.
                    </p>
                </div>

                <div className={Styles.misoginia_img}>
                    <img src={Penha} alt="Penha"></img>
                </div>
            </div>
        </section>
    )
}
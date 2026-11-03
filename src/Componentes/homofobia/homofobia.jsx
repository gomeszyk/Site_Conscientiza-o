import Styles from '../homofobia/css/homofobia.module.css'
import Alan from '../../assets/img/img_homofobia.png'

export default function Homofobia() {
    return (
        <section className={Styles.homofobia}>
            <div className={Styles.homofobia_info}>
                <div className={Styles.homofobia_text}>
                    <h2 className={Styles.tema04}>
                        TEMA 04
                    </h2>
                    <h2 className={Styles.homofobia_titulo}>
                        HOMOFOBIA
                    </h2>
                    <p className={Styles.homofobia_descricao}>
                        Amar não é crime. Mas amar a pessoa “errada” ainda pode custar a casa, o emprego, a família e a segurança.
                    </p>
                </div>


                <div className={Styles.homofobia_img}>
                    <img src={Alan}></img>
                </div>
            </div>
        </section>
    )
}
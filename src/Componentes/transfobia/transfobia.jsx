import Styles from '../transfobia/css/transfobia.module.css'
import Erika from '../../assets/img/img_transfobia.png'

export default function Transfobia() {
    return (
        <section className={Styles.transfobia}>
            <div className={Styles.transfobia_info}>
                <div className={Styles.transfobia_text}>
                    <h2 className={Styles.tema02}>
                        TEMA 02
                    </h2>
                    <h2 className={Styles.transfobia_titulo}>
                        TRANSFOBIA
                    </h2>
                    <p className={Styles.transfobia_descricao}>
                        Identidade de gênero não é opinião nem moda. Ser quem se é não deveria custar a segurança, o emprego, a família ou a vida.
                    </p>
                </div>


                <div className={Styles.transfobia_img}>
                    <img src={Erika}></img>
                </div>
            </div>
        </section>
    )
}
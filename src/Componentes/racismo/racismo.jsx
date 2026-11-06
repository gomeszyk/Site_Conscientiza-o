import SplitText from '../animacoes/SplitText'
import Styles from './css/racismo.module.css'
import Racionais from '../../assets/img/img_racismo.png'
export default function Racismo() {
    return (
        <section className={Styles.racismo} >
            <div className={Styles.racismo_info}>
                <div className={Styles.racismo_text}>
                    <h2 className={Styles.tema01}>
                        TEMA 01
                    </h2>
                    <SplitText as="h2" className={Styles.racismo_titulo} text="RACISMO" delay={150} />
                    <p className={Styles.racismo_descricao}>
                        Não é um desvio de caráter isolado. É uma estrutura que distribui oportunidade e violência de forma desigual, e que começa a ser desmontada quando a gente dá nome a ela.
                    </p>
                </div>

                <div className={Styles.racismo_img}>
                    <img src={Racionais}></img>
                </div>
            </div>
        </section>
    )
}
import { Link } from 'react-router-dom'
import SplitText from '../animacoes/SplitText'
import Styles from './css/apresentacao.module.css'
import Home from '../../assets/img/img_home.png'
function Apresentacao() {
    return (
        <section className={Styles.apresentacao}>

            <div className={Styles.home1fundo}>
                <div className={Styles.home1text}>
                    <h2>INSTITUTO DE CONSCIENTIZAÇÃO</h2>
                    <SplitText as="h1" text="QUATRO LUTAS. UMA SÓ VOZ." delay={200} stagger={45} />

                    <p className={Styles.home1p}>
                        O preconceito começa no silêncio. Aqui você encontra
                        informação, dados e repertório para entender, sentir e
                        agir contra o racismo, a transfobia, a misoginia e a
                        homofobia.
                    </p>

                    <div className={Styles.botoes}>
                        <a href="#topicos" className={Styles.entender}>
                            <p className={Styles.entender_p}>
                                Entender o preconceito
                            </p>
                        </a>

                        <Link to="/como-agir" className={Styles.agir}>
                            <p className={Styles.agir_p}>
                                Como Agir
                            </p>
                        </Link>
                    </div>
                </div>

                <div className={Styles.home1img}>
                    <img src={Home} alt="Imagem de conscientização" />
                </div>
            </div>





        </section>
    )
}

export default Apresentacao
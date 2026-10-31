import Styles from './css/apresentacao.module.css'
import Home from '../../assets/img/img_home.png'
function Apresentacao() {
    return (
        <section className={Styles.apresentacao}>

            <div className={Styles.home1fundo}>
                <div className={Styles.home1text}>
                    <h2>INSTITUTO DE CONSCIENTIZAÇÃO</h2>
                    <h1> QUATRO LUTAS.
                        UMA SÓ VOZ.</h1>

                    <p className={Styles.home1p}>
                        O preconceito começa no silêncio. Aqui você encontra
                        informação, dados e repertório para entender, sentir e
                        agir contra o racismo, a transfobia, a misoginia e a
                        homofobia.
                    </p>

                    <div className={Styles.botoes}>
                        <a href="#" className={Styles.entender}>
                            <p className={Styles.entender_p}>
                                Entender o preconceito
                            </p>
                        </a>

                        <a href="#" className={Styles.agir}>
                            <p className={Styles.agir_p}>
                                Como Agir
                            </p>
                        </a>
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
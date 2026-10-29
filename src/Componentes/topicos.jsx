import Styles from './css/topicos.module.css'
import Frame from '../assets/img/Frame 22.png'

function Topicos() {
    return (
        <section className={Styles.topicos}>

            <div className={Styles.topicos_textos}>

                <div className={Styles.topicos_texto1}>
                    <h2 className={Styles.topicos_h2}>
                        ESCOLHA POR  ONDE COMEÇAR
                    </h2>
                </div>

                <div className={Styles.topicos_texto2}>
                    <p className={Styles.topicos_p}>
                        Cada tema tem sua própria página, com dados, história, sentimentos,
                        repertório e o que a lei garante.
                    </p>
                </div>
            </div>

            <div className={Styles.topicos_cards}>
                <div className={Styles.topicos_card1}>
                    <div className={Styles.card1_info}>
                        <p className={Styles.number1}>
                            01
                        </p>
                        <h3 className={Styles.card1_h3}>
                            RACISMO
                        </h3>

                        <p className={Styles.card1_p1}>
                            Da escravidão ao racismo estrutural:
                            entenda o que ainda pesa hoje.
                        </p>

                        <div className={Styles.card_borda}>

                        </div>

                        <p className={Styles.card_marco}>
                            MARCO LEGAL
                        </p>

                        <p className={Styles.card1_p2}>
                            Crime inafiançável e imprescritível pela Constituição de 1988.
                        </p>

                        <div className={Styles.card1_link}>
                            <a href="#" className={Styles.card1_a}>
                                Entrar ↗
                            </a>

                        </div>
                    </div>

                </div>

                <div className={Styles.topicos_card2}>
                    <div className={Styles.card2_info}>
                        <p className={Styles.number2}>
                            02
                        </p>
                        <h3 className={Styles.card2_h3}>
                            TRANSFOBIA
                        </h3>

                        <p className={Styles.card2_p1}>
                            Identidade não é opinião. Conheça a
                            realidade da população trans no Brasil.
                        </p>

                        <div className={Styles.card_borda}>

                        </div>

                        <p className={Styles.card_marco}>
                            MARCO LEGAL
                        </p>

                        <p className={Styles.card2_p2}>
                            Desde 2018, o STF permite trocar nome e gênero no registro sem cirurgia.
                        </p>

                        <div className={Styles.card2_link}>
                            <a href="#" className={Styles.card2_a}>
                                Entrar ↗
                            </a>

                        </div>

                    </div>

                </div>



            </div>

            <div className={Styles.topicos_cardsbaixo}>

                <div className={Styles.topicos_card3}>
                    <div className={Styles.card3_info}>
                        <p className={Styles.number3}>
                            03
                        </p>
                        <h3 className={Styles.card3_h3}>
                            MISOGINIA
                        </h3>

                        <p className={Styles.card3_p1}>
                            Do assédio ao feminicídio:
                            o ódio às mulheres tem degraus.
                        </p>

                        <div className={Styles.card_borda}>

                        </div>

                        <p className={Styles.card_marco}>
                            MARCO LEGAL
                        </p>

                        <p className={Styles.card3_p2}>
                            Feminicídio é crime hediondo desde a Lei 13.104, de 2015.
                        </p>

                        <div className={Styles.card3_link}>
                            <a href="#" className={Styles.card3_a}>
                                Entrar ↗
                            </a>

                        </div>
                    </div>
                </div>

                <div className={Styles.topicos_card4}>
                    <div className={Styles.card4_info}>
                        <p className={Styles.number4}>
                            04
                        </p>
                        <h3 className={Styles.card4_h3}>
                            HOMOFOBIA
                        </h3>

                        <p className={Styles.card4_p1}>
                            Amar não é crime. Conheça a história e a luta LGBTQIA+.
                        </p>

                        <div className={Styles.card_borda}>

                        </div>

                        <p className={Styles.card_marco}>
                            MARCO LEGAL
                        </p>

                        <p className={Styles.card4_p2}>
                            Desde 2019, o STF equipara a homofobia ao crime de racismo.
                        </p>

                        <div className={Styles.card4_link}>
                            <a href="#" className={Styles.card4_a}>
                                Entrar ↗
                            </a>

                        </div>
                    </div>
                </div>
            </div>


        </section>
    )
}

export default Topicos
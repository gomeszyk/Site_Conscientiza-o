import Styles from '../racismo/css/consequencia_racismo.module.css'
export default function ConsequenciaRacismo() {
    return (
        <section className={Styles.consequencia_racismo}>
            <div className={Styles.consequencia_racismo_info}>

                <div className={Styles.consequencia_racismo_texto}>
                    <div className={Styles.consequencia_racismo_texto_h2}>
                        COMO ISSO MACHUCA?
                    </div>

                    <div className={Styles.consequencia_racismo_texto_p1}>
                        Números não choram. Por trás de cada um deles há alguém sentindo.
                    </div>

                </div>


                <div className={Styles.consequencia_racismo_cards}>

                    <div className={Styles.consequencia_racismo_card1}>

                        <div className={Styles.card_invisibilidade}>

                            <div className={Styles.card_invisibilidade_h2}>
                                INVISIBILIDADE
                            </div>

                            <div className={Styles.card_invisibilidade_p}>
                                Não se ver representado nos livros, na TV, nos cargos de decisão. Sentir que a história foi contada sem você.
                            </div>
                        </div>


                        <div className={Styles.card_medo_racismo}>

                            <div className={Styles.card_medo_racismo_h2}>
                                MEDO
                            </div>

                            <div className={Styles.card_medo_racismo_p}>
                                Medo da abordagem, do olhar de desconfiança na loja, da rua à noite. Um cuidado que outros nunca precisam ter.
                            </div>
                        </div>
                    </div>



                    <div className={Styles.consequencia_racismo_card2}>

                        <div className={Styles.card_cansaco_racismo}>

                            <div className={Styles.card_cansaco_racismo_h2}>
                                CANSAÇO
                            </div>

                            <div className={Styles.card_cansaco_racismo_p}>
                                Ter que provar o tempo todo que merece estar ali. Explicar o óbvio, sorrir para a piada, calar para não virar “o problema”.
                            </div>
                        </div>


                        <div className={Styles.card_orgulho_racismo}>

                            <div className={Styles.card_orgulho_racismo_h2}>
                                ORGULHO
                            </div>

                            <div className={Styles.card_orgulho_racismo_p}>
                                E, apesar de tudo, resistência: cultura, música, fé e comunidade que sobreviveram e floresceram.
                            </div>
                        </div>
                    </div>





                </div>







            </div>
        </section>
    )
}
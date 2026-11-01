import Styles from '../transfobia/css/consequencia_transfobia.module.css'
export default function ConsequenciaTransfobia() {
    return (
        <section className={Styles.consequencia_transfobia}>
            <div className={Styles.consequencia_transfobia_info}>

                <div className={Styles.consequencia_transfobia_texto}>
                    <div className={Styles.consequencia_transfobia_texto_h2}>
                        COMO ISSO MACHUCA?
                    </div>

                    <div className={Styles.consequencia_transfobia_texto_p1}>
                        Números não choram. Por trás de cada um deles há alguém sentindo.
                    </div>

                </div>


                <div className={Styles.consequencia_transfobia_cards}>

                    <div className={Styles.consequencia_transfobia_card1}>

                        <div className={Styles.card_pertencimento}>

                            <div className={Styles.card_pertencimento_h2}>
                                NÃO PERTENCIMENTO
                            </div>

                            <div className={Styles.card_pertencimento_p}>
                                Ser chamada pelo nome que não é o seu, em casa, na escola, no atendimento de saúde. Cada vez, uma pequena negação.
                            </div>
                        </div>


                        <div className={Styles.card_medo_transfobia}>

                            <div className={Styles.card_medo_transfobia_h2}>
                                MEDO
                            </div>

                            <div className={Styles.card_medo_transfobia_p}>
                                Medo de usar o banheiro, de andar sozinha, de ser exposta. Um estado de alerta que não desliga.
                            </div>
                        </div>
                    </div>



                    <div className={Styles.consequencia_transfobia_card2}>

                        <div className={Styles.card_exclusao_transfobia}>

                            <div className={Styles.card_exclusao_transfobia_h2}>
                                EXCLUSÃO
                            </div>

                            <div className={Styles.card_exclusao_transfobia_p}>
                                Perder a família, abandonar a escola, ser barrada no emprego. A porta que fecha antes mesmo da conversa.
                            </div>
                        </div>


                        <div className={Styles.card_afirmacao}>

                            <div className={Styles.card_afirmacao_h2}>
                                ORGULHO
                            </div>

                            <div className={Styles.card_afirmacao_p}>
                                E, apesar de tudo, resistência: cultura, música, fé e comunidade que sobreviveram e floresceram.
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}
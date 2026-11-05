import Styles from '../como_agir/css/canais.module.css'
export default function Canais() {
    return (
        <section className={Styles.canais}>
            <div className={Styles.canais_info}>
                <h2 className={Styles.canais_info_texto_h2}>
                    CANAIS DE DE DENÚNCIA E AJUDA
                </h2>

                <div className={Styles.canais_card}>

                    <div className={Styles.card1}>
                        <div className={Styles.disk100}>

                            <div className={Styles.disk100_info}>
                                <h3 className={Styles.disk100_texto_h3}>
                                    100
                                </h3>

                                <h4 className={Styles.disk100_texto_h4}>
                                    Disque Direitos Humanos
                                </h4>


                                <p className={Styles.disk100_texto_p}>
                                    Recebe denúncias de racismo, homofobia, transfobia e outras violações de direitos. Ligação gratuita.
                                </p>
                            </div>

                        </div>


                        <div className={Styles.disk100}>

                            <div className={Styles.disk100_info}>
                                <h3 className={Styles.disk100_texto_h3}>
                                    180
                                </h3>

                                <h4 className={Styles.disk100_texto_h4}>
                                    Central de Atendimento à Mulher
                                </h4>


                                <p className={Styles.disk100_texto_p}>
                                    Orienta e recebe denúncias de violência contra a mulher. Ligação gratuita.
                                </p>
                            </div>

                        </div>



                        <div className={Styles.disk100}>

                            <div className={Styles.disk100_info}>
                                <h3 className={Styles.disk100_texto_h3}>
                                    190
                                </h3>

                                <h4 className={Styles.disk100_texto_h4}>
                                    Polícia Militar
                                </h4>


                                <p className={Styles.disk100_texto_p}>
                                    Para emergências e situações de perigo imediato.
                                </p>
                            </div>

                        </div>

                    </div>

                    <div className={Styles.canais_card2}>
                        <div className={Styles.bo}>

                            <div className={Styles.bo_info}>
                                <h3 className={Styles.disk100_texto_h3}>
                                    B.O
                                </h3>

                                <h4 className={Styles.disk100_texto_h4}>
                                    Delegacia
                                </h4>


                                <p className={Styles.disk100_texto_p1}>
                                    Registre o boletim de ocorrência. Há delegacias da mulher e, em alguns estados, delegacias especializadas em crimes raciais e de intolerância.
                                </p>
                            </div>

                        </div>

                        <div className={Styles.bo}>

                            <div className={Styles.bo_info}>
                                <h3 className={Styles.disk100_texto_h3}>
                                    DPE
                                </h3>

                                <h4 className={Styles.disk100_texto_h4}>
                                    Defensoria Pública
                                </h4>


                                <p className={Styles.disk100_texto_p1}>
                                    Assistência jurídica gratuita para quem não pode pagar um advogado.
                                </p>
                            </div>

                        </div>

                    </div>
                </div>





            </div>
        </section>
    )
}
import Styles from '../homofobia/css/consequencia_homofobia.module.css'
export default function ConsequenciaHomofobia() {
    return (
        <section className={Styles.consequencia_homofobia}>
            <div className={Styles.consequencia_homofobia_info}>

                <div className={Styles.consequencia_homofobia_texto}>
                    <div className={Styles.consequencia_homofobia_texto_h2}>
                        COMO ISSO MACHUCA?
                    </div>

                    <div className={Styles.consequencia_homofobia_texto_p1}>
                        Números não choram. Por trás de cada um deles há alguém sentindo.
                    </div>

                </div>



                <div className={Styles.consequencia_homofobia_cards}>

                    <div className={Styles.consequencia_homofobia_card1}>

                        <div className={Styles.card_esconder}>

                            <div className={Styles.card_esconder_h2}>
                                ESCONDER-SE
                            </div>

                            <div className={Styles.card_esconder_p}>
                                Medir cada palavra, trocar o pronome do namorado, viver “no armário” para não perder a família ou o emprego.
                            </div>
                        </div>



                        <div className={Styles.card_medo_homofobia}>

                            <div className={Styles.card_medo_homofobia_h2}>
                                MEDO
                            </div>

                            <div className={Styles.card_medo_homofobia_p}>
                               Medo de dar a mão na rua, de dançar na balada, de ser filmado ou agredido por existir em público.
                            </div>
                        </div>
                    </div>




                    <div className={Styles.consequencia_homofobia_card2}>
                        <div className={Styles.card_rejeicao_homofobia}>


                            <div className={Styles.card_rejeicao_homofobia_h2}>
                                REJEIÇÃO
                            </div>

                            <div className={Styles.card_rejeicao_homofobia_p}>
                               Ouvir em casa que o amor que sente é errado. A ferida que dói mais por vir de quem deveria acolher.
                            </div>
                        </div>



                        <div className={Styles.card_orgulho_homofobia}>

                            <div className={Styles.card_orgulho_homofobia_h2}>
                                ORGULHO
                            </div>

                            <div className={Styles.card_orgulho_homofobia_p}>
                               Parada, amizades e “família escolhida”: o orgulho nasceu como resposta ao medo e hoje é celebração.
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}
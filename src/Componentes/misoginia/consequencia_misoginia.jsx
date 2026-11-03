import Styles from '../misoginia/css/consequencia_misoginia.module.css'
export default function ConsequenciaMisoginia() {
    return (
        <section className={Styles.consequencia_misoginia}>
            <div className={Styles.consequencia_misoginia_info}>

                <div className={Styles.consequencia_misoginia_texto}>
                    <div className={Styles.consequencia_misoginia_texto_h2}>
                        COMO ISSO MACHUCA?
                    </div>

                    <div className={Styles.consequencia_misoginia_texto_p1}>
                        Números não choram. Por trás de cada um deles há alguém sentindo.
                    </div>

                </div>


                <div className={Styles.consequencia_misoginia_cards}>

                    <div className={Styles.consequencia_misoginia_card1}>

                        <div className={Styles.card_culpa}>

                            <div className={Styles.card_culpa_h2}>
                                CULPA IMPOSTA
                            </div>

                            <div className={Styles.card_culpa_p}>
                                “Que roupa ela usava?” A pergunta que transfere a responsabilidade de quem agride para quem sofre.
                            </div>
                        </div>


                        <div className={Styles.card_medo_misoginia}>

                            <div className={Styles.card_medo_misoginia_h2}>
                                MEDO
                            </div>

                            <div className={Styles.card_medo_misoginia_p}>
                               Medo de usar o banheiro, de andar sozinha, de ser exposta. Um estado de alerta que não desliga.
                            </div>
                        </div>
                    </div>



                    <div className={Styles.consequencia_misoginia_card2}>
                        <div className={Styles.card_silencio_misoginia}>

                            <div className={Styles.card_silencio_misoginia_h2}>
                                SILÊNCIO
                            </div>

                            <div className={Styles.card_silencio_misoginia_p}>
                               Calar por vergonha, por dependência, por não ser acreditada. O silêncio protege quem agride, nunca quem sofre.
                            </div>
                        </div>


                        <div className={Styles.card_sororidade}>

                            <div className={Styles.card_sororidade_h2}>
                                SORORIDADE
                            </div>

                            <div className={Styles.card_sororidade_p}>
                               Uma mulher que acolhe outra muda o rumo da história. Rede de apoio salva vidas.
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}
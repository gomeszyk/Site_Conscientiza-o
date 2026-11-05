import Styles from '../como_agir/css/dicas.module.css'
export default function Dicas() {
    return(
        <section className={Styles.dicas}>
            <div className={Styles.dicas_info}>
                <h2 className={Styles.dicas_h2}>
                    SE VOCÊ PRESENCIAR
                </h2>

                <div className={Styles.dicas_cards}>

                    <div className={Styles.dicas_card}> 
                        <h3 className={Styles.dicas_h3}>
                            1
                        </h3>

                        <h4 className={Styles.dicas_h4}>
                           Ofereça ajuda
                        </h4>

                        <p className={Styles.dicas_p}>
                            Pergunte à pessoa o que ela precisa. Acolher vem antes de decidir por ela.
                        </p>
                    </div>

                    <div className={Styles.dicas_card}> 
                        <h3 className={Styles.dicas_h3}>
                            2
                        </h3>

                        <h4 className={Styles.dicas_h4}>
                           Registre
                        </h4>

                        <p className={Styles.dicas_p}>
                           Anote data, local e o que aconteceu. Fotos e vídeos só se for seguro.
                        </p>
                    </div>

                    <div className={Styles.dicas_card}> 
                        <h3 className={Styles.dicas_h3}>
                            3
                        </h3>

                        <h4 className={Styles.dicas_h4}>
                          Denuncie
                        </h4>

                        <p className={Styles.dicas_p}>
                            Use os canais acima. Denunciar também protege as próximas vítimas.
                        </p>
                    </div>



                    
                </div>

            </div>
        </section>
    )
}
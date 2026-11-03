import Styles from '../misoginia/css/definicao_misoginia.module.css'
export default function DefinicaoMisoginia() {
    return (
        <section className={Styles.definicao_misoginia}>
            <div className={Styles.definicao_misoginia_info}>
                <div className={Styles.definicao_misoginia_info_tittle}>
                    <h2 className={Styles.h2_definicao_misoginia}>
                        O QUE É MISOGINIA?
                    </h2>
                </div>

                <div className={Styles.definicao_misoginia_cards}>
                    <div className={Styles.misoginia_individual}>
                        <h3 className={Styles.h3_cards_misoginia_individual}>
                            Misoginia
                        </h3>

                        <p className={Styles.p_cards_misoginia_individual}>
                            Ódio, desprezo ou desconfiança contra mulheres pelo simples fato de serem mulheres.
                        </p>
                    </div>

                    <div className={Styles.misoginia_individual}>
                        <h3 className={Styles.h3_cards_misoginia_individual}>
                            Machismo e misoginia
                        </h3>

                        <p className={Styles.p_cards_misoginia_individual}>
                            O machismo é o sistema de privilégios que coloca o homem acima. A misoginia é a hostilidade que mantém esse sistema de pé.
                        </p>
                    </div>

                    <div className={Styles.misoginia_individual}>
                        <h3 className={Styles.h3_cards_misoginia_individual}>
                            A escada da violência
                        </h3>

                        <p className={Styles.p_cards_misoginia_individual}>
                            Piada, controle, humilhação, assédio, agressão, feminicídio. Cada degrau normaliza o seguinte. Por isso a conversa começa no primeiro.
                        </p>
                    </div>




                </div>
            </div>
        </section>
    )
}
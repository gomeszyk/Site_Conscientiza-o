import Styles from '../homofobia/css/definicao_homofobia.module.css'
export default function DefinicaoHomofobia() {
    return (
        <section className={Styles.definicao_homofobia}>
            <div className={Styles.definicao_homofobia_info}>
                <div className={Styles.definicao_homofobia_info_tittle}>
                    <h2 className={Styles.h2_definicao_homofobia}>
                        O QUE É HOMOFOBIA?
                    </h2>
                </div>

                <div className={Styles.definicao_homofobia_cards}>
                    <div className={Styles.homofobia_individual}>
                        <h3 className={Styles.h3_cards_homofobia_individual}>
                            Homofobia
                        </h3>

                        <p className={Styles.p_cards_homofobia_individual}>
                            Aversão, discriminação ou violência contra pessoas por causa da orientação sexual: gays, lésbicas, bissexuais e outras.
                        </p>
                    </div>

                    <div className={Styles.homofobia_individual}>
                        <h3 className={Styles.h3_cards_homofobia_individual}>
                            LGBTQIA+
                        </h3>

                        <p className={Styles.p_cards_homofobia_individual}>
                            Sigla que reúne lésbicas, gays, bissexuais, pessoas trans, queer, intersexo, assexuais e outras identidades. O “+” indica que a lista está sempre aberta.
                        </p>
                    </div>

                    <div className={Styles.homofobia_individual}>
                        <h3 className={Styles.h3_cards_homofobia_individual}>
                            Lesbofobia e bifobia
                        </h3>

                        <p className={Styles.p_cards_homofobia_individual}>
                            Formas específicas de preconceito. Lésbicas e bissexuais enfrentam violência e também apagamento: a negação de que sua orientação existe.
                        </p>
                    </div>




                </div>
            </div>
        </section>
    )
}
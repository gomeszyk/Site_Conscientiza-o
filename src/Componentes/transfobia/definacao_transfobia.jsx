import Styles from '../transfobia/css/definicao_transfobia.module.css'
export default function DefinicaoTransfobia() {
    return (
            <section className={Styles.definicao_transfobia}>
                <div className={Styles.definicao_transfobia_info}>
                    <div className={Styles.definicao_transfobia_info_tittle}>
                        <h2 className={Styles.h2_definicao_transfobia}>
                            O QUE É TRANSFÓBIA?
                        </h2>
                    </div>
    
                    <div className={Styles.definicao_transfobia_cards}>
                        <div className={Styles.transfobia_individual}>
                            <h3 className={Styles.h3_cards_transfobia_individual}>
                                Transfobia
                            </h3>
    
                            <p className={Styles.p_cards_transfobia_individual}>
                                Discriminação, ódio ou violência contra pessoas trans: travestis, mulheres e homens trans e pessoas não binárias.
                            </p>
                        </div>

                        <div className={Styles.transfobia_individual}>
                            <h3 className={Styles.h3_cards_transfobia_individual}>
                                Identidade de gênero ≠ orientação sexual
                            </h3>
    
                            <p className={Styles.p_cards_transfobia_individual}>
                                Identidade de gênero é como a pessoa se reconhece. Orientação sexual é por quem ela sente atração. São coisas diferentes.
                            </p>
                        </div>

                        <div className={Styles.transfobia_individual}>
                            <h3 className={Styles.h3_cards_transfobia_individual}>
                                Cis e trans
                            </h3>
    
                            <p className={Styles.p_cards_transfobia_individual}>
                                Pessoa cis é aquela cuja identidade corresponde ao gênero atribuído no nascimento. Pessoa trans é aquela cuja identidade é diferente dele.
                            </p>
                        </div>

                        
    
                        
                    </div> 
                </div>
            </section>
        )
}
import Styles from './css/definicao_racismo.module.css'
export default function DefinicaoRacismo() {
    return (
        <section className={Styles.definicao_racismo}>
            <div className={Styles.definicao_racismo_info}>
                <div className={Styles.definicao_racismo_info_tittle}>
                    <h2 className={Styles.h2_definicao_racismo}>
                        O QUE É RACISMO?
                    </h2>
                </div>

                <div className={Styles.definicao_racismo_cards}>
                    <div className={Styles.racismo_individual}>
                        <h3 className={Styles.h3_cards_racismo_individual}>
                            Racismo Individual
                        </h3>

                        <p className={Styles.p_cards_racismo_individual}>
                            Preconceito e discriminação de uma pessoa diretamente contra outra (atitudes, ofensas e agressões interpessoais).
                        </p>
                    </div>

                    <div className={Styles.racismo_institucional}>
                        <h3 className={Styles.h3_cards_racismo_institucional}>
                            Racismo Institucional
                        </h3>

                        <p className={Styles.p_cards_racismo_institucional}>
                            Normas, rotinas e práticas de empresas e instituições que resultam na desvantagem e exclusão de grupos racializados, independente da intenção individual.
                        </p>
                    </div>

                    <div className={Styles.racismo_estrutural}>
                        <h3 className={Styles.h3_cards_racismo_estrutural}>
                            Racismo Estrutural
                        </h3>
                        <p className={Styles.p_cards_racismo_estrutural}>
                            Processo histórico e sistêmico em que as desigualdades raciais estão enraizadas na própria estrutura social, econômica e política, naturalizando privilégios e disparidades de poder.
                        </p>
                    </div>

                </div> 
            </div>
        </section>
    )
}
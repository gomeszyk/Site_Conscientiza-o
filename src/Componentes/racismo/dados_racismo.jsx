import Styles from './css/dados_racismo.module.css'
export default function DadosRacismo() {
    return (
        <section className={Styles.dados_racismo}>
            <div className={Styles.dados_racismo_info}>
                <div className={Styles.dados_racismo_h2}>
                    <h2 className={Styles.dados_racismo_h2_text}>
                        EM NÚMEROS
                    </h2>
                </div>



                <div className={Styles.dados_racismo_numeros}>

                    <div className={Styles.populacao_racismo}>
                        <div className={Styles.populacao_racismo_h2}>
                            55,5%
                        </div>

                        <div className={Styles.populacao_racismo_p1}>
                            da população brasileira se declara preta ou parda (45,3% pardos e 10,2% pretos)
                        </div>

                        <div className={Styles.populacao_racismo_fonte}>
                            Fonte: IBGE, Censo 2022
                        </div>
                    </div>

                    <div className={Styles.vitimas_racismo}>

                        <div className={Styles.vitimas_racismo_h2}>
                            77%
                        </div>

                        <div className={Styles.vitimas_racismo_p1}>
                            das vítimas de homicídio no Brasil são pessoas negras. O risco de uma pessoa negra ser assassinada é 2,7 vezes maior
                        </div>

                        <div className={Styles.vitimas_racismo_fonte}>
                            Fonte: Atlas da Violência 2026 (dados de 2024)
                        </div>
                    </div>

                    <div className={Styles.desigualdade_racismo}>
                        <div className={Styles.desigualdade_racismo_h2}>
                            67,7%
                        </div>

                        <div className={Styles.desigualdade_racismo_p1}>
                            é quanto a mais, por hora, ganham trabalhadores brancos (R$ 23,02) do que pretos ou pardos (R$ 13,73)
                        </div>


                        <div className={Styles.desigualdade_racismo_fonte}>
                            Fonte: IBGE, rendimento-hora de 2023
                        </div>

                    </div>

                </div>

            </div>
        </section>
    )
}
import Styles from '../misoginia/css/dados_misoginia.module.css'
export default function DadosMisoginia() {
    return (
        <section className={Styles.dados_misoginia}>
            <div className={Styles.dados_misoginia_info}>
                <div className={Styles.dados_misoginia_h2}>
                    <h2 className={Styles.dados_misoginia_h2_text}>
                        EM NÚMEROS
                    </h2>
                </div>

                <div className={Styles.dados_misoginia_numeros}>

                    <div className={Styles.vitima_misoginia}>
                        <div className={Styles.vitima_misoginia_h2}>
                            1.571
                        </div>

                        <div className={Styles.vitima_misoginia_p1}>
                            feminicídios em 2025, o maior número da série histórica, cerca de 4 por dia
                        </div>

                        <div className={Styles.vitima_misoginia_fonte}>
                            Fonte: Anuário Brasileiro de Segurança Pública 2026 (FBSP)
                        </div>
                    </div>

                    <div className={Styles.vitima_misoginia}>
                        <div className={Styles.vitima_misoginia_h2}>
                            84.388
                        </div>

                        <div className={Styles.vitima_misoginia_p1}>
                            estupros registrados em 2025, o equivalente a 39,5 por 100 mil habitantes
                        </div>

                        <div className={Styles.vitima_misoginia_fonte}>
                            Fonte: Anuário Brasileiro de Segurança Pública 2026 (FBSP)
                        </div>
                    </div>

                    <div className={Styles.vitima_misoginia}>
                        <div className={Styles.vitima_misoginia_h2}>
                            78,9%
                        </div>

                        <div className={Styles.vitima_misoginia_p1}>
                           é quanto as mulheres recebem do rendimento dos homens
                        </div>

                        <div className={Styles.vitima_misoginia_fonte2}>
                            Fonte: IBGE, Estatísticas de Gênero (dados de 2022)
                        </div>
                    </div>


                </div>



            </div>
        </section>
    )

}

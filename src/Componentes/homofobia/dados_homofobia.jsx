import Styles from '../homofobia/css/dados_homofobia.module.css'
export default function DadosHomofobia() {
    return (
        <section className={Styles.dados_homofobia}>
            <div className={Styles.dados_homofobia_info}>
                <div className={Styles.dados_homofobia_h2}>
                    <h2 className={Styles.dados_homofobia_h2_text}>
                        EM NÚMEROS E DATAS
                    </h2>
                </div>

                <div className={Styles.dados_homofobia_numeros}>

                    <div className={Styles.vitima_homofobia}>
                        <div className={Styles.vitima_homofobia_h2}>
                            257
                        </div>

                        <div className={Styles.vitima_homofobia_p1}>
                            mortes violentas de pessoas LGBT+ no Brasil em 2025, sendo 204 homicídios. Gays são 60,7% das vítimas
                        </div>

                        <div className={Styles.vitima_homofobia_fonte}>
                            Fonte: Grupo Gay da Bahia, Observatório de Mortes Violentas de LGBT + 2025
                        </div>
                    </div>

                    <div className={Styles.vitima_homofobia}>
                        <div className={Styles.vitima_homofobia_h2}>
                            2011
                        </div>

                        <div className={Styles.vitima_homofobia_p1}>
                            ano em que o STF reconheceu a união estável entre pessoas do mesmo sexo
                        </div>

                        <div className={Styles.vitima_homofobia_fonte}>
                            Fonte: STF (ADPF 132 e ADI 4277)
                        </div>
                    </div>

                    <div className={Styles.vitima_homofobia}>
                        <div className={Styles.vitima_homofobia_h2}>
                            2013
                        </div>

                        <div className={Styles.vitima_homofobia_p1}>
                           ano em que o CNJ obrigou os cartórios a celebrar casamento civil entre pessoas do mesmo sexo
                        </div>

                        <div className={Styles.vitima_homofobia_fonte}>
                            Fonte: CNJ, Resolução 175/2013
                        </div>
                    </div>


                </div>



            </div>
        </section>
    )

}

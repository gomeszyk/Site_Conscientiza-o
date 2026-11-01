import Styles from '../transfobia/css/dados_transfobia.module.css'
export default function DadosTransfobia() {
    return (
        <section className={Styles.dados_transfobia}>
            <div className={Styles.dados_transfobia_info}>
                <div className={Styles.dados_transfobia_h2}>
                    <h2 className={Styles.dados_transfobia_h2_text}>
                        EM NÚMEROS
                    </h2>
                </div>

                <div className={Styles.dados_transfobia_numeros}>

                    <div className={Styles.vitima_transfobia}>
                        <div className={Styles.vitima_transfobia_h2}>
                            80
                        </div>

                        <div className={Styles.vitima_transfobia_p1}>
                            pessoas trans e travestis assassinadas no Brasil em 2025. O país segue como o que mais mata pessoas trans no mundo
                        </div>

                        <div className={Styles.vitima_transfobia_fonte}>
                            Fonte: Dossiê ANTRA 2026
                        </div>
                    </div>

                    <div className={Styles.expectativa_transfobia}>

                        <div className={Styles.expectativa_transfobia_h2}>
                            -35
                        </div>

                        <div className={Styles.expectativa_transfobia_p1}>
                            anos: estimativa de expectativa de vida da população trans no Brasil
                        </div>

                        <div className={Styles.expectativa_transfobia_fonte}>
                            Fonte: Dossiê ANTRA 2026
                        </div>
                    </div>

                    <div className={Styles.desigualdade_transfobia}>
                        <div className={Styles.desigualdade_transfobia_h2}>
                            25%
                        </div>

                        <div className={Styles.desigualdade_transfobia_p1}>
                            das pessoas trans têm emprego formal no Brasil
                        </div>


                        <div className={Styles.desigualdade_transfobia_fonte}>
                            Fonte: IPEA, citado no Dossiê ANTRA 2026
                        </div>

                    </div>

                </div>



            </div>
        </section>
    )

}

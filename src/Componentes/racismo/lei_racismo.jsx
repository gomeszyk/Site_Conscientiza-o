import Styles from '../racismo/css/lei_racismo.module.css'
export default function LeiRacismo() {
    return (
        <section className={Styles.lei_racismo}>

            <div className={Styles.lei_racismo_info}>

                <div className={Styles.lei_racismo_div1}>

                    <div className={Styles.lei_racismo_div1_h2}>
                        O QUE A LEI DIZ
                    </div>

                    <div className={Styles.lei_racismo_div1_p1}>
                        <h3 className={Styles.lei_racismo_h3}>
                            Lei nº 7.716/1989
                        </h3>

                        <p className={Styles.lei_racismo_p1989}>
                            Define os crimes resultantes de preconceito de raça ou de cor.
                        </p>
                    </div>


                    <div className={Styles.lei_racismo_div1_p2}>
                        <h3 className={Styles.lei_racismo_h4}>
                            Lei nº 14.532/2023
                        </h3>

                        <p className={Styles.lei_racismo_p2023}>
                            A injúria racial passou a ser tratada como racismo, crime inafiançável e imprescritível.
                        </p>
                    </div>
                </div>


                <div className={Styles.lei_racismo_div2}>

                    <div className={Styles.lei_racismo_div2_h2}>
                        O QUE VOCÊ PODE FAZER
                    </div>



                    <div className={Styles.lei_racismo_div2_p1}>
                        <h3 className={Styles.lei_racismo_h5}>
                            Ouça e aprenda
                        </h3>

                        <p className={Styles.lei_racismo_pler}>
                            Leia, assista e escute autores negros. Informação é o primeiro passo..
                        </p>
                    </div>

                    <div className={Styles.lei_racismo_div2_p2}>
                        <h3 className={Styles.lei_racismo_h6}>
                            Não de risada da piada
                        </h3>

                        <p className={Styles.lei_racismo_p2023}>
                            Interromper uma “brincadeira” racista muda o clima ao redor.
                        </p>
                    </div>


                    <div className={Styles.lei_racismo_div2_p3}>
                        <h3 className={Styles.lei_racismo_h6}>
                            Denuncie
                        </h3>

                        <p className={Styles.lei_racismo_p2023}>
                            Disque 100 (direitos humanos) ou procure a delegacia mais próxima.
                        </p>
                    </div>







                </div>






            </div>
        </section>
    )
}
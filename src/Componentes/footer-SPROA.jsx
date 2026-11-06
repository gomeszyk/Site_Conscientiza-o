import Styles from './css/footer.module.css'
import Temas from '../assets/img/temas_footer.png'
import Disk from '../assets/img/disk_footer.png'
import Fontes from '../assets/img/fontes_footer.png'
import Linkedin from '../assets/img/linkedin.png'
import GitHub from '../assets/img/github.png'
export default function Footer() {
    return (
        <footer>
            <div className={Styles.footer1}>
                <div className={Styles.div1}>
                    <h2 className={Styles.footer_h2}>
                        Sem Medo de Ser
                    </h2>

                    <p className={Styles.footer_p1}>
                        Quatro lutas, uma só voz.
                        Entender. Sentir. Agir.
                    </p>
                </div>

                <div className={Styles.div2}>
                    <img src={Temas} alt="temas" className={Styles.temas} />
                </div>

                <div className={Styles.div3}>
                    <img src={Disk} alt="disk" className={Styles.disk} />
                </div>

                <div className={Styles.div4}>
                    <img src={Fontes} alt="fontes" className={Styles.fontes} />
                </div>
            </div>

            <div className={Styles.footer2}>

                <div className={Styles.footer2_text}>
                    <p className={Styles.footer_p2}>
                        Projeto institucional por Gabriel Prado Gomes |  PROA 2026 | Dados de Outubro de 2026.
                    </p>

                    <div className={Styles.footer2_contatos}>
                        <p className={Styles.footer_p3}>
                            Contatos:
                        </p>

                        <a href='https://www.linkedin.com/in/gabriel-prado-gomess' target="_blank" rel="noopener noreferrer" className={Styles.iconelinkedin}>
                            <img src={Linkedin} alt="linkedin" className={Styles.linkedin} /> 
                        </a>

                        <a href='https://github.com/gomeszyk' target="_blank" rel="noopener noreferrer" className={Styles.iconelinkedin}>
                            <img src={GitHub} alt="github" className={Styles.linkedin} /> 
                        </a>


                    </div>



                </div>



                <a href='#' className={Styles.footer_link}>
                    ↗ Voltar ao topo
                </a>

            </div>



        </footer>
    )

}